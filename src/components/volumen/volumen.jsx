import React from 'react';
import './volumen.css';
import { FaVolumeOff, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
export const Volumen = (props) => {
    return (
        <div className="controlVolumen flex my-8">
            <input
                min={0}
                max={100}
                type="range"
                value={props.volumen * 100}
                onChange={(e) => {
                    props.onChange(e.target.value / 100);
                }}
            />
            <FaVolumeOff className="ml-5 text-white text-3xl" />
        </div>
    );
};
