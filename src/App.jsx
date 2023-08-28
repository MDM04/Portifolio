import Bibliografia from "./components/bibliografia/Bibliografia"
import Conhecimentos from "./components/conhecimentos/Conhecimetos"
import Contatos from "./components/contatos/Contatos"
import NavBar from "./components/navbar/NavBar"
import Projetos from "./components/projetos/Projetos"
import Avatar from "../src/image/Avatar.jpg"

const App = () => {
  return (
    <>

      <div className="App">
        <NavBar />
        <img  style= {{borderRadius:'100%', width:'300px'}}src={Avatar}/>
        <h1>Portifólio</h1>
        <ul>
          <Bibliografia />
          <Conhecimentos />
          <Contatos />
          <Projetos />
        </ul>
      </div>

    </>
  )
}

export default App

