import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export const BarraBusqueda = (props) => {
    const [termino, setTermino] = useState('');

    const enviarFormulario = (e) => {
        e.preventDefault();
        props.buscar(termino);
    };

    return (
        <button className="flex border focus:outline-none cursor-default justify-end items-center rounded-2xl px-4 py-1 w-2/4 border-gris">
            <form onSubmit={enviarFormulario}>
                <input
                    className="w-full focus:outline-none"
                    type="search"
                    placeholder="Buscar"
                    value={termino}
                    onChange={(e) => setTermino(e.target.value)}
                ></input>
            </form>
            <span className="justify-self-end text-soft-gray">
                <FaSearch />
            </span>
        </button>
    );
};
