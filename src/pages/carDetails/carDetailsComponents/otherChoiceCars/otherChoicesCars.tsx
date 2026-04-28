import './../../../../assets/styles/carCardWrapper.css' 
import './otherChoicesCars.css'
import CarCard from '../../../../components/carCard/CarCard'
import CarCardsTitle from '../../../../components/carCardsTitle/CarCardsTitle'
import { CarDataContext } from '../../../../context/CarDataContext'
import { useContext } from 'react'

function otherCars() {

    const {carsData} = useContext(CarDataContext)

    return (
        <section className='selection-cars-wrapper other-choices-cars-wrapper'>
            <CarCardsTitle title='Other Cars' />
            <div className='selection-cars-cards-wrapper'>
                {carsData.slice(0, 8).map((car) => (
                    <CarCard key={car.id} car={car}/>
                ))}         
            </div>
        </section>
    )
}

export default otherCars