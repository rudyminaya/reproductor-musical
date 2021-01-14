import React from 'react';
import { TituloPrincipal, TituloSeguidores } from '../titulos/titulos';
import album from '../../static/album.jpg';
import {
    BotonReproducir,
    BotonSeguir,
    HorizontalDots,
} from '../botones/botones';

export const BannerArtista = (props) => {
    return (
        <div className="flex">
            <div>
                <img
                    className="max-w-xs bg-gray-500"
                    src={album}
                    alt="esta es la foto del album del artista"
                />
            </div>
            <div className="bg-red-transparency pt-8 pb-5 infoArtista flex flex-col justify-between">
                <div>
                    <TituloPrincipal nombreTitulo="Adele 21" />
                    <div className="flex items-center">
                        <p className="pl-10 mr-3 text-white">
                            Lo mejor de Adele
                        </p>
                        <TituloSeguidores
                            className="self"
                            cantidadSeguidores="321,123"
                        />
                    </div>
                    <p className="pl-10 pt-3 lg:w-5/6 sm:w-11/12 text-white">
                        Adele Laurie Blue Adkins (Tottenham, Londres,
                        Inglaterra, 5 de mayo de 1988), conocida simplemente
                        como Adele, es una cantante, compositora y
                        multinstrumentista británica.
                    </p>
                </div>
                <div className="botonesDeBanner pl-10 flex items-center ">
                    <BotonReproducir textoBoton="Reproducir" />
                    <BotonSeguir textoBoton="Seguir" />
                    <HorizontalDots />
                </div>
            </div>
        </div>
    );
};
