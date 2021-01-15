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
import { info } from 'autoprefixer';

export const BannerArtista = (props) => {
    const clickEnPlay = () => {
        props.reproducir(props.resultados);
    };

    const clickEnPlayAlbum = () => {
        let cancionesConAlbum = props.info.canciones.map((cancion) => ({
            ...cancion,
            album: props.info.album,
        }));
        console.log(cancionesConAlbum);
        props.reproducir(cancionesConAlbum);
    };

    return (
        <div className="flex">
            <div className="xl:w-xs lg:w-auto imagenAlbum flex flex-col justify-center items-center cursor-pointer">
                <CoverTrack src={props.info.album.cover_big} />
                <a className="absolute" onClick={clickEnPlayAlbum}>
                    <FaPlay className="bannerPlay" />
                </a>
            </div>
            <div className="bg-dark-red-secondary text-xs xl:text-base pt-3 xl:pt-8 pb-5 infoArtista flex flex-col justify-between">
                <div>
                    <TituloPrincipal
                        nombreTitulo={`${props.info.artist.name} - ${props.info.album.title}`}
                    />
                    <div className="flex items-center">
                        <p className="pl-10 mr-3 text-white">
                            {`Lo mejor de ${props.info.artist.name}`}
                        </p>
                        <TituloSeguidores
                            className="self"
                            cantidadSeguidores={props.info.artist.seguidores}
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
                <div className="botonesDeBanner hidden xl:flex pl-10 items-center ">
                    <BotonReproducir
                        onClick={clickEnPlayAlbum}
                        textoBoton="Reproducir"
                    />
                    <BotonSeguir textoBoton="Seguir" />
                    <HorizontalDots />
                </div>
            </div>
        </div>
    );
};
