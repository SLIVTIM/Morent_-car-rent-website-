import './Hero.css'
import Koenigsegg_img from './../../../../assets/hero/Koenigsegg.avif'
import Nissan_GT_R_img from './../../../../assets/hero/Nissan_GT-R.avif'
import swap_svg from './../../../../assets/hero/swap.svg'
import DefaultButton from './../../../../components/button/defaultButton/DefaultButton'

function Hero() {

    const generateDates = () => {
        const dates = [];
        for (let i = 0; i < 8; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);
            dates.push(date);
        }
        return dates;
    }

    const availableDates = generateDates();

    return(
        <>
            <section className='banners-wrapper'>
                <article className='banner-each-radius banner-left'>
                    <div className='visual_background_ellipse'>
                        <div className='ellipse ellipse-one'></div>
                        <div className='ellipse ellipse-two'></div>
                        <div className='ellipse ellipse-three'></div>
                        <div className='ellipse ellipse-four'></div>
                        <div className='ellipse ellipse-five'></div>
                        <div className='ellipse ellipse-six'></div>
                    </div>
                    <div className='banner-text-wrapper banner-left-text-wrapper'>
                        <h2>The Best Platform for Car Rental</h2>
                        <p>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                        <DefaultButton text="Rental Cars"/>
                    </div>
                    <img src={Koenigsegg_img} alt="Koenigsegg_image" className='left-banner-car-img'/>
                </article>
                <article className='banner-each-radius banner-right'>
                    <div className='visual_background_chevron_arrows'>
                        <div className="banner-each-radius arrow-container">
                            <div className="arrow-stripe"></div>
                            <div className="arrow-stripe"></div>
                            <div className="arrow-stripe"></div>
                            <div className="arrow-stripe"></div>
                            <div className="arrow-stripe"></div>
                        </div>
                        <div className="arrow-container">
                            <div className="arrow-stripe"></div>
                            <div className="arrow-stripe"></div>
                            <div className="arrow-stripe"></div>
                            <div className="arrow-stripe"></div>
                        </div>
                        <div className="banner-each-radius arrow-container">
                            <div className="arrow-stripe"></div>
                            <div className="arrow-stripe"></div>
                            <div className="arrow-stripe"></div>
                            <div className="arrow-stripe"></div>
                            <div className="arrow-stripe"></div>
                        </div>
                    </div>
                    <div className='banner-text-wrapper banner-right-text-wrapper'>
                        <h2>Easy way to rent a car at a low price</h2>
                        <p>Providing cheap car rental services and safe and comfortable facilities.</p>
                        <DefaultButton text="Rental Cars"/>
                    </div>
                    <img src={Nissan_GT_R_img } alt="Nissan_GT-R_image" className='right-banner-car-img'/>
                </article>
            </section>
            <section className='pick-up-drop-off-wrapper'>
                <article className='pick-up-drop-off-article'>
                    <div className='pick-up-drop-off-title-wrapper'>
                        <div className='pick-up-dot'></div>
                        <h3>Pick - Up</h3>
                    </div>
                    <div className='pick-up-drop-off-option-wrapper'>
                        <div>
                            <h4>LOCATION</h4>
                            <select name="pick_up_location" id="pick_up_location">
                                <option value="" disabled selected hidden>Select your city</option>
                                <option value="tbilisi">tbilisi</option>
                                <option value="kutaisi">kutaisi</option>
                                <option value="batumi">batumi</option>
                                <option value="gori">gori</option>
                            </select>
                        </div>
                        <div className='pick-up-drop-off-option-devider'>

                        </div>
                        <div>
                            <h4>DATE</h4>    
                            <select name="pick_up_date" id="pick_up_date">
                                <option value="" disabled selected hidden>Select your date</option>
                                {availableDates.map((date, index) => {
                                
                                    const value = date.toISOString().split('T')[0];
                        
                                    const label = index === 0 
                                        ? "Today" 
                                        : date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

                                    return (
                                        <option key={value} value={value}>
                                            {label}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className='pick-up-drop-off-option-devider'>

                        </div>
                        <div>
                            <h4>TIME</h4>
                            <input type="time" name="pick_up_time" id="pick_up_time" />
                        </div>
                    </div>
                </article>
                <button className='switch-info-button'>
                    <img src={swap_svg} alt="swap_svg" />
                </button>
                <article className='pick-up-drop-off-article'>
                    <div className='pick-up-drop-off-title-wrapper'>
                        <div className='pick-up-dot'></div>
                        <h3>Drop - Off</h3>
                    </div>
                    <div className='pick-up-drop-off-option-wrapper'>
                        <div>
                            <h4>LOCATION</h4>
                            <select name="pick_up_location" id="pick_up_location">
                                <option value="" disabled selected hidden>Select your city</option>
                                <option value="tbilisi">tbilisi</option>
                                <option value="kutaisi">kutaisi</option>
                                <option value="batumi">batumi</option>
                                <option value="gori">gori</option>
                            </select>
                        </div>
                        <div className='pick-up-drop-off-option-devider'>

                        </div>
                        <div>
                            <h4>DATE</h4>    
                            <select name="pick_up_date" id="pick_up_date">
                                <option value="" disabled selected hidden>Select your date</option>
                                {availableDates.map((date, index) => {
                                
                                    const value = date.toISOString().split('T')[0];
                        
                                    const label = index === 0 
                                        ? "Today" 
                                        : date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

                                    return (
                                        <option key={value} value={value}>
                                            {label}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className='pick-up-drop-off-option-devider'>

                        </div>
                        <div>
                            <h4>TIME</h4>
                            <input type="time" name="pick_up_time" id="pick_up_time" />
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Hero 