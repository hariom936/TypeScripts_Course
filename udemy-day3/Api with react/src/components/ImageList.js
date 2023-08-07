import React from 'react';

const ImageList = (props) => {
    const images = props.images.map((pics) => {
        return <img src={pics.webformatURL} alt="images" />
    })
    return (
        <div>
            {images}
        </div>
    )
}

export default ImageList;
