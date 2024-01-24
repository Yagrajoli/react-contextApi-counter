import React, { useContext } from 'react'
import { CountContext } from '../context/Contextcount'

export default function Counter() {
    const counterContext = useContext(CountContext);
  return (
    <>
      <button onClick={() => counterContext.setCount(counterContext.count + 1)} >Increment</button>
      <button onClick={() => counterContext.setCount(counterContext.count - 1)} >Decrement</button>
    
    </>
  )
}
