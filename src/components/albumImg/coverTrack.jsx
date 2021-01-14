import React from 'react';
import album from '../../static/album.jpg';

export const CoverTrack = (props) => {
    return (
        <div>
            <img
                className={props.className}
                src={album}
                alt="esta es la foto del album del artista"
            />
        </div>
    );
};
