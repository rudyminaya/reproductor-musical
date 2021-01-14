import './App.css';
import { BarraBusqueda } from './components/barraBusqueda/barraBusqueda';
import { MenuLateral } from './components/menuLateral/menuLateral';
import { Username } from './components/username/username';
import { BannerArtista } from './components/bannerArtista/bannerArtista';
import { TituloResultado } from './components/titulos/titulos';
import { ListaResultados } from './components/resultados/listaResultados';
import { Reproductor } from './components/reproductor/reproductor';

function App() {
    return (
        <div>
            <div className="app">
                <nav>
                    <MenuLateral />
                </nav>
                <main className="px-8">
                    <section className="app__barraSuperior">
                        <div>
                            <BarraBusqueda />
                        </div>
                        <div>
                            <Username nombreUsuario="Francisco M." />
                        </div>
                    </section>

                    <section>
                        <BannerArtista />
                    </section>
                    <section className="pt-8 pb-8">
                        <TituloResultado nombreResultado="Resultados" />
                        <ListaResultados />
                    </section>
                </main>
            </div>
            <div className="barraControl">
                <Reproductor />
            </div>
        </div>
    );
}

export default App;
