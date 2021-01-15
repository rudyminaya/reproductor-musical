import React, { useState } from 'react';
import './reproductor.css';
import { CoverTrack } from '../albumImg/coverTrack';
import { BotonPlay, BotonPausa, NextPlay, PrevPlay } from '../botones/botones';
import { TituloPista } from '../titulos/titulos';
import { Volumen } from '../volumen/volumen';
import { InfoReproduciendo } from '../titulos/infoReproduciendo';
import ReactHowler from 'react-howler';

export const Reproductor = (props) => {
    const [volumen, setVolumen] = useState(0.5);

    return (
        <div className="reproductorContenedor">
            {props.track && (
                <div style={{ display: 'none' }}>
                    <ReactHowler
                        src={props.track.preview}
                        playing={props.reproduccion}
                        onEnd={() => props.skip(1)}
                        volume={volumen}
                    />
                </div>
            )}
            <div className="hidden lg:block h-24">
                <CoverTrack
                    src={props.track.album.cover_big}
                    className="h-24"
                />
            </div>
            <div className="lg:self-center mb-3 md:mb-0 text-white">
                <TituloPista nombrePista={props.track.title} />
                <InfoReproduciendo nombreAlbum={props.track.album.title} />
            </div>
            <div className="controles flex lg:self-center lg:justify-self-center justify-center">
                <div className="grid grid-cols-3 gap-5">
                    <div className="self-center justify-self-center text-3xl lg:text-base">
                        <button onClick={() => props.skip(-1)}>
                            <PrevPlay />
                        </button>
                    </div>
                    <div>
                        <button
                            className="bg-light-red lg:p-4 p-5 text-3xl lg:text-base rounded-full justify-self-center focus:outline-none bg-none"
                            onClick={props.cambiarReproduccion}
                        >
                            {props.reproduccion ? (
                                <BotonPausa />
                            ) : (
                                <BotonPlay />
                            )}
                        </button>
                    </div>
                    <div className="self-center justify-self-center text-3xl lg:text-base">
                        <button onClick={() => props.skip(1)}>
                            <NextPlay />
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block">
                <Volumen volumen={volumen} onChange={setVolumen} />
            </div>
        </div>
    );
};
