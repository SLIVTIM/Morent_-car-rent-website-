import './RecomendedCars.css'
import './../popularCars/PopularCars.css'
import bmw_x3 from './../../../assets/car//bmw_x3_suv/bmw_x3.avif'
import DefaultButton from '../../../components/button/DefaultButton'

interface RecomendedCarsProps {
    favorite_off_svg: string,
    favorite_on_svg: string,
    fuel_svg: string,
    transmission_type_svg: string,
    people_amount_svg: string,
    favorite: boolean,
    favoriteSwitch: () => void
}

function RecomendedCars({favorite_off_svg, favorite_on_svg, fuel_svg, transmission_type_svg, people_amount_svg, favorite, favoriteSwitch}: RecomendedCarsProps) {
    return (
        <section className='recomended-cars-wrapper'>
            <div className='selection-cars-top-part'>
                <h3>Recomended Cars</h3>
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
                        <DefaultButton text="Rent Now"/>
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
                        <DefaultButton text="Rent Now"/>
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
                        <DefaultButton text="Rent Now"/>
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
                        <DefaultButton text="Rent Now"/>
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
                        <DefaultButton text="Rent Now"/>
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
                        <DefaultButton text="Rent Now"/>
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
                        <DefaultButton text="Rent Now"/>
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
                        <DefaultButton text="Rent Now"/>
                    </div>
                </article>      
            </div>
            <DefaultButton text="Shom More Cars"/>
        </section>
    )
}

export default RecomendedCars