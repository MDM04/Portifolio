import SubTitle from "../subTitle/SubTitle"
import Avatar from "../../image/Avatar.jpg"
import '../biografia/biografia.css'

const Biografia = () => {


    return (
        <>
            <img  className="avatar" src={Avatar}/>
            <div className="">
            <SubTitle name="Biografia"/>
            <p>
                Olá, meu nome é Marcio Muniz Barbosa
                nascido em 03/10/1995
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatem adipisci molestiae repellendus? Blanditiis     
            </p>
            </div>
        </>
    )

}

export default Biografia