import Whats from "../../image/Whats.png"
import Linkedin from "../../image/Linkedin.png"
import GitHub from "../../image/Git.png"
import "../imagem/imagem.css"
import Button from "../button/Button"
const Imagem = () => {
    return (
        <div className="containerImage">
            <img className="imagens" src={Whats} />
            <img className="imagens" src={Linkedin} />
            <img className="imagens" src={GitHub} />
        </div>
    )
}

export default Imagem