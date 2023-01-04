import React, { useState } from 'react'

function HookCounterTwo() {
    const initalCount = 0
    const [count, setCount] = useState(initalCount)

    const incrementFive = () => {
        for(let i = 0; i<5; i++) {
            setCount( (prevCount) => {
                return prevCount + 1
            })  
        }
    }
  return (
    <div>
        count : {count}
        <button onClick={() => setCount(initalCount)}>Reset</button>
        <button onClick={() => setCount((prevCount) => {
                return prevCount + 1
            })}>Increment</button>
        <button onClick={() => setCount((prevCount) => {
                return prevCount + 1
            })}>Decrement</button>
        <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo