import Hero from './hero/Hero'
import { useEffect, useState } from 'react'
import PopularCarsSection from './popularCars/PopularCars'
import RecomendedCarsSection from './recomendedCars/RecomendedCars'
import favorite_off_svg from './../../assets/card/empty_heart.svg'
import favorite_on_svg from './../../assets/card/red_heart.svg'
import fuel_svg from './../../assets/card/fuel.svg'
import transmission_type_svg from './../../assets/card/transmission.svg'
import people_amount_svg from './../../assets/card/people.svg'
import axios from 'axios'
import { toast } from 'react-toastify'


function MainPage() {
    const carsDataApi = 'https://raw.githubusercontent.com/SLIVTIM/Morent_-car-rent-website-data/refs/heads/main/carsData.json'
    const [carsData, setCarsData] = useState([])
    const [favorite, setFavorite] = useState(false)

    function favoriteSwitch() {
        setFavorite(!favorite)
    }

    useEffect(() => {
        axios.get(carsDataApi)
        .then(data => setCarsData(data.data))
        .catch(err => toast.error("Failed to fetch cars data !"))
    }, [])

    return (
        <>
            <Hero/>
            <PopularCarsSection carsData={carsData} favoriteSwitch={favoriteSwitch} favorite={favorite} favorite_off_svg={favorite_off_svg} favorite_on_svg={favorite_on_svg} fuel_svg={fuel_svg} transmission_type_svg={transmission_type_svg} people_amount_svg={people_amount_svg}/>
            <RecomendedCarsSection carsData={carsData} favoriteSwitch={favoriteSwitch} favorite={favorite} favorite_off_svg={favorite_off_svg} favorite_on_svg={favorite_on_svg} fuel_svg={fuel_svg} transmission_type_svg={transmission_type_svg} people_amount_svg={people_amount_svg}/> 
        </>
    )
}

export default MainPage