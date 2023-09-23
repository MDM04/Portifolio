import IconsButtons from "../../icons/Icons";
import Button from "../button/Button"
import "../navbar/navBar.css"
import { BsBookHalf } from 'react-icons/bs'
import { FaBook } from 'react-icons/fa'
import { BiSolidContact } from 'react-icons/bi'
import { FaProjectDiagram } from 'react-icons/fa'




const NavBar = () => {
    const scrollView = (idCss) => {
        const footerElement = document.getElementById(idCss);
        if (footerElement) {
            footerElement.scrollIntoView({ behavior: 'smooth' });
        }
    }; let iconsSave = {
        biografia: <BsBookHalf size={30} color="white" />,
        conhecimentos: <FaBook size={30} color="white" />,
        contatos: <BiSolidContact size={30} color="white" />,
        projetos: <FaProjectDiagram size={30} color="white"/>
    };
    return (
        <div className="container-nav">
            <div className="item-nav-1">

                <IconsButtons icon={iconsSave.biografia} name="BIografia" onClick={() => scrollView('Biografia')} />
            </div>
            <div className="item-nav-1">
                <IconsButtons icon={iconsSave.conhecimentos} name="Conhecimentos" onClick={() => scrollView('Conhecimentos')} />
            </div>
            <div className="item-nav-1">
                <IconsButtons icon={iconsSave.contatos} name="Contatos" onClick={() => scrollView('Contatos')} />
            </div>
            <div className="item-nav-1">
                <IconsButtons icon={iconsSave.projetos} name="Projetos" onClick={() => scrollView('Projetos')} />
            </div>
        </div>
    )
}

export default NavBar