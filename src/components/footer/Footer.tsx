import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className='footer-top-part'>
                <div className='footer-top-left-side'>
                    <h2>MORENT</h2>
                    <p>Our vision is to provide convenience and help increase your sales business.</p>
                </div>
                <div className='footer-top-right-side'>
                    <div className='footer-info-container'>
                        <h3>About</h3>
                        <ul className='footer-about-section'>
                            <li><a href="" target='_blank'>How it works</a></li>
                            <li><a href="" target='_blank'>Featured</a></li>
                            <li><a href="" target='_blank'>Partnership</a></li>
                            <li><a href="" target='_blank'>Bussiness Relation</a></li>
                        </ul>
                    </div>
                    <div className='footer-info-container'>
                        <h3>Community</h3>
                        <ul className='footer-community-section'>
                            <li><a href="" target='_blank'>Events</a></li>
                            <li><a href="" target='_blank'>Blog</a></li>
                            <li><a href="" target='_blank'>Podcast</a></li>
                            <li><a href="" target='_blank'>Invite a friend</a></li>
                        </ul>
                    </div>
                    <div className='footer-info-container'>
                        <h3>Socials</h3>
                        <ul className='footer-socials-section'>
                            <li><a href="https://www.discord.com" target='_blank'>Discord</a></li>
                            <li><a href="https://www.instagram.com" target='_blank'>Instagram</a></li>
                            <li><a href="https://www.x.com" target='_blank'>Twitter</a></li>
                            <li><a href="https://www.facebook.com" target='_blank'>Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-devider'>
            </div>
            <div className='footer-bottom-part'>
                <h4>©2026 MORENT.SLIVTIM All rights reserved</h4>
                <div>
                    <h5>Privacy & Policy</h5>
                    <h5>Terms & Condition</h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer