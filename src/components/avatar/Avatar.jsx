import Avatar from "../../image/Avatar.jpg"
import '../avatar/avatar.css'

const TelaInicial = () => {
    return (
        <>
            <div className="containerAvatar">
                <div className="item-avatar-text" >
                    <p className="item-avatar-paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, error deserunt! Iure iste provident dolorem soluta cupiditate!
                    </p>
                </div>
                <div className="item-avatar-img"  >
                    <img className="item-avatar-img-imagem" src={Avatar} />
                </div>
            </div>
        </>
    )
}

export default TelaInicial