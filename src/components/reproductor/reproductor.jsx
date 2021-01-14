import React from 'react';
import './reproductor.css';
import { CoverTrack } from '../albumImg/coverTrack';
import { BotonPlay, NextPlay, PrevPlay } from '../botones/botones';
import { TituloPista } from '../titulos/titulos';
import { Volumen } from '../volumen/volumen';
import { InfoReproduciendo } from '../titulos/infoReproduciendo';

export const Reproductor = () => {
    return (
        <div className="reproductorContenedor fixed bottom-0 w-full h-24 bg-red-principal">
            <div className="h-24">
                <CoverTrack className="h-24" />
            </div>
            <div className="infoReproduccion self-center text-white">
                <TituloPista nombrePista="Canción" />
                <InfoReproduciendo nombreAlbum="Álbum" />
            </div>
            <div className="controles flex self-center justify-self-center">
                <div className="grid grid-cols-3 gap-5">
                    <div className="self-center justify-self-center">
                        <PrevPlay />
                    </div>
                    <div className="bg-light-red p-4 rounded-full justify-self-center">
                        <BotonPlay />
                    </div>
                    <div className="self-center justify-self-center">
                        <NextPlay />
                    </div>
                </div>
            </div>
            <div>
                <Volumen />
            </div>
        </div>
    );
};
