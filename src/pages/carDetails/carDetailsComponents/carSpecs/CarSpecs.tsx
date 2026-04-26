import './CarSpecs.css'
import fuel_svg_1 from './../../../../assets/carDetails/fuel-1.svg'
import fuel_svg_2 from './../../../../assets/carDetails/fuel-2.svg'
import car_seat_svg from './../../../../assets/carDetails/car_seat.svg'
import horsepower_svg from './../../../../assets/carDetails/horsepower.svg'
import speedometer_svg from './../../../../assets/carDetails/speedometer.svg'
import drive_train_svg from './../../../../assets/carDetails/drive-train.svg'
import engine_svg from './../../../../assets/carDetails/engine.svg'
import transmission_svg from './../../../../assets/carDetails/transmission.svg'
import luggage_svg from './../../../../assets/carDetails/luggage.svg'
import door_svg from './../../../../assets/carDetails/door.svg'
import DefaultButton from './../../../../components/button/defaultButton/DefaultButton'
import FavoriteButton from './../../../../components/button/favoriteButton/FavoriteButton'
import PriceTag from './../../../../components/priceTags/priceTag'
import star_full_svg from './../../../../assets/carDetails/star-full.svg'
import star_empty_svg from './../../../../assets/carDetails/star-empty.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import type { Car } from '../../../../context/CarDataContext'


interface CarSpecsProps {
    currentCar: Car
}

function CarSpecs({currentCar}: CarSpecsProps) {
    const calculatedAverageRating = () => {
        if (currentCar.reviews.length === 0) return 0
 
        const totalScore = currentCar.reviews.reduce((data, reviews) => data + reviews.rating, 0)
        const average = totalScore / currentCar.reviews.length

        return Math.round(average)
    }

    const averageRating = calculatedAverageRating()

    return (
        <div className='car-details-info-wrapper'>
            <div className='car-details-info-wrapper-title'>
                <div className='car-details-info-title-top-part'>
                    <h2>{currentCar.name} <span>({currentCar.year})</span></h2>
                    <FavoriteButton/>
                </div>
                <div className='car-details-info-title-bottom-part'> 
                    {[1, 2, 3, 4, 5].map((starIndex) => (
                        <img key={starIndex} src={starIndex <= averageRating ? star_full_svg : star_empty_svg} alt="star svg" />
                    ))}
                    <p>{currentCar.reviews.length}+ Reviewer</p>
                </div>
            </div>
            <p className='car-details-paragraph'>{currentCar.description}</p>
            <div className='car-details-specs'>
                <div className='car-details-specs-each-side'>
                    <div className='car-details-specs-each-spec-container'>
                        <img src={fuel_svg_1} alt="fuel svg" />
                        <h4>Max Fuel: {currentCar.carSpecifications.performance.maxFuelInLiters} Liters</h4>
                    </div>
                    <div className='car-details-specs-each-spec-container'>
                        <img src={fuel_svg_2} alt="fuel svg" />
                        <h4>Fuel Type: {currentCar.carSpecifications.performance.fuelType}</h4>
                    </div>
                    <div className='car-details-specs-each-spec-container'>
                        <img src={transmission_svg} alt="transmission svg" />
                        <h4>Transmission Type: {currentCar.carSpecifications.performance.transmissionType}</h4>
                    </div>
                    <div className='car-details-specs-each-spec-container'>
                        <img src={horsepower_svg} alt="horsepower svg" />
                        <h4>Horsepower: {currentCar.carSpecifications.performance.horsePower}</h4>
                    </div>
                    <div className='car-details-specs-each-spec-container'>
                        <img src={speedometer_svg} alt="speedometer svg" />
                        <h4>Acceleration 1 - 100: {currentCar.carSpecifications.performance.acceleration}</h4>
                    </div>
                </div>
                <div className='car-details-specs-each-side'>
                    <div className='car-details-specs-each-spec-container'>
                        <img src={drive_train_svg} alt="drive train svg" />
                        <h4>Drive Train: {currentCar.carSpecifications.performance.driveTrain}</h4>
                    </div>
                    <div className='car-details-specs-each-spec-container'>
                        <img src={engine_svg} alt="engine svg" />
                        <h4>Engine: {currentCar.carSpecifications.performance.engine}</h4>
                    </div>
                    <div className='car-details-specs-each-spec-container'>
                        <img src={car_seat_svg} alt="car seat svg" />
                        <h4>Seating Capacity: {currentCar.carSpecifications.practical.seatingCapacity}</h4>
                    </div>
                    <div className='car-details-specs-each-spec-container'>
                        <img src={luggage_svg} alt="luggage svg" />
                        <h4>Luggage Capacity: {currentCar.carSpecifications.practical.luggageCapacity}</h4>
                    </div>
                    <div className='car-details-specs-each-spec-container'>
                        <img src={door_svg} alt="door svg" />
                        <h4>Door Count: {currentCar.carSpecifications.practical.doorCount}</h4>
                    </div>
                </div>
            </div>
            <div className='car-details-features-wrapper'>
                <h3>Features</h3>
                <Swiper 
                    className='car-details-features-swiper-wrapper'
                    spaceBetween={40}
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    >
                    {currentCar.features.map((feature) => (
                        <SwiperSlide key={feature} className='car-details-features-swiper-each'>
                            <h4>{feature}</h4>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>  
            <div className='cars-price-tags car-details-price-tags'>
                <PriceTag carDiscount={currentCar.priceTags.discount} carCurrentPrice={currentCar.priceTags.currentPrice} carOldPrice={currentCar.priceTags.oldPrice} />
                <DefaultButton text='Rent Now'/>
            </div>
        </div>
    )
}

export default CarSpecs