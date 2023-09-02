import Button from "../button/Button"
import "../navbar/navBar.css"

const NavBar = () => {
    const scrollView= (idCss) => { 
        const footerElement = document.getElementById(idCss);
        if (footerElement) {
          footerElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
        <div className="container-nav">
            <div className="item-nav-1">
                <Button name="Biografia" onClick={()=>scrollView('Biografia')}/>
            </div>
            <div className="item-nav-1">
                <Button name="Conhecimentos" onClick={()=>scrollView('Conhecimentos')}/>
            </div>
            <div className="item-nav-1">
                <Button name="Contatos" onClick={()=>scrollView('Contatos')} />
            </div>
            <div className="item-nav-1">
                <Button name="Projetos" onClick={()=>scrollView('Projetos')}/>
            </div>
            <div className="item-nav-2">
                <Button name="ADD" onClick={()=>scrollView('ADD')}/>
            </div>
        </div>
    )
}

export default NavBar