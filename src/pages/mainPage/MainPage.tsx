import Hero from './hero/Hero'
import PopularCarsSection from './popularCars/PopularCars'
import RecomendedCarsSection from './recomendedCars/RecomendedCars'

function MainPage() {

    return (
        <>
            <Hero/>
            <PopularCarsSection/>
            <RecomendedCarsSection /> 
        </>
    )
}

export default MainPage