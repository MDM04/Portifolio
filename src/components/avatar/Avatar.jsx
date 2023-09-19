import Avatar from "../../image/Avatar.jpg"
import '../avatar/avatar.css'

const TelaInicial = () => {
    return (
        <>
            <div className="containerAvatar">
                <div className="item-avatar-text" >
                    <p className="item-avatar-paragraph">
                        "Seja muito bem-vindo ao meu portfólio! É um prazer tê-lo aqui para explorar o meu trabalho e conhecer um pouco mais sobre o que faço. Espero que encontre inspiração e insight ao navegar por este espaço dedicado às minhas criações. Sinta-se à vontade para explorar cada projeto e, se houver qualquer dúvida ou feedback que queira compartilhar, não hesite em entrar em contato. Agradeço sinceramente por dedicar o seu tempo e interesse ao meu trabalho.
                         Espero que esta visita seja enriquecedora e que possamos, quem sabe, colaborar em projetos futuros. Aproveite a sua estadia aqui!"


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