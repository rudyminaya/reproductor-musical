import React from 'react';
import albumImg from '../../../static/album.jpg';
import { TituloArtista, TituloPista } from '../../titulos/titulos';
import './resultado.css';
import { FaPlay } from 'react-icons/fa';

export const Resultado = (props) => {
    return (
        <div className="mb-5">
            <div className="resultadoAlbum w-auto lg:w-40 xl:w-auto flex cursor-pointer justify-center items-center">
                <FaPlay className="resultadoPlay opacity-0 absolute text-white text-4xl lg:text-6xl" />
                <img src={props.album.cover_big} />
            </div>
            <TituloPista nombrePista={props.title} />
            <TituloArtista nombreArtista={props.artist.name} />
        </div>
    );
};
