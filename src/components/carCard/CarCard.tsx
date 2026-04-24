import './CarCard.css'
import { useNavigate } from 'react-router-dom'
import type { Car } from './../../context/CarDataContext'
import DefaultButton from './../../components/button/defaultButton/DefaultButton'
import FavoriteButton from './../../components/button/favoriteButton/FavoriteButton'
import PriceTag from './../../components/priceTags/priceTag'
import fuel_svg from './../../assets/card/fuel.svg'
import transmission_type_svg from './../../assets/card/transmission.svg'
import people_amount_svg from './../../assets/card/people.svg'


interface carCardProps {
    car: Car
}

function CarCard({ car }: carCardProps) {
    const navigate = useNavigate()

    const handleCardClick = (name: string, year: string) => {
        const nameSlug = name.toLowerCase().replace(/\s+/g, '-');
        const yearSlug = year.toLowerCase().replace(/\s+/g, '-');
        navigate(`/car/${nameSlug}-${yearSlug}`);        
    }

    return (
        <article className='selection-cars-card-each'>
            <div className='selection-cars-card-top-part'>
                <div>
                    <h3>{car.name}</h3>
                    <h4>{car.type}</h4>
                </div>
                <FavoriteButton/>
            </div>
            <div className='card-car-preview-image-container'>
                <img src={car.previewImg} alt="car preview image" className='card-car-preview'/>
            </div>
            <div className='selection-cars-card-details'>
                <div>
                    <img src={fuel_svg} alt="fuel svg" />
                    <h4>{`${car.carSpecifications.performance.maxFuelInLiters} L`}</h4>
                </div>
                <div>
                    <img src={transmission_type_svg} alt="transmission type svg" />
                    <h4>{car.carSpecifications.performance.transmissionType}</h4>                            
                </div>
                <div>
                    <img src={people_amount_svg} alt="people amount svg" />
                    <h4>{`${car.carSpecifications.practical.seatingCapacity} people`}</h4>                            
                </div>
            </div>
            <div className='cars-price-tags'>
                <PriceTag carDiscount={car.priceTags.discount} carCurrentPrice={car.priceTags.currentPrice} carOldPrice={car.priceTags.oldPrice}/>
                <DefaultButton text="Rent Now" onClick={() => handleCardClick(car.name, car.year)}/>
            </div>
        </article>
    )
}

export default CarCard