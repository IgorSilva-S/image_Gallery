import React from 'react';
import Photo from './photo.jsx'

const PhotoList = ({ photos, setFotoAmpliada }) => {
    return (
        <div className='album'>
            {photos.map((photo) => (
                <Photo key={photo.id} data={photo} setFotoAmpliada={setFotoAmpliada} />
            ))}
        </div>
    )
};

export default PhotoList;