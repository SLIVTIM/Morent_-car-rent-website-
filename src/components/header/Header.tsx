import './Header.css'
import search_svg from './../../assets/header/search.svg'
import filter_svg from './../../assets/header/filter.svg'
import favourite_svg from './../../assets/header/favourites.svg'
import notification_svg from './../../assets/header/notifications.svg'
import setting_svg from './../../assets/header/settings.svg'
import user_svg from './../../assets/header/user.svg'

function Header() {
    return (
        <header className='header-wrapper'>
            <article className='website-title-wrapper'>
                <h1>MORENT</h1>
            </article>
            <label className='seach_bar_wrapper'>
                <img src={search_svg} alt="search_svg" className='search_icon'/>
                <input type="text" placeholder='Search something here' className='search_input'/>
                <img src={filter_svg} alt="filter_svg" className='search_filter_icon'/>
            </label>
            <article className='user-stuff-wrapper'>
                <div className='user_stuff_svg favourite_svg_wrapper'>
                    <img src={favourite_svg} alt="favourite_svg" />
                </div>
                <div className='user_stuff_svg notification_svg_wrapper'>
                    <img src={notification_svg} alt="notification_svg" />
                </div>
                <div className='user_stuff_svg setting_svg_wrapper'>
                    <img src={setting_svg} alt="setting_svg" />             
                </div>
                <img src={user_svg} alt="user_profile" className='user_stuff_svg user_profile_icon'/>
            </article>  
        </header>
    )
}

export default Header