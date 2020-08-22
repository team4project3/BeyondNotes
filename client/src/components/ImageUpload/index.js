import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';


export default function Gallery() {
    const [imageIds, setImageIds] = useState();
    // const= currentValue
    const loadImages = async () => {
        try {
            const res = await fetch('/api/images');
            const data = await res.json();
            setImageIds(data);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        loadImages();
    }, []);
    return (
        <>
        
        <div>            
            <div className="gallery">
                {imageIds &&
                    imageIds.map((imageId, index, ) => (
                        <Image
                            key={index}
                            cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                            publicId={imageId}
                            width="200"
                            crop="scale"
                        />
                    ))}
            </div>
        </div>
    </>
    );
}