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
    });

    const [busqueda, setBusqueda] = useState({
        termino: '',
        resultados: [],
        primer_resultado: {
            nombre_cancion: '',
            nombre_album: '',
            cover_album: '',
            nombre_artista: '',
            seguidores_artista: '',
        },
    });

    const obtenerInfoArtista = (resultado) => {
        return new Promise((res, rej) => {
            let artista = resultado.data[0].artist.id;
            fetch(`https://proxy.davidvpe.com/deezer/artist/${artista}`)
                .then((resultado) => resultado.json())
                .then((json) => {
                    res({
                        resultados: resultado.data,
                        numero_fans: json.nb_fan,
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
            .then((resultado) => {
                let primer = resultado.resultados[0];
                setBusqueda({
                    ...busqueda,
                    resultados: resultado.resultados,
                    primer_resultado: {
                        nombre_cancion: primer.title,
                        nombre_album: primer.album.title,
                        cover_album: primer.album.cover_big,
                        nombre_artista: primer.artist.name,
                        seguidores_artista: resultado.numero_fans,
                    },
                });
            });
    }, [busqueda.termino]);

    const buscar = (termino) => {
        setBusqueda({ ...busqueda, termino: termino });
    };

    const reproducir = (lista) => {
        setPlaylist({
            tracks: lista,
            indice: 0,
        });
    };

    const terminoCancion = () => {
        console.log('cantidad', playlist.tracks.length);
        console.log('indice', playlist.indice);
        if (playlist.tracks.length > playlist.indice + 1) {
            setPlaylist({
                ...playlist,
                indice: playlist.indice + 1,
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
                        <div>
                            <Username nombreUsuario="Francisco M." />
                        </div>
                    </section>

                    {busqueda.resultados.length > 0 && (
                        <div>
                            <section>
                                <BannerArtista
                                    info={busqueda.primer_resultado}
                                    resultados={busqueda.resultados} //No es realmente necesario, pero se requiere para que la funcion reproducir tenga algo para mandar.
                                    reproducir={reproducir}
                                />
                            </section>
                            <section className="pt-8 pb-8">
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
                        track={playlist.tracks[playlist.indice]}
                        reproduciendo={true}
                        terminoCancion={terminoCancion}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
