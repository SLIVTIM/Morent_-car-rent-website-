import Hero from './hero/Hero'
import { useState } from 'react'
import PopularCarsSection from './popularCars/PopularCars'
import RecomendedCarsSection from './recomendedCars/RecomendedCars'
import favorite_off_svg from './../../assets/card/empty_heart.svg'
import favorite_on_svg from './../../assets/card/red_heart.svg'
import fuel_svg from './../../assets/card/fuel.svg'
import transmission_type_svg from './../../assets/card/transmission.svg'
import people_amount_svg from './../../assets/card/people.svg'

function MainPage() {
    const [favorite, setFavorite] = useState(false)

    function favoriteSwitch() {
        setFavorite(!favorite)
    }

    return (
        <>
            <Hero/>
            <PopularCarsSection favoriteSwitch={favoriteSwitch} favorite={favorite} favorite_off_svg={favorite_off_svg} favorite_on_svg={favorite_on_svg} fuel_svg={fuel_svg} transmission_type_svg={transmission_type_svg} people_amount_svg={people_amount_svg}/>
            <RecomendedCarsSection favoriteSwitch={favoriteSwitch} favorite={favorite} favorite_off_svg={favorite_off_svg} favorite_on_svg={favorite_on_svg} fuel_svg={fuel_svg} transmission_type_svg={transmission_type_svg} people_amount_svg={people_amount_svg}/> 
        </>
    )
}

export default MainPage