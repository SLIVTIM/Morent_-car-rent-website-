import './DefaultButton.css'

interface DefaultButtonProps {
    text: string
}

function DefaultButton({text}: DefaultButtonProps) {

    return (
        <button className='general-button'>
            {text}
        </button>
    )
}

export default DefaultButton