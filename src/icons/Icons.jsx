import "../icons/icons.css"
import Button from '../components/button/Button'

const IconsButtons = (props) => {
    let { icon,  name, onClick     
    } = props



    return (
        
                <Button name={name} onClick={onClick} icon={icon}></Button>
        

    )
}

export default IconsButtons
