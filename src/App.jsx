
import './App.css'
import Lista from './assets/components/evento/Lista'
function App() {
  const meusItens = ['Pera', 'Banana','Abacaxi']
  return (
    <>
      <div className='App'>
        <h1>Lista generica de frutas</h1>
        <Lista itens = {meusItens}/>
        <Lista itens = {[]}/>
      </div>
    </>
  )
}

export default App
