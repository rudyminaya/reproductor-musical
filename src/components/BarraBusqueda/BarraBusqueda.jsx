import React from 'react';
import { FaSearch } from 'react-icons/fa';

export const BarraBusqueda = () => {
    return (
        <button className="flex border justify-end items-center rounded-2xl px-4 py-1 w-2/4 border-gris">
            <input
                className="w-full focus:outline-none"
                type="search"
                placeholder="Buscar"
            ></input>
            <span className="justify-self-end text-soft-gray">
                <FaSearch />
            </span>
        </button>
    );
};
