import Hero from './mainPageComponents/hero/Hero'
import PopularCarsSection from './mainPageComponents/popularCars/PopularCars'
import RecomendedCarsSection from './mainPageComponents/recomendedCars/RecomendedCars'

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