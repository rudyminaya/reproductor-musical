import React from 'react';
import './titulos.css';
export const TituloPrincipal = (props) => (
    <h1 className="tituloPrincipal">{props.nombreTitulo}</h1>
);

export const TituloResultado = (props) => (
    <h1 className="tituloResultado">{props.nombreResultado}</h1>
);

export const TituloLista = (props) => (
    <h6 className="tituloLista">{props.nombreLista}</h6>
);

export const TituloPista = (props) => (
    <p className="tituloPista">{props.nombrePista}</p>
);

export const TituloArtista = (props) => (
    <p className="tituloArtista">{props.nombreArtista}</p>
);

export const TituloArtistaW = (props) => (
    <p className="tituloArtistaW">{props.nombreArtista}</p>
);

export const TituloSeguidores = (props) => (
    <p className="cantidadSeguidores">{`${props.cantidadSeguidores} seguidores`}</p>
);
