import './CarImages.css'
import { useState, useEffect } from 'react'



interface CarImageProps {
    detailedImages: string[]
}

function CarImages({detailedImages}: CarImageProps) {
    const [focusedImage, setFocusedImage] = useState<string>("")

    useEffect(() => {
        if (detailedImages && detailedImages.length > 0) {
            setFocusedImage(detailedImages[0])   
        }
    }, [detailedImages])

    return (
        <div className='car-details-images-wrapper'>
            <div className='focused-image-wrapper'>
                {focusedImage && (
                    <img src={focusedImage} alt="car focused image" className='focused-image'/>
                )}
            </div>
            <div className='non-focused-image-wrapper'>
                {detailedImages && detailedImages.filter(img => img !== focusedImage).map((img, index) => (
                    <img 
                        key={index} 
                        src={img} 
                        alt={`car detailed image ${index + 1}`}
                        onClick={() => setFocusedImage(img)}
                        className='non-focused-image'></img>
                ))}
            </div>
        </div>        
    )
}

export default CarImages