import SubTitle from "../subTitle/SubTitle"
import Button from "../button/Button"
import "../contatos/contatos.css"
import GitHub from "../../image/Git.png"
import Whats from "../../image/Whats.png"
import Linkedin from "../../image/Linkedin.png"

const Contatos = () => {





    return (
        <div id="Contatos">
            <SubTitle name="Contatos" />
            <br />

            <div className="container">

            <div className="item-3">
                <img src={Linkedin}/>
                <Button name="LInkedin" />
            </div>
            <div className="item-3">
            {/* <img src={GitHub}/> */}
                <Button name="GitHub" />
            </div>
            <div className="item-3">
                {/* <img src={Whats}/> */}
                <Button name="(11) 99959-6395" />
            </div>
            </div>
        </div>
    )
}

export default Contatos 