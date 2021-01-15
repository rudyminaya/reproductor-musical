import './App.css';
import { BarraBusqueda } from './components/barraBusqueda/barraBusqueda';
import { MenuLateral } from './components/menuLateral/menuLateral';
import { Username } from './components/username/username';
import { BannerArtista } from './components/bannerArtista/bannerArtista';
import { TituloResultado } from './components/titulos/titulos';
import { ListaResultados } from './components/resultados/listaResultados';
import { Reproductor } from './components/reproductor/reproductor';
import { useEffect, useState } from 'react';
import { Howl, Howler } from 'howler';

function App() {
    const [playlist, setPlaylist] = useState({
        tracks: [],
        indice: null,
        reproduccion: true,
    });

    const [busqueda, setBusqueda] = useState({
        termino: '',
        resultados: [],
        primer_resultado: {
            nombre_album: '',
            cover_album: '',
            nombre_artista: '',
            seguidores_artista: '',
            canciones: [],
        },
    });

    const obtenerInfoArtista = (resultado) => {
        return new Promise((res, rej) => {
            let artista = resultado.data[0].artist.id;
            fetch(`https://proxy.davidvpe.com/deezer/artist/${artista}`)
                .then((resultado) => resultado.json())
                .then((json) => {
                    res({
                        ...resultado,
                        artista_fans: json.nb_fan,
                    });
                });
        });
    };

    const obtenerInfoAlbum = (resultado) => {
        return new Promise((res, rej) => {
            let album = resultado.data[0].album.id;
            fetch(`https://proxy.davidvpe.com/deezer/album/${album}/tracks`)
                .then((resultado) => resultado.json())
                .then((json) => {
                    res({
                        ...resultado,
                        album_tracks: json.data,
                    });
                });
        });
    };

    useEffect(() => {
        // console.log('Voy a buscar ' + busqueda.termino);
        if (!busqueda.termino) return;
        fetch(`https://proxy.davidvpe.com/deezer/search?q=${busqueda.termino}`)
            .then((res) => res.json())
            .then(obtenerInfoArtista)
            .then(obtenerInfoAlbum)
            .then((resultado) => {
                let primer = resultado.data[0];
                setBusqueda({
                    ...busqueda,
                    resultados: resultado.data,
                    primer_resultado: {
                        album: primer.album,
                        artist: {
                            ...primer.artist,
                            seguidores: resultado.artista_fans,
                        },
                        canciones: resultado.album_tracks,
                    },
                });
            });
    }, [busqueda.termino]);

    const buscar = (termino) => {
        setBusqueda({ ...busqueda, termino: termino });
    };

    const reproducir = (lista, indice) => {
        setPlaylist({
            tracks: lista,
            indice: indice || 0,
            reproduccion: true,
        });
    };

    const cambiarReproduccion = () => {
        setPlaylist({
            ...playlist,
            reproduccion: !playlist.reproduccion,
        });
    };

    const skip = (cantidad) => {
        let nuevoIndice = playlist.indice + cantidad;
        if (nuevoIndice < playlist.tracks.length && nuevoIndice >= 0) {
            setPlaylist({
                ...playlist,
                indice: playlist.indice + cantidad,
            });
        }
    };

    return (
        <div>
            <div className="app">
                <nav>
                    <MenuLateral />
                </nav>
                <main className="px-8">
                    <section className="app__barraSuperior">
                        <div>
                            <BarraBusqueda buscar={buscar} />
                        </div>
                        <div className="hidden lg:block">
                            <Username nombreUsuario="Rudy M." />
                        </div>
                    </section>

                    {busqueda.resultados.length > 0 && (
                        <div>
                            <section className="hidden lg:block">
                                <BannerArtista
                                    info={busqueda.primer_resultado}
                                    resultados={busqueda.resultados} //No es realmente necesario, pero se requiere para que la funcion reproducir tenga algo para mandar.
                                    reproducir={reproducir}
                                />
                            </section>
                            <section className="pt-0 lg:pt-8 lg:pb-8 pb-32">
                                <TituloResultado nombreResultado="Resultados" />
                                <ListaResultados
                                    resultados={busqueda.resultados}
                                    reproducir={reproducir}
                                />
                            </section>
                        </div>
                    )}
                </main>
            </div>
            {playlist.tracks.length > 0 && (
                <div className="barraControl">
                    <Reproductor
                        reproduccion={playlist.reproduccion}
                        cambiarReproduccion={cambiarReproduccion}
                        track={playlist.tracks[playlist.indice]}
                        skip={skip}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
