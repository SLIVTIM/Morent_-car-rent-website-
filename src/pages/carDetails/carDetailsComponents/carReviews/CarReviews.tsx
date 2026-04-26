import './CarReviews.css'
import type { Car } from './../../../../context/CarDataContext'
import userProfile from './../../../../assets/header/user.svg'
import star_full_svg from './../../../../assets/carDetails/star-full.svg'
import star_empty_svg from './../../../../assets/carDetails/star-empty.svg'

interface CarReviewsProps {
    currentCar: Car
}

function CarReviews({currentCar}: CarReviewsProps) {
    return (
        <article className='car-details-reviews-section'>
            <div className='car-details-reviews-title'>
                <h3>Reviews</h3>
                <h4>{currentCar.reviews.length}</h4>
            </div>
            <div className='car-details-reviews-wrapper'>
                {currentCar.reviews.map((review) => (
                    <div className='car-details-review-each'>
                        <div className='car-details-review-user-info-wrapper'>
                            <img src={userProfile} alt="user profile image" />
                            <div className='car-details-review-user-info-top-part'>
                                <div className='car-details-review-user-info-name-date'>
                                    <h4>{review.name}</h4>
                                    <p>{review.date}</p>
                                </div>
                                <div className='car-details-review-user-rating-wrapper'>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <img key={star} src={star <= review.rating ? star_full_svg : star_empty_svg} className={star <= review.rating ? "" : "empty-star"} alt="star svg" />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className='car-details-review-text'>{review.reviewMessage}</p>
                    </div>
                ))}
            </div>
            <h3>Show All <img src="" alt="" /></h3>
        </article>
    )
}

export default CarReviews