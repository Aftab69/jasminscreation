import React, { useState, useEffect } from 'react';
import {Image} from 'cloudinary-react';

const Store = () => {
    const [imageIds, setImageIds] = useState();
    const loadImages = async () => {
        try {
            const res = await fetch('/api/images');
            const data = await res.json();
            console.log(data);
            setImageIds(data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        loadImages();
    }, []);
    return (
        <div>
            <p>Store page</p>
            {imageIds && imageIds.map((imageId, index)=>(
                <Image 
                key={index}
                cloudName="mcblunt707"
                publicId={imageId}
                width="300"
                crop="scale" />
            ))}
        </div>
    )
}

export default Store;
