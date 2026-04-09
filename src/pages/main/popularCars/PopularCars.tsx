import './PopularCars.css' 
import favorite_off_svg from './../../../assets/card/empty_heart.svg'
import favorite_on_svg from './../../../assets/card/red_heart.svg'
import bmw_x3 from './../../../assets/car//bmw_x3_suv/bmw_x3.avif'
import fuel_svg from './../../../assets/card/fuel.svg'
import transmission_type_svg from './../../../assets/card/transmission.svg'
import people_amount_svg from './../../../assets/card/people.svg'
import { useState } from 'react'


function PopularCars() {
    const [favorite, setFavorite] = useState(false)

    function favoriteSwitch() {
        setFavorite(!favorite)
    }

    return (
        <section className='popular-cars-wrapper'>
            <div className='selection-cars-top-part'>
                <h3>Popular Cars</h3>
                <h3>View All</h3>
            </div>
            <div className='selection-cars-cards-wrapper'>
                <article className='selection-cars-card-each'>
                    <div className='selection-cars-card-top-part'>
                        <div>
                            <h3>atomwaffen</h3>
                            <h4>atomw</h4>
                        </div>
                        <img src={favorite ? favorite_on_svg : favorite_off_svg} alt="favorite svg" onClick={favoriteSwitch}/>
                    </div>
                    <img src={bmw_x3} alt="" className='card-car-preview'/>
                    <div className='selection-cars-card-details'>
                        <div>
                            <img src={fuel_svg} alt="fuel svg" />
                            <h4>570 L</h4>
                        </div>
                        <div>
                            <img src={transmission_type_svg} alt="transmission type svg" />
                            <h4>Automatic</h4>                            
                        </div>
                        <div>
                            <img src={people_amount_svg} alt="people amount svg" />
                            <h4>4 people</h4>                            
                        </div>
                    </div>
                    <div className='selection-cars-card-price-tags'>
                        <div>
                            <h3>20/<span>day</span></h3>
                            <h4>16</h4>
                        </div>
                        <button>Rent Now</button>
                    </div>
                </article>
                <article className='selection-cars-card-each'>
                    <div className='selection-cars-card-top-part'>
                        <div>
                            <h3>atomwaffen</h3>
                            <h4>atomw</h4>
                        </div>
                        <img src={favorite ? favorite_on_svg : favorite_off_svg} alt="favorite svg" onClick={favoriteSwitch}/>
                    </div>
                    <img src={bmw_x3} alt="" className='card-car-preview'/>
                    <div className='selection-cars-card-details'>
                        <div>
                            <img src={fuel_svg} alt="fuel svg" />
                            <h4>570 L</h4>
                        </div>
                        <div>
                            <img src={transmission_type_svg} alt="transmission type svg" />
                            <h4>Automatic</h4>                            
                        </div>
                        <div>
                            <img src={people_amount_svg} alt="people amount svg" />
                            <h4>4 people</h4>                            
                        </div>
                    </div>
                    <div className='selection-cars-card-price-tags'>
                        <div>
                            <h3>20/<span>day</span></h3>
                            <h4>16</h4>
                        </div>
                        <button>Rent Now</button>
                    </div>
                </article>
                <article className='selection-cars-card-each'>
                    <div className='selection-cars-card-top-part'>
                        <div>
                            <h3>atomwaffen</h3>
                            <h4>atomw</h4>
                        </div>
                        <img src={favorite ? favorite_on_svg : favorite_off_svg} alt="favorite svg" onClick={favoriteSwitch}/>
                    </div>
                    <img src={bmw_x3} alt="" className='card-car-preview'/>
                    <div className='selection-cars-card-details'>
                        <div>
                            <img src={fuel_svg} alt="fuel svg" />
                            <h4>570 L</h4>
                        </div>
                        <div>
                            <img src={transmission_type_svg} alt="transmission type svg" />
                            <h4>Automatic</h4>                            
                        </div>
                        <div>
                            <img src={people_amount_svg} alt="people amount svg" />
                            <h4>4 people</h4>                            
                        </div>
                    </div>
                    <div className='selection-cars-card-price-tags'>
                        <div>
                            <h3>20/<span>day</span></h3>
                            <h4>16</h4>
                        </div>
                        <button>Rent Now</button>
                    </div>
                </article>
                <article className='selection-cars-card-each'>
                    <div className='selection-cars-card-top-part'>
                        <div>
                            <h3>atomwaffen</h3>
                            <h4>atomw</h4>
                        </div>
                        <img src={favorite ? favorite_on_svg : favorite_off_svg} alt="favorite svg" onClick={favoriteSwitch}/>
                    </div>
                    <img src={bmw_x3} alt="" className='card-car-preview'/>
                    <div className='selection-cars-card-details'>
                        <div>
                            <img src={fuel_svg} alt="fuel svg" />
                            <h4>570 L</h4>
                        </div>
                        <div>
                            <img src={transmission_type_svg} alt="transmission type svg" />
                            <h4>Automatic</h4>                            
                        </div>
                        <div>
                            <img src={people_amount_svg} alt="people amount svg" />
                            <h4>4 people</h4>                            
                        </div>
                    </div>
                    <div className='selection-cars-card-price-tags'>
                        <div>
                            <h3>20/<span>day</span></h3>
                            <h4>16</h4>
                        </div>
                        <button>Rent Now</button>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default PopularCars