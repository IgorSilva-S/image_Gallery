import React from 'react';

const Photo = ({ data, setFotoAmpliada }) => {
    return (
        <div className="photo" onClick={() => {setFotoAmpliada(data)}}>
            <img src={data.urls.small} alt={data.alt_description} />
        </div>
    )
}

export default Photo;