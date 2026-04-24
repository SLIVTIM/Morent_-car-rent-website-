import './DefaultButton.css'

interface DefaultButtonProps {
    text: string
    onClick?: () => void
}

function DefaultButton({text, onClick}: DefaultButtonProps) {

    return (
        <button 
            className='general-button'
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default DefaultButton