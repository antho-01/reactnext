"use client"
import {useEffect, useState } from 'react';


const App = () => {
      const [counter, useCounter] = useState(0);
      useEffect(()=>{
            counter < 0 ? alert("number is negative") : true
      }, [counter])
      return (
            <div>
                  <h1>Counter App</h1>
                  <button onClick={() => useCounter((precount) => precount + 1)} >+</button>
                  <h1>{counter}</h1>
                  <button onClick={() => useCounter((precount) => precount -1)}>-</button>
            </div>

      )
}

export default App;