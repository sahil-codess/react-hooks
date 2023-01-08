import React, {useState, useMemo} from 'react'

function Counter() {
    const [counterOne, setCounertOne] = useState(0)
    const [counterTwo, setCounertTwo] = useState(0) 

    const incrementOne = () =>{
        setCounertOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounertTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0;
        while(i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

  return (
    <div>
        <div>
            <button onClick={incrementOne}>Counter One - {counterOne}</button>
            <span>{isEven ? 'Even': 'Odd'}</span>
        </div>
        <div>
            <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
        </div>
    </div>
  )
}

export default Counter