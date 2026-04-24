import './FavoriteButton.css'
import { useState } from 'react'
import favorite_off_svg from './../../../assets/card/empty_heart.svg'
import favorite_on_svg from './../../../assets/card/red_heart.svg'

function FavoriteButton() {
    const [favorite, setFavorite] = useState(false)

    function favoriteSwitch() {
        setFavorite(!favorite)
    }

    return (
        <img className={`${favorite ? "favoriteTrue" : ""} favorite-button`} src={favorite ? favorite_on_svg : favorite_off_svg} alt="favorite svg" onClick={favoriteSwitch}/>
    )
}

export default FavoriteButton