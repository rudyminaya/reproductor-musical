import React from 'react';
import { TituloPrincipal, TituloSeguidores } from '../titulos/titulos';
import album from '../../static/album.jpg';
import './bannerArtista.css';
import { BotonReproducir, BotonSeguir } from '../botones/botones';

export const BannerArtista = (props) => {
    return (
        <div className="h-banner flex">
            <div>
                <img
                    className="w-banner h-banner bg-gray-500"
                    src={album}
                    alt="esta es la foto del album del artista"
                />
            </div>
            <div className="bg-red-400 pt-8 infoArtista">
                <TituloPrincipal nombreTitulo="Adele 21" />
                <div className="flex items-center">
                    <p className="pl-10 mr-3 text-white">Lo mejor de Adele</p>
                    <TituloSeguidores
                        className="self"
                        cantidadSeguidores="321,123"
                    />
                </div>
                <p className="pl-10 pt-3 lg:pr-20 text-white">
                    Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5
                    de mayo de 1988), conocida simplemente como Adele, es una
                    cantante, compositora y multinstrumentista británica.8​
                </p>
                {/* <div className="botonesDeBanner">
                    <BotonReproducir textoBoton="Reproducir" />
                    <BotonSeguir textoBoton="Seguir" />
                </div> */}
            </div>
        </div>
    );
};
