import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button  } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const[count,setCount]=useState(0);
  const countIncrement=()=>{
    setCount(count+1);
  }
  const countDecrement=()=>{
    // setCount(count-1 );
     if (count > 0) {setCount(count - 1);}
  }
  const countReset=()=>{
     setCount(0);
  }
   
  return (
    <>
      <div className='container'> 
        <div className='counter-head'>
          <h1>Counter App</h1>
        </div>
        <div className='counter'>
          <h1> {count}</h1>
        </div>
            <Button onClick={countIncrement} className='m-4 bg-success  ' >Increment</Button>
            <Button onClick={countDecrement} className='m-4 bg-danger'>Decrement</Button>
            <Button onClick={countReset} className='m-4 bg-dark'>Reset</Button>
      </div>
    </>
    
  );
}

export default App;
