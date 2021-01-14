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
    });

    useEffect(() => {
        // console.log('Voy a buscar ' + busqueda.termino);
        if (!busqueda.termino) return;
        fetch(`https://proxy.davidvpe.com/deezer/search?q=${busqueda.termino}`)
            .then((res) => res.json())
            .then((json) => {
                setBusqueda({ ...busqueda, resultados: json.data });
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
                                <BannerArtista />
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
