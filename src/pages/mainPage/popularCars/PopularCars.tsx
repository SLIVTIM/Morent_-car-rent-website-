import './PopularCars.css' 
import DefaultButton from '../../../components/button/DefaultButton'
import { useNavigate } from 'react-router-dom'
import { CarDataContext } from '../../../context/CarDataContext'
import { useContext } from 'react'

interface PopularCarsProps {
    favorite_off_svg: string,
    favorite_on_svg: string,
    fuel_svg: string,
    transmission_type_svg: string,
    people_amount_svg: string,
    favorite: boolean,
    favoriteSwitch: () => void,
}

function PopularCars({ favorite_off_svg, favorite_on_svg, fuel_svg, transmission_type_svg, people_amount_svg, favorite, favoriteSwitch }: PopularCarsProps) {

    const navigate = useNavigate()
    const {carsData} = useContext(CarDataContext)

    const handleCardClick = (name: string, year: string) => {
        const nameSlug = name.toLowerCase().replace(/\s+/g, '-');
        const yearSlug = year.toLowerCase().replace(/\s+/g, '-');
        navigate(`/car/${nameSlug}-${yearSlug}`);        
    }

    return (
        <section className='popular-cars-wrapper'>
            <div className='selection-cars-top-part'>
                <h3>Popular Cars</h3>
                <h3>View All</h3>
            </div>
            <div className='selection-cars-cards-wrapper'>
                {carsData.filter(car => car.popular).slice(0, 4).map((car) => (
                    <article className='selection-cars-card-each'>
                        <div className='selection-cars-card-top-part'>
                            <div>
                                <h3>{car.name}</h3>
                                <h4>{car.type}</h4>
                            </div>
                            <img src={favorite ? favorite_on_svg : favorite_off_svg} alt="favorite svg" onClick={favoriteSwitch}/>
                        </div>
                        <div className='card-car-preview-image-container'>
                            <img src={car.previewImg} alt="car preview image" className='card-car-preview'/>
                        </div>
                        <div className='selection-cars-card-details'>
                            <div>
                                <img src={fuel_svg} alt="fuel svg" />
                                <h4>{`${car.carSpecifications.maxLiters} L`}</h4>
                            </div>
                            <div>
                                <img src={transmission_type_svg} alt="transmission type svg" />
                                <h4>{car.carSpecifications.transmissionType}</h4>                            
                            </div>
                            <div>
                                <img src={people_amount_svg} alt="people amount svg" />
                                <h4>{`${car.carSpecifications.passengerCapacity} people`}</h4>                            
                            </div>
                        </div>
                        <div className='selection-cars-card-price-tags'>
                            <div>
                                <h3 className={car.priceTags.discount === true ? "" : "no-discount"}>{`${car.priceTags.currentPrice}$/`}<span>day</span></h3>
                                <h4 className={car.priceTags.discount === true ? "" : "display-none"}>16</h4>
                            </div>
                            <DefaultButton text="Rent Now" onClick={() => handleCardClick(car.name, car.year)}/>
                        </div>
                    </article>
                ))}         
            </div>
        </section>
    )
}

export default PopularCars