import './App.css';
import { BarraBusqueda } from './components/barraBusqueda/barraBusqueda';
import { MenuLateral } from './components/menuLateral/menuLateral';
import { Username } from './components/username/username';
import { BannerArtista } from './components/bannerArtista/bannerArtista';
import { TituloResultado } from './components/titulos/titulos';
import { ListaResultados } from './components/resultados/listaResultados';
import { Reproductor } from './components/reproductor/reproductor';
import { useEffect, useState } from 'react';

function App() {
    // const [player, setPlayer] = useState({
    //     volume: 1,
    //     tracks: [],
    // });

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
                                />
                            </section>
                            <section className="pt-8 pb-8">
                                <TituloResultado nombreResultado="Resultados" />
                                <ListaResultados
                                    resultados={busqueda.resultados}
                                />
                            </section>
                        </div>
                    )}
                </main>
            </div>
            <div className="barraControl">
                <Reproductor />
            </div>
        </div>
    );
}

export default App;
