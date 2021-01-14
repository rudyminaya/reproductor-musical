import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

export const Username = (props) => {
    return (
        <div className="username flex items-center">
            <FaUserAlt className="text-red-principal" />
            <span className="pl-4">{props.nombreUsuario}</span>
        </div>
    );
};
