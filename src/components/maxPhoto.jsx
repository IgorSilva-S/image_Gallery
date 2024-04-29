import React from 'react';

const MaxPhoto = ({ foto, setFotoAmpliada }) => {
    return (
        <div className='foto-ampliada-backdrop'>
            <div className='foto-ampliada-container'>
                <img src={foto.urls.regular} alt={foto.alt_description} />
            </div>
        </div>
    )
};

export default MaxPhoto;