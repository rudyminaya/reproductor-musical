import React, { useState } from 'react';
import './volumen.css';
import {
    IoVolumeMute,
    IoVolumeOff,
    IoVolumeLow,
    IoVolumeMedium,
    IoVolumeHigh,
} from 'react-icons/io5';
export const Volumen = (props) => {
    const [mute, setMute] = useState(false);
    const [volumenTemporal, setVolumenTemporal] = useState(props.volumen);

    let iconoVolumen;
    let volumen = props.volumen * 100;
    if (volumen === 0) {
        if (mute) {
            iconoVolumen = <IoVolumeMute />;
        } else {
            iconoVolumen = <IoVolumeOff />;
        }
    } else if (volumen < 10) {
        iconoVolumen = <IoVolumeLow />;
    } else if (volumen < 60) {
        iconoVolumen = <IoVolumeMedium />;
    } else {
        iconoVolumen = <IoVolumeHigh />;
    }

    return (
        <div className="controlVolumen flex my-8">
            <input
                min={0}
                max={100}
                type="range"
                value={props.volumen * 100}
                onChange={(e) => {
                    props.onChange(e.target.value / 100);
                    setMute(false);
                    setVolumenTemporal(e.target.value / 100);
                }}
            />
            <a
                onClick={() => {
                    props.onChange(mute ? volumenTemporal : 0);
                    setMute(!mute);
                }}
                className="ml-5 text-white text-3xl"
            >
                {iconoVolumen}
            </a>
        </div>
    );
};
