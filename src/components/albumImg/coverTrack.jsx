import React from 'react';

export const CoverTrack = (props) => {
    return (
        <div>
            <img
                className={props.className}
                src={props.src}
                alt="esta es la foto del album del artista"
            />
        </div>
    );
};
