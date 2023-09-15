import Whats from "../../image/Whats.png"
import Linkedin from "../../image/Linkedin.png"
import GitHub from "../../image/Git.png"
import "../imagem/imagem.css"
import Button from "../button/Button"
const Imagem = () => {
    return (
        <>
        <div className="buttonImagem">
            <button>
                <img  className="imagens" src={Whats} />
            </button>
            <button>
                <img  className="imagens" src={Linkedin} />
            </button>
            <button>
                <img  className="imagens" src={GitHub} />
            </button>
        </div>
        </>
    )
}

export default Imagem