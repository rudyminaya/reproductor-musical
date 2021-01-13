import './App.css';
import { BarraBusqueda } from './components/BarraBusqueda/BarraBusqueda';
import { MenuLateral } from './components/MenuLateral/MenuLateral';

function App() {
    return (
        <div className="app">
            <MenuLateral />
            <div className="app__barraSuperior">
                <BarraBusqueda />
            </div>
        </div>
    );
}

export default App;
