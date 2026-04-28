import './CarCardsTitle.css'

interface CarCardsTitleProps {
    title: string
}

function CarCardsTitle({title}: CarCardsTitleProps) {
    return (
        <div className='selection-cars-top-part'>
            <h3>{title}</h3>
            <h3>View All</h3>
        </div>
    )
}

export default CarCardsTitle