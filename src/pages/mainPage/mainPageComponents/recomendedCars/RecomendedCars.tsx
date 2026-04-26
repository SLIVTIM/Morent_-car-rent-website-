import './RecomendedCars.css'
import './../popularCars/PopularCars.css'
import { useState, useContext } from 'react'
import DefaultButton from '../../../../components/button/defaultButton/DefaultButton'
import CarCard from '../../../../components/carCard/CarCard'
import { CarDataContext } from '../../../..//context/CarDataContext'

function RecomendedCars() {

    const {carsData} = useContext(CarDataContext)

    const [cardsMaxAmount, setCardsMaxAmount] = useState(8)

    function maxCardsAmountHandler() {
        setCardsMaxAmount(cardsMaxAmount * 2)
    }

    return (
        <section className='recomended-cars-wrapper'>
            <div className='selection-cars-top-part'>
                <h3>Recomended Cars</h3>
                <h3>View All</h3>
            </div>
            <div className='selection-cars-cards-wrapper'>
                {carsData.slice(0, cardsMaxAmount).map((car) => (
                    <CarCard key={car.id} car={car}/>
                ))}
            </div>
            <DefaultButton text="Show More Cars" onClick={maxCardsAmountHandler}/>
        </section>
    )
}

export default RecomendedCars