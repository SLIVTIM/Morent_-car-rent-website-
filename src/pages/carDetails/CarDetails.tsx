import './CarDetails.css'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { CarDataContext } from '../../context/CarDataContext'
import CarImages from './carDetailsComponents/carImages/CarImages'
import CarSpecs from './carDetailsComponents/carSpecs/carSpecs'
import CarReviews from './carDetailsComponents/carReviews/CarReviews'
import CarNotFound from './carDetailsComponents/carNotFound/CarNotFound'



function CarDetails() {
    const {carSlug} = useParams()
    const {carsData} = useContext(CarDataContext)

    const currentCar = carsData.find(car => {
        const generatedSlug = `${car.name.toLowerCase().replace(/\s+/g, '-')}-${car.trim.toLowerCase().replace(/\s+/g, '-')}-${car.year.toLowerCase().replace(/\s+/g, '-')}`
        return generatedSlug === carSlug
    })


    if (!currentCar) {
        return <CarNotFound/>
    }

    return (
        <>
            <section className='car-details-section'>
                <article className='car-details-car-section'>
                    <CarImages detailedImages={currentCar.detailedImages}/>
                    <CarSpecs currentCar={currentCar}/>
                </article>
                <CarReviews currentCar={currentCar}/>
            </section>
        </>
    )
}

export default CarDetails