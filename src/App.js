import './App.css';
import { BarraBusqueda } from './components/barraBusqueda/barraBusqueda';
import { MenuLateral } from './components/menuLateral/menuLateral';
import { Username } from './components/username/username';
import { BannerArtista } from './components/bannerArtista/bannerArtista';

function App() {
    return (
        <div className="app">
            <nav>
                <MenuLateral />
            </nav>
            <main>
                <section className="app__barraSuperior">
                    <div>
                        <BarraBusqueda />
                    </div>
                    <div>
                        <Username nombreUsuario="Francisco M." />
                    </div>
                </section>

                <section className="px-8">
                    <BannerArtista />
                </section>
            </main>
        </div>
    );
}

export default App;
