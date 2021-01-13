import React from 'react';
import { FaSearch } from 'react-icons/fa';

export const BarraBusqueda = () => {
    return (
        <div className="flex">
            <input
                className="barraBusqueda"
                type="search"
                placeholder="Buscar"
            ></input>
            <span>
                <FaSearch />
            </span>
        </div>
    );
};
