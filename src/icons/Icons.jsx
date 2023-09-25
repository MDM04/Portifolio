import "../icons/icons.css"
import Button from '../components/button/Button'

const IconsButtons = (props) => {
    let {
        icon, name
    } = props
    return (
        <div className='container'>
            <div className="item-icons">
                {icon}
            </div>
            <div className="item-button">
                <Button name={name} />

            </div>
        </div>

    )
}

export default IconsButtons