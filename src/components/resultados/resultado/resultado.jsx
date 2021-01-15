import React from 'react';
import { TituloArtista, TituloPista } from '../../titulos/titulos';
import './resultado.css';
import { FaPlay } from 'react-icons/fa';

export const Resultado = (props) => {
    return (
        <div className="lg:mb-5 mb-0">
            <div className="resultadoAlbum relative w-auto lg:w-40 xl:w-auto flex flex-col cursor-pointer items-center justify-center">
                <img src={props.album.cover_big} />
                <a className="absolute" onClick={props.onPlay}>
                    <FaPlay className="resultadoPlay opacity-0 text-white text-4xl lg:text-6xl" />
                </a>
            </div>
            <TituloPista nombrePista={props.title} />
            <TituloArtista nombreArtista={props.artist.name} />
        </div>
    );
};
