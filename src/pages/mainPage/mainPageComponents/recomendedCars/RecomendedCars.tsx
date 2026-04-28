import './RecomendedCars.css'
import './../../../../assets/styles/carCardWrapper.css' 
import { useState, useContext } from 'react'
import DefaultButton from '../../../../components/button/defaultButton/DefaultButton'
import CarCard from '../../../../components/carCard/CarCard'
import CarCardsTitle from '../../../../components/carCardsTitle/CarCardsTitle'
import { CarDataContext } from '../../../..//context/CarDataContext'

function RecomendedCars() {

    const {carsData} = useContext(CarDataContext)

    const [cardsMaxAmount, setCardsMaxAmount] = useState(8)

    function maxCardsAmountHandler() {
        setCardsMaxAmount(cardsMaxAmount * 2)
    }

    return (
        <section className='selection-cars-wrapper recomended-cars-wrapper'>
            <CarCardsTitle title={"Recommended Cars"} />
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