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
                <CoverTrack src={props.info.cover_album} />
            </div>
            <div className="bg-red-transparency pt-8 pb-5 infoArtista flex flex-col justify-between">
                <div>
                    <TituloPrincipal
                        nombreTitulo={`${props.info.nombre_artista} - ${props.info.nombre_cancion}`}
                    />
                    <div className="flex items-center">
                        <p className="pl-10 mr-3 text-white">
                            {`Lo mejor de ${props.info.nombre_artista}`}
                        </p>
                        <TituloSeguidores
                            className="self"
                            cantidadSeguidores={props.info.seguidores_artista}
                        />
                    </div>
                    <p className="pl-10 pt-3 lg:w-5/6 sm:w-11/12 text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ex facilis dolor tempora voluptate, veritatis
                        repellendus? Nostrum ullam voluptate harum inventore sit
                        animi sunt saepe nihil. Exercitationem ut voluptatum eum
                        minus.
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
