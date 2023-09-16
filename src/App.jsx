import TelaInicial from "./components/avatar/Avatar"
import Bibliografia from "./components/biografia/Biografia"
import Conhecimentos from "./components/conhecimentos/Conhecimetos"
import Contatos from "./components/contatos/Contatos"
import NavBar from "./components/navbar/NavBar"
import Projetos from "./components/projetos/Projetos"
import Title from "./components/title/TItle"
import '../src/App.css'
const App = () => {
  return (
    <>

      <div className="container-app">
        <NavBar />
        <Title /> 
        <TelaInicial/>
        <Bibliografia />
        <Conhecimentos />
        <Contatos />
        <Projetos />

      </div>

    </>
  )
}

export default App

