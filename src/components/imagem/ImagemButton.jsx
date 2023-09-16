import Whats from "../../image/Whats.png"
import Linkedin from "../../image/Linkedin.png"
import GitHub from "../../image/Git.png"
import "../imagem/imagem.css"
const ButtonImagem = () => {
    return (
        <>
            <div className="buttonImageContainer">
                <div className="containerButton">
                    <button className="buttonImagem">
                        <img className="buttonImagem" src={Whats} />
                    </button>
                </div>
                <div className="containerButton">
                    <button className="buttonLinkedin">
                        <img className="buttonLinkedin" src={Linkedin} />
                    </button>
                </div>
                <div className="containerButton">
                    <button className="buttonImagem">
                        <img className="buttonImagem" src={GitHub} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default ButtonImagem