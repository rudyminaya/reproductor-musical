import React from 'react';
import albumImg from '../../../static/album.jpg';
import { TituloArtista, TituloPista } from '../../titulos/titulos';
import './resultado.css';

export const Resultado = (props) => {
    return (
        <div>
            <div className="resultadoAlbum">
                <img src={albumImg} />
            </div>
            <TituloPista nombrePista="The War is Over" />
            <TituloArtista nombreArtista="Josh Baldwin" />
        </div>
    );
};
