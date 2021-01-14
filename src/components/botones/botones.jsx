import React from 'react';
import './botones.css';
import { BsThreeDotsVertical, BsThreeDots } from 'react-icons/bs';

export const BotonReproducir = (props) => (
    <button className="text-white font-light mr-5 bg-red-principal botonReproducir boton">
        {props.textoBoton}
    </button>
);

export const BotonSeguir = (props) => (
    <button className="bg-transparent border mr-5 border-red-principal text-red-principal botonSeguir boton">
        {props.textoBoton}
    </button>
);

export const HorizontalDots = () => (
    <BsThreeDots className="text-white text-xl cursor-pointer" />
);

export const VerticalDots = () => (
    <BsThreeDotsVertical className="text-white text-xl cursor-pointer" />
);
