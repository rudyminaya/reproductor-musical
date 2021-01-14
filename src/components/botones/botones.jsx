import React from 'react';

export const BotonReproducir = (props) => (
    <button className="rounded-xl bg-red-principal">{props.textoBoton}</button>
);

export const BotonSeguir = (props) => (
    <button className="rounded-xl bg-transparent border-red-principal text-red-principal">
        {props.textoBoton}
    </button>
);
