import './App.css';
import { BarraBusqueda } from './components/barraBusqueda/barraBusqueda';
import { MenuLateral } from './components/menuLateral/menuLateral';
import { Username } from './components/username/username';
import { BannerArtista } from './components/bannerArtista/bannerArtista';
import { TituloResultado } from './components/titulos/titulos';

function App() {
    return (
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
                <section className="pt-10 pb-8">
                    <TituloResultado nombreResultado="Resultados" />
                </section>
            </main>
        </div>
    );
}

export default App;
