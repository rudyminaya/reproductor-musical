import React from 'react';
import './botones.css';
import { BsThreeDotsVertical, BsThreeDots } from 'react-icons/bs';
import { FaPlay, FaPause } from 'react-icons/fa';

export const BotonReproducir = (props) => (
    <button
        className="text-white font-light mr-5 bg-red-principal botonReproducir boton hover:opacity-80"
        onClick={props.onClick}
    >
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

export const BotonPlay = () => <FaPlay className="botonControl" />;
export const BotonPausa = () => <FaPause className="botonControl" />;

export const NextPlay = () => (
    <FaPlay className="border-r border-white botonControl botonNext" />
);

export const PrevPlay = () => <FaPlay className="botonControl botonPrev" />;
