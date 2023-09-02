
import '../button/button.css'


const Button = ({ name, onClick }) => {


    // const {name} = props


    return (
        <button onClick={onClick} className="button">
            {name}                    {/* // toda vez que colocar js dentro de html colocar ENTRE {} */}
        </button>
    )
}

export default Button

