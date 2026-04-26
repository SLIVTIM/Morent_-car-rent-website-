import './PopularCars.css' 
import CarCard from '../../../../components/carCard/CarCard'
import { useContext } from 'react'
import { CarDataContext } from '../../../../context/CarDataContext'

function PopularCars() {

    const {carsData} = useContext(CarDataContext)

    return (
        <section className='popular-cars-wrapper'>
            <div className='selection-cars-top-part'>
                <h3>Popular Cars</h3>
                <h3>View All</h3>
            </div>
            <div className='selection-cars-cards-wrapper'>
                {carsData.filter(car => car.popular).slice(0, 4).map((car) => (
                    <CarCard key={car.id} car={car}/>
                ))}         
            </div>
        </section>
    )
}

export default PopularCars