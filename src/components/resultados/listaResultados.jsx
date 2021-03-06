import React from 'react';
import { Resultado } from './resultado/resultado';

export const ListaResultados = (props) => {
    return (
        <div className="grid xl:gap-6 md:gap-6 gap-10 lg:gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-20">
            {props.resultados.map((res, indice) => {
                return (
                    <Resultado
                        {...res}
                        onPlay={() =>
                            props.reproducir(props.resultados, indice)
                        }
                    />
                );
            })}
        </div>
    );
};
