
import '../button/button.css'


const Button = ({ name }) => {


    // const {name} = props


    return (
        <button className="button">
            {name}                    {/* // toda vez que colocar js dentro de html colocar ENTRE {} */}
        </button>
    )
}

export default Button

