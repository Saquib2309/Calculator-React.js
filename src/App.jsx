import './App.css'
import Input_cal from './components/input'
import Button_cal from './components/button'
import { useState } from 'react'

function App() {

  const [calval,setval]=useState('');
  function buttonclick(item){
    if(item === 'C'){
      setval("");
    }
    else if(item === '='){
      let valu= eval(calval);
      setval(valu);
    }
    else{
      const newval= calval+item;
      setval(newval);
    }

  }

  return <div className='box'>
    <Input_cal displayval={calval}></Input_cal>
    <Button_cal buttonclick={buttonclick}></Button_cal>

    
  </div>

}

export default App
