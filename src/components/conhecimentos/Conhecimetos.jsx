import SubTitle from "../subTitle/SubTitle"
import "../text/Text.css"
import'../conhecimentos/conhecimentos.css'

const Conhecimentos = () =>{

return (
    <>
    <div className="container-SubTitle">
    <br />

<SubTitle name="Conhecimentos" />
<br />
<br />
    </div>
        <div id="Conhecimentos" className="container-conhecimentos">

            <div className="container-Js">
            <SubTitle name="Java Script" />
            <br />
            </div>
            <div className="container-Rt">
            <SubTitle name="React" />
            <br />
            </div>
            <div className="container-Nj">
            <SubTitle name="Node.js" />
            <br />
            </div>
            <div className="container-Css">
            <SubTitle name="Css" />
            <br />
            </div>
            <div className="container-Ht">
            <SubTitle name="Html" />
            <br />
            </div>
            <div className="container-Nq">
            <SubTitle name="NoSQL" />
            <br />
            </div>
            <div className="container-Gh">
            <SubTitle name="GitHub" />
            <br />
            </div>
        </div>
    </>
)
}

export default Conhecimentos