import SubTitle from "../subTitle/SubTitle"
import Button from "../button/Button"
import "../contatos/contatos.css"
import Imagem from "../imagem/Imagem"

const Contatos = () => {





    return (
        <>
            <div id="Contatos">
                <SubTitle name="Contatos" />
                <br />

                <div className="container">

                    <div className="contatos">
                        {/* <img src={Linkedin}/> */}
                        <Button name="LInkedin" />
                    </div>
                    <div className="contatos">
                        {/* <img src={GitHub}/> */}
                        <Button name="GitHub" />
                    </div>
                    <div className="contatos">
                        {/* <img src={whats}/> */}
                        <Button name="(11) 99959-6395" />
                    </div>
                    <Imagem/>
                </div>
            </div>
        </>
    )
}

export default Contatos 