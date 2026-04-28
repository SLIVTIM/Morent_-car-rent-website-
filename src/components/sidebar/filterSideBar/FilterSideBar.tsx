import './FilterSideBar.css'
import { useRef, useState } from 'react'
import { useContext } from 'react'
import { CarDataContext } from './../../../context/CarDataContext'

function FilterSideBar() {
    const [maxPrice, setMaxPrice] = useState(100)
    const {carsData} = useContext(CarDataContext)
    const [sideBarActive, setSideBarActive] = useState(false)
    const sideBarVisualExtenderRef = useRef<HTMLDivElement>(null)

    const SportCarCount = carsData.filter(car => car.type === "Sport").length
    const SUVCarCount = carsData.filter(car => car.type === "SUV").length
    const MPVCarCount = carsData.filter(car => car.type === "MPV").length
    const SedanCarCount = carsData.filter(car => car.type === "Sedan").length
    const CoupeCarCount = carsData.filter(car => car.type === "Coupe").length
    const HatchbackCarCount = carsData.filter(car => car.type === "hatchBack").length

    const capacity2 = carsData.filter(car => car.carSpecifications.practical.seatingCapacity === 2).length
    const capacity4 = carsData.filter(car => car.carSpecifications.practical.seatingCapacity === 4).length
    const capacity6 = carsData.filter(car => car.carSpecifications.practical.seatingCapacity === 6).length
    const capacity7orMore = carsData.filter(car => car.carSpecifications.practical.seatingCapacity === 7 || car.carSpecifications.practical.seatingCapacity > 7).length

    function sideBarExtenderHoverEnterHandler() {
        sideBarVisualExtenderRef.current?.classList.add('slide-bar-extender-hover')   
    }

    function sideBarExtenderHoverLeaveHandler() {
        sideBarVisualExtenderRef.current?.classList.remove('slide-bar-extender-hover')       
    }

    const handlePriceLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(Number(e.target.value))
    }


    return (
        <>
            <aside className={`filter-side-bar ${sideBarActive ? "side-bar-active" : ""}`} >
                <div className='filter-content-wrapper'>
                    <div className='filter-components-wrapper'>
                        <div className="filter-component-wrapper">
                            <h5>TYPE</h5>
                            <div className='filter-component-each'>
                                <input type="checkbox" id="sport-check" />
                                <h3>Sport</h3>
                                <p>({SportCarCount})</p>
                            </div>
                            <div className='filter-component-each'>
                                <input type="checkbox" id="sport-check" />
                                <h3>SUV</h3>
                                <p>({SUVCarCount})</p>
                            </div>
                            <div className='filter-component-each'>
                                <input type="checkbox" id="sport-check" />
                                <h3>MPV</h3>
                                <p>({MPVCarCount})</p>
                            </div>
                            <div className='filter-component-each'>
                                <input type="checkbox" id="sport-check" />
                                <h3>Sedan</h3>
                                <p>({SedanCarCount})</p>
                            </div>
                            <div className='filter-component-each'>
                                <input type="checkbox" id="sport-check" />
                                <h3>Couple</h3>
                                <p>({CoupeCarCount})</p>
                            </div>
                            <div className='filter-component-each'>
                                <input type="checkbox" id="sport-check" />
                                <h3>Hatchback</h3>
                                <p>({HatchbackCarCount})</p>
                            </div>
                        </div>
                        <div className="filter-component-wrapper">
                            <h5>CAPACITY</h5>
                            <div className='filter-component-each'>
                                <input type="checkbox" id="sport-check" />
                                <h3>2 Person</h3>
                                <p>({capacity2})</p>
                            </div>
                            <div className='filter-component-each'>
                                <input type="checkbox" id="sport-check" />
                                <h3>4 Person</h3>
                                <p>({capacity4})</p>
                            </div>
                            <div className='filter-component-each'>
                                <input type="checkbox" id="sport-check" />
                                <h3>6 Person</h3>
                                <p>({capacity6})</p>
                            </div>
                            <div className='filter-component-each'>
                                <input type="checkbox" id="sport-check" />
                                <h3>7 or more</h3>
                                <p>({capacity7orMore})</p>
                            </div>
                        </div>
                        <div className="filter-component-wrapper">
                            <h5>PRICE</h5>
                            <input 
                                type="range"
                                min={0}
                                max={450}
                                value={maxPrice}
                                onChange={handlePriceLimitChange} 
                                className='max-price-slider'
                            />
                            <h3>Max. ${maxPrice}</h3>
                        </div>
                    </div>
                    <div 
                        className='side-bar-extender' 
                        onMouseEnter={sideBarExtenderHoverEnterHandler} 
                        onMouseLeave={sideBarExtenderHoverLeaveHandler}
                        onClick={() => {setSideBarActive(!sideBarActive)}}
                    >
                        <div className='side-bar-extender-visual' ref={sideBarVisualExtenderRef}></div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default FilterSideBar