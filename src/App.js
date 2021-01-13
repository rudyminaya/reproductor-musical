import './App.css';
import { BarraBusqueda } from './components/barraBusqueda/BarraBusqueda';
import { MenuLateral } from './components/menuLateral/MenuLateral';
import { Username } from './components/username/Username';

function App() {
    return (
        <div className="app">
            <MenuLateral />
            <div className="app__barraSuperior">
                <div>
                    <BarraBusqueda />
                </div>
                <div>
                    <Username nombreUsuario="Francisco M." />
                </div>
            </div>
        </div>
    );
}

export default App;
