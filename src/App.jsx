import Bibliografia from "./components/biografia/Biografia"
import Conhecimentos from "./components/conhecimentos/Conhecimetos"
import Contatos from "./components/contatos/Contatos"
import NavBar from "./components/navbar/NavBar"
import Projetos from "./components/projetos/Projetos"
import Title from "./components/title/TItle"

const App = () => {
  return (
    <>

      <div className="App">
        <NavBar />
        <Title />

        <Bibliografia />
        <Conhecimentos />
        <Contatos />
        <Projetos />

      </div>

    </>
  )
}

export default App

