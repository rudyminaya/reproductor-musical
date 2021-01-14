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
        <div className="reproductorContenedor fixed bottom-0 w-full h-24 bg-red-principal">
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
            <div className="h-24">
                <CoverTrack
                    src={props.track.album.cover_big}
                    className="h-24"
                />
            </div>
            <div className="infoReproduccion self-center text-white">
                <TituloPista nombrePista={props.track.title} />
                <InfoReproduciendo nombreAlbum={props.track.album.title} />
            </div>
            <div className="controles flex self-center justify-self-center">
                <div className="grid grid-cols-3 gap-5">
                    <div className="self-center justify-self-center">
                        <button onClick={() => props.skip(-1)}>
                            <PrevPlay />
                        </button>
                    </div>
                    <div className="bg-light-red p-4 rounded-full justify-self-center">
                        <button onClick={props.cambiarReproduccion}>
                            {props.reproduccion ? (
                                <BotonPausa />
                            ) : (
                                <BotonPlay />
                            )}
                        </button>
                    </div>
                    <div className="self-center justify-self-center">
                        <button onClick={() => props.skip(1)}>
                            <NextPlay />
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <Volumen volumen={volumen} onChange={setVolumen} />
            </div>
        </div>
    );
};
