import React from 'react';
import logo from '../../static/foxbel-music.png';
import './menuLateral.css';
import { TituloLista, TituloPrincipal } from '../titulos/titulos';
import { Username } from '../username/username';
export const MenuLateral = (props) => {
    return (
        <div className="menuLateral bg-dark-red-secondary lg:py-12 grid grid-cols-2 items-center lg:block lg:h-full lg:w-80 md:h-32">
            <div>
                <div className="xl:fixed lg:fixed lg:w-72">
                    <img
                        className="px-10 py-5 w-auto lg:py-0 lg:w-auto"
                        src={logo}
                    />
                    <div className="menuLateral__library hidden md:hidden lg:block my-8">
                        <TituloPrincipal nombreTitulo="Mi Librería" />
                        <TituloLista nombreLista="Recientes" />
                        <TituloLista nombreLista="Artistas" />
                        <TituloLista nombreLista="Canciones" />
                        <TituloLista nombreLista="Estaciones" />
                    </div>
                    <div className="menuLateral__playlist hidden md:hidden lg:block">
                        <TituloPrincipal nombreTitulo="Playlist" />
                        <TituloLista nombreLista="Metal" />
                        <TituloLista nombreLista="Para bailar" />
                        <TituloLista nombreLista="Rock 90s" />
                        <TituloLista nombreLista="Baladas" />
                    </div>
                </div>
            </div>
            <div className="lg:hidden justify-self-center text-white text-sm md:text-2xl mr-8">
                <Username nombreUsuario="Rudy M" />
            </div>
        </div>
    );
};
