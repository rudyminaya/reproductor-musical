import React from 'react';
import { TituloArtistaW } from './titulos';

export const InfoReproduciendo = (props) => (
    <span className="text-white flex">
        <TituloArtistaW nombreArtista="Artista - " />
        {props.nombreAlbum}
    </span>
);
