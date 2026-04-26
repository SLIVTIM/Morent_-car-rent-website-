import './CarNotFound.css'
import sadSmileSvg from './../../../../assets/carNotFound/sad-smile.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CarNotFound() {
    const navigate = useNavigate()

    const [goBackImgHovered, setGoBackImgHovered] = useState(false)
    return (
        <section className='car-not-found-wrapper'>
            <div 
                className='car-not-found-go-back-wrapper'
                onMouseEnter={() => setGoBackImgHovered(true)}
                onMouseLeave={() => setGoBackImgHovered(false)}
                >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 50 40" 
                    width="50" 
                    height="40"
                >
                    <g transform="translate(5, 20)">
                        {/* STATIC HEAD: Always visible */}
                        <polyline 
                            points="10,-10 0,0 10,10" 
                            fill="none" 
                            stroke="#3563E9" 
                            strokeWidth="4" 
                            strokeLinecap="round" 
                        />

                        {/* ANIMATED LINE: Controlled by goBackImgHovered */}
                        <line 
                            x1="0" 
                            y1="0" 
                            x2="30" 
                            y2="0" 
                            fill="none" 
                            stroke="#3563E9" 
                            strokeWidth="4" 
                            strokeLinecap="round"
                            style={{
                                strokeDasharray: 30,
                                // When hovered, offset is 0 (visible). When not, it's 30 (hidden).
                                strokeDashoffset: goBackImgHovered ? 0 : 30,
                                transition: 'stroke-dashoffset 0.3s ease-out'
                            }}
                        />
                    </g>
                </svg>
                <h2 onClick={() => navigate('/')}>Go Back</h2>
            </div>
            <div className='car-not-found-message-wrapper'>
                <img src={sadSmileSvg} alt="sad smile svg" />
                <h2 className='car-not-found-message'>Car not found!</h2>
            </div>
        </section>
    )
}

export default CarNotFound