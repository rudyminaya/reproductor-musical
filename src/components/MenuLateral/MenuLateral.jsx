import React from 'react';
import logo from '../../static/foxbel-music.png';
import './MenuLateral.css';
import { TituloLista, TituloPrincipal } from '../Titulos/Titulos';
export const MenuLateral = (props) => {
    return (
        <div className="menuLateral bg-dark-red-secondary h-screen lg:w-80">
            <img className="px-10" src={logo} />
            <div className="menuLateral__library my-8">
                <TituloPrincipal nombreTitulo="Mi Librería" />
                <TituloLista nombreLista="Recientes" />
                <TituloLista nombreLista="Artistas" />
                <TituloLista nombreLista="Canciones" />
                <TituloLista nombreLista="Estaciones" />
            </div>
            <div className="menuLateral__playlist">
                <TituloPrincipal nombreTitulo="Playlist" />
                <TituloLista nombreLista="Metal" />
                <TituloLista nombreLista="Para bailar" />
                <TituloLista nombreLista="Rock 90s" />
                <TituloLista nombreLista="Baladas" />
            </div>
        </div>
    );
};
