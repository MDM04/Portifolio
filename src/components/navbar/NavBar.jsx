import Button from "../button/Button"
import "../navbar/navBar.css"

const NavBar = () => {


    return (
        <div className="container-nav">
            <div className="item-nav-1">
                <Button name="Biografia" />
            </div>
            <div className="item-nav-1">
                <Button name="Conhecimentos" />
            </div>
            <div className="item-nav-1">
                <Button name="Contatos" />
            </div>
            <div className="item-nav-1">
                <Button name="Projetos" />
            </div>
            <div className="item-nav-2">
                <Button name="ADD" />
            </div>
        </div>
    )
}

export default NavBar