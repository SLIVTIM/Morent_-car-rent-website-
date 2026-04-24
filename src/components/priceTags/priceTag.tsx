import './priceTag.css'

interface priceTagProps {
    carDiscount: boolean
    carCurrentPrice: string
    carOldPrice: string
}

function priceTag({carDiscount, carCurrentPrice, carOldPrice}: priceTagProps) {
    return (
        <div>
            <h3 className={carDiscount === true ? "" : "no-discount"}>{`${carCurrentPrice}$/`}<span>day</span></h3>
            <h4 className={carDiscount === true ? "" : "display-none"}>{carOldPrice}$</h4>
        </div>        
    )
}

export default priceTag