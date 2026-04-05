import './Hero.css'
import Koenigsegg_img from './../../assets/hero/Koenigsegg.avif'
import Nissan_GT_R_img from './../../assets/hero/Nissan_GT-R.avif'

function Hero() {
    return(
        <>
            <section className='banners-wrapper'>
                <article className='banner-each banner-left'>
                    <div className='visual_background_ellipse'>
                        <div className='ellipse ellipse-one'></div>
                        <div className='ellipse ellipse-two'></div>
                        <div className='ellipse ellipse-three'></div>
                        <div className='ellipse ellipse-four'></div>
                        <div className='ellipse ellipse-five'></div>
                        <div className='ellipse ellipse-six'></div>
                    </div>
                    <div className='banner-left-text-wrapper'>
                        <h2>The Best Platform for Car Rental</h2>
                        <p>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                        <button>Rental Cars</button>
                    </div>
                    <img src={Koenigsegg_img} alt="Koenigsegg_image" className='left-banner-car-img'/>
                </article>
                <article className='banner-each banner-right'>
                    <div className='visual_background_chevron_arrows'>
                        <div className="arrow-container">
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
                        <div className="arrow-container">
                            <div className="arrow-stripe"></div>
                            <div className="arrow-stripe"></div>
                            <div className="arrow-stripe"></div>
                            <div className="arrow-stripe"></div>
                            <div className="arrow-stripe"></div>
                        </div>
                    </div>
                    <div className='banner-right-text-wrapper'>
                        <h2>The Best Platform for Car Rental</h2>
                        <p>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                        <button>Rental Cars</button>
                    </div>
                    <img src={Nissan_GT_R_img } alt="Nissan_GT-R_image" className='right-banner-car-img'/>
                </article>
            </section>
            <article>

            </article>
        </>
    )
}

export default Hero 