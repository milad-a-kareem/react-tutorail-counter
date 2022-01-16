import './App.css';

import UsersFinder from './components/UserFinder';
import {useState} from 'react'

function App() {

  const [ a, b] = useState(false)

  function buttonClickHandler(){
    b(prev => !prev)
  }
  return (
    <>
    <button onClick={buttonClickHandler}>toggler</button>
    {
      a ? <UsersFinder/> :null
    }
    
    </>
    
  );
}

export default App;
