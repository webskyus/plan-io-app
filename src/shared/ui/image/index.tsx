import React from 'react';

const Image = ({props}) => {
    return <img
        key={"test"}
        src={"https://i.pinimg.com/originals/cc/7a/d3/cc7ad3d3ba4e80853304bee2dc3015da.png" || placeholder}
        alt="movie poster"
        style={{
            objectFit: 'cover',
            transition: 'opacity 300ms ease-in-out',
            width: '100%',
            height: '100%',
        }}
    />
};

export default Image;
