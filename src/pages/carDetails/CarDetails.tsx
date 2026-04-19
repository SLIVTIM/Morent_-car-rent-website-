import './CarDetails.css'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { CarDataContext } from '../../context/CarDataContext'

function CarDetails() {
    const {carSlug} = useParams()
    const {carsData} = useContext(CarDataContext)

    const currentCar = carsData.find(car => {
        const generatedSlug = `${car.name.toLowerCase().replace(/\s+/g, '-')}-${car.year.toLowerCase().replace(/\s+/g, '-')}`
        return generatedSlug === carSlug
    })

    if (!currentCar) {
        return <h2 className='car-not-found'>Car not found!</h2>
    }

    return (
        <>
            <section className='car-details-section'>
                <article className='car-details-car-section'>
                    <div className='car-details-images-wrapper'>
                        <img src="" alt="car" />
                        <div>
                            <img src="" alt="car" />
                            <img src="" alt="car" />
                            <img src="" alt="car" />
                            <img src="" alt="car" />
                        </div>
                    </div>
                    <div className='car-details-info-wrapper'>
                        <div className='car-details-info-wrapper-title'>
                            <div>
                                <h2></h2>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <p></p>
                            </div>
                        </div>
                        <p className='car-details-paragraph'></p>
                        <div className='car-details-specifications'>
                            <div className='car-details-specifications-left-side'>
                                <h4></h4>
                                <h4></h4>
                                <h4></h4>
                                <h4></h4>
                            </div>
                            <div className='car-details-specifications-right-side'>
                                <h4></h4>
                                <h4></h4>
                                <h4></h4>
                                <h4></h4>
                            </div>
                        </div>
                        <div className='car-details-price-tags'>
                            <div>
                                <h3><span></span></h3>
                                <h4></h4>
                            </div>
                            <button></button>
                        </div>
                    </div>
                </article>
                <article className='car-details-reviews-section'>
                    <div>
                        <h3></h3>
                        <h4></h4>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src="" alt="" />
                                <div>
                                    <h4></h4>
                                    <p></p>
                                </div>
                                <div>
                                    <p></p>
                                    <div>
                                        <img src="" alt="" />
                                        <img src="" alt="" />
                                        <img src="" alt="" />
                                        <img src="" alt="" />
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>
                            <p></p>
                        </div>
                    </div>
                    <h3>Show All <img src="" alt="" /></h3>
                </article>
            </section>
        </>
    )
}

export default CarDetails