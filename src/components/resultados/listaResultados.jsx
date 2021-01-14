import React from 'react';
import { Resultado } from './resultado/resultado';

export const ListaResultados = (props) => {
    return (
        <div className="grid gap-7 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2">
            <Resultado />
            <Resultado />
            <Resultado />
            <Resultado />
            <Resultado />
            <Resultado />
            <Resultado />
            <Resultado />
            <Resultado />
            <Resultado />
        </div>
    );
};
