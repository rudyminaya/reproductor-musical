import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export const BarraBusqueda = (props) => {
    const [termino, setTermino] = useState('');

    const enviarFormulario = (e) => {
        e.preventDefault();
        props.buscar(termino);
    };

    return (
        <button className="flex border focus:outline-none cursor-default items-center rounded-2xl px-4 py-1 w-full lg:w-2/4 border-gris border-opacity-60">
            <form className="w-full" onSubmit={enviarFormulario}>
                <input
                    className="focus:outline-none w-full text-gris pr-2"
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
