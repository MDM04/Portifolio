import Bibliografia from "./components/biografia/Biografia"
import Conhecimentos from "./components/conhecimentos/Conhecimetos"
import Contatos from "./components/contatos/Contatos"
import NavBar from "./components/navbar/NavBar"
import Projetos from "./components/projetos/Projetos"
import Avatar from "../src/image/Avatar.jpg"
import Title from "./components/title/TItle"

const App = () => {
  return (
    <>

      <div className="App">
        <NavBar />
        <Title/>
        <img  style= {{borderRadius:'10%', width:'800px', height:'700px'}}src={Avatar}/>
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

