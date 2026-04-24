import './CarDetails.css'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CarDataContext } from '../../context/CarDataContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import favorite_off_svg from './../../assets/card/empty_heart.svg'
import favorite_on_svg from './../../assets/card/red_heart.svg'
import star_full_svg from './../../assets/carDetails/star-full.svg'
import star_empty_svg from './../../assets/carDetails/star-empty.svg'
import fuel_svg_1 from './../../assets/carDetails/fuel-1.svg'
import fuel_svg_2 from './../../assets/carDetails/fuel-2.svg'
import car_seat_svg from './../../assets/carDetails/car_seat.svg'
import horsepower_svg from './../../assets/carDetails/horsepower.svg'
import speedometer_svg from './../../assets/carDetails/speedometer.svg'
import drive_train_svg from './../../assets/carDetails/drive-train.svg'
import engine_svg from './../../assets/carDetails/engine.svg'
import transmission_svg from './../../assets/carDetails/transmission.svg'
import luggage_svg from './../../assets/carDetails/luggage.svg'
import door_svg from './../../assets/carDetails/door.svg'
import DefaultButton from '../../components/button/defaultButton/DefaultButton'
import FavoriteButton from './../../components/button/favoriteButton/FavoriteButton'
import PriceTag from '../../components/priceTags/priceTag'


function CarDetails() {
    const {carSlug} = useParams()
    const {carsData} = useContext(CarDataContext)
    const [focusedImage, setFocusedImage] = useState<string>("")

    const currentCar = carsData.find(car => {
        const generatedSlug = `${car.name.toLowerCase().replace(/\s+/g, '-')}-${car.year.toLowerCase().replace(/\s+/g, '-')}`
        return generatedSlug === carSlug
    })

    useEffect(() => {
        if (currentCar?.detailedImages && currentCar.detailedImages.length > 0) {
            setFocusedImage(currentCar.detailedImages[0])   
        }
    }, [currentCar])

    if (!currentCar) {
        return <h2 className='car-not-found'>Car not found!</h2>
    }

    return (
        <>
            <section className='car-details-section'>
                <article className='car-details-car-section'>
                    <div className='car-details-images-wrapper'>
                        <div className='focused-image-wrapper'>
                            {focusedImage && (
                                <img src={focusedImage} alt="car focused image" className='focused-image'/>
                            )}
                        </div>
                        <div className='non-focused-image-wrapper'>
                            {currentCar?.detailedImages && currentCar.detailedImages.filter(img => img !== focusedImage).map((img, index) => (
                                <img 
                                    key={index} 
                                    src={img} 
                                    alt={`car detailed image ${index + 1}`}
                                    onClick={() => setFocusedImage(img)}
                                    className='non-focused-image'></img>
                            ))}
                        </div>
                    </div>
                    <div className='car-details-info-wrapper'>
                        <div className='car-details-info-wrapper-title'>
                            <div className='car-details-info-title-top-part'>
                                <h2>{currentCar.name}</h2>
                                <FavoriteButton/>
                            </div>
                            <div className='car-details-info-title-bottom-part'> 
                                <img src={star_full_svg} alt="star svg" />
                                <img src={star_full_svg} alt="star svg" />
                                <img src={star_full_svg} alt="star svg" />
                                <img src={star_full_svg} alt="star svg" />
                                <img src={star_empty_svg} alt="star svg" />
                                <p>440+ Reviewer</p>
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
                </article>
                <article className='car-details-reviews-section'>
                    <div className='car-details-reviews-title'>
                        <h3>Reviews</h3>
                        <h4>23</h4>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src="" alt="" />
                                <div>
                                    <h4></h4>
                                    <p></p>
                                </div>
                                <div>
                                    <p></p>
                                    <div>
                                        <img src="" alt="" />
                                        <img src="" alt="" />
                                        <img src="" alt="" />
                                        <img src="" alt="" />
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>
                            <p></p>
                        </div>
                    </div>
                    <h3>Show All <img src="" alt="" /></h3>
                </article>
            </section>
        </>
    )
}

export default CarDetails