import { useState } from 'react';

import './App.css'
import SeuNome from './assets/components/SeuNome';
import Saudacao from './assets/components/Saudacao';
function App() {
  const [nome,setNome] = useState("");
  return (
    <div className="App">
      <h1>state lift</h1>
      <SeuNome setNome={setNome} />
      
      <Saudacao nome = {nome}/>

      {nome &&(<p>
        o Nome digitado foi: {nome}
      </p>)}
    </div>
  )
}

export default App
