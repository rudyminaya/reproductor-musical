import React from 'react';
import './volumen.css';
import { FaVolumeOff, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
export const Volumen = () => {
    return (
        <div className="controlVolumen flex my-8">
            <input type="range" />
            <FaVolumeOff className="ml-5 text-white text-3xl" />
        </div>
    );
};
