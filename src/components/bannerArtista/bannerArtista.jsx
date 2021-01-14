import React from 'react';
import { TituloPrincipal, TituloSeguidores } from '../titulos/titulos';
import album from '../../static/album.jpg';
import './bannerArtista.css';
import { FaPlay } from 'react-icons/fa';
import {
    BotonReproducir,
    BotonSeguir,
    HorizontalDots,
} from '../botones/botones';
import { CoverTrack } from '../albumImg/coverTrack';

export const BannerArtista = (props) => {
    return (
        <div className="flex">
            <div className="lg:max-w-xs imagenAlbum flex justify-center items-center cursor-pointer">
                <FaPlay className="bannerPlay" />
                <CoverTrack />
            </div>
            <div className="bg-red-transparency pt-8 pb-5 infoArtista flex flex-col justify-between">
                <div>
                    <TituloPrincipal nombreTitulo="Adele 21" />
                    <div className="flex items-center">
                        <p className="pl-10 mr-3 text-white">
                            Lo mejor de Adele
                        </p>
                        <TituloSeguidores
                            className="self"
                            cantidadSeguidores="321,123"
                        />
                    </div>
                    <p className="pl-10 pt-3 lg:w-5/6 sm:w-11/12 text-white">
                        Adele Laurie Blue Adkins (Tottenham, Londres,
                        Inglaterra, 5 de mayo de 1988), conocida simplemente
                        como Adele, es una cantante, compositora y
                        multinstrumentista británica.
                    </p>
                </div>
                <div className="botonesDeBanner pl-10 flex items-center ">
                    <BotonReproducir textoBoton="Reproducir" />
                    <BotonSeguir textoBoton="Seguir" />
                    <HorizontalDots />
                </div>
            </div>
        </div>
    );
};
