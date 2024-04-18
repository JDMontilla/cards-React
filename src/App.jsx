import Card from './Componentes/Card'
import './App.css'
import Lenguajes from './datos/Lenguajes';

function App() {

  const lenguajesList = Lenguajes.map((l) => {
    return <Card titulo = {l.nombre} descripcion = {l.comentario} />

  })

  return (

    <div className='App'>
      <h1>Montando componentes con React utilizando Vite</h1>
      <div className='container'>
      {lenguajesList}

      </div>
    </div>


  )
}

export default App
