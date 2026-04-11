import './PopularCars.css' 
import DefaultButton from '../../../components/button/DefaultButton'

interface carsData {
}

interface PopularCarsProps {
    favorite_off_svg: string,
    favorite_on_svg: string,
    fuel_svg: string,
    transmission_type_svg: string,
    people_amount_svg: string,
    favorite: boolean,
    favoriteSwitch: () => void,
    carsData: {
        name: string,
        type: string,
        color: string,
        popular: boolean,
        previewImg: string,
        carSpecifications: {
            maxLiters: string,
            transmissionType: string,
            passengerCapacity: string
        },    
        priceTags: {
            currentPrice: string,
            oldPrice: string,
            discount: boolean
        }
    }[]
}

function PopularCars({carsData, favorite_off_svg, favorite_on_svg, fuel_svg, transmission_type_svg, people_amount_svg, favorite, favoriteSwitch }: PopularCarsProps) {


    return (
        <section className='popular-cars-wrapper'>
            <div className='selection-cars-top-part'>
                <h3>Popular Cars</h3>
                <h3>View All</h3>
            </div>
            <div className='selection-cars-cards-wrapper'>
                {carsData.map((car) => (
                    <article className='selection-cars-card-each'>
                        <div className='selection-cars-card-top-part'>
                            <div>
                                <h3>{car.name}</h3>
                                <h4>{car.type}</h4>
                            </div>
                            <img src={favorite ? favorite_on_svg : favorite_off_svg} alt="favorite svg" onClick={favoriteSwitch}/>
                        </div>
                        <div className='card-car-preview-image-container'>
                            <img src={car.previewImg} alt="car preview image" className='card-car-preview'/>
                        </div>
                        <div className='selection-cars-card-details'>
                            <div>
                                <img src={fuel_svg} alt="fuel svg" />
                                <h4>{`${car.carSpecifications.maxLiters} L`}</h4>
                            </div>
                            <div>
                                <img src={transmission_type_svg} alt="transmission type svg" />
                                <h4>{car.carSpecifications.transmissionType}</h4>                            
                            </div>
                            <div>
                                <img src={people_amount_svg} alt="people amount svg" />
                                <h4>{`${car.carSpecifications.passengerCapacity} people`}</h4>                            
                            </div>
                        </div>
                        <div className='selection-cars-card-price-tags'>
                            <div>
                                <h3 className={car.priceTags.discount === true ? "" : "no-discount"}>{`${car.priceTags.currentPrice}$/`}<span>day</span></h3>
                                <h4 className={car.priceTags.discount === true ? "" : "display-none"}>16</h4>
                            </div>
                            <DefaultButton text="Rent Now"/>
                        </div>
                    </article>
                ))}
                
            </div>
        </section>
    )
}

export default PopularCars