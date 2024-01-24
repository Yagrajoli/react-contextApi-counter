import React, { useContext } from 'react'
import Counter from './component/Counter'
import { CountContext } from './context/Contextcount'

export default function App() {

  const count = useContext(CountContext);
  
  return (
    <>
        <div className='center_div'>

    
          <h1>Counter  is {count.count} </h1>

          <div className="counter">
            <Counter />
          </div>

        </div>
    </>
  ) 
}
