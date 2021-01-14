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

export const TituloPista = (props) => <p>{props.nombrePista}</p>;

export const TituloArtista = (props) => <p>{props.nombreArtista}</p>;

export const TituloSeguidores = (props) => (
    <p className="cantidadSeguidores">{`${props.cantidadSeguidores} seguidores`}</p>
);
