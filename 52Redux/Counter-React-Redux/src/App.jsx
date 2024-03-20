import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayCounter from './components/DisplayCounter';
import Container from './components/Container';
import Control from './components/Control';
import { useSelector } from 'react-redux';
import PrivacyMessage from './components/PrivacyMessage';
function App() {
  const [count, setCount] = useState(0)
const privacy=useSelector((storeprivacy)=>storeprivacy.privacy)
  return (
    
   
    <center className="px-4 py-5 my-5 
    text-center">
   <Container>
    <Header/> 
    
    
    <div className="col-lg-6 mx-auto">
      {privacy?<PrivacyMessage/>:<DisplayCounter/>}
      <Control></Control>
    </div>
    </Container>
  </center>
    
  )
}

export default App
