import { useState } from "react"

export const useCounter = (inicialValue = 0) => {

    const [counter, setCounter] = useState(inicialValue)

    const increment = (value = 1) => {
        setCounter(counter + value)
    }
    const decrement = (value = 1, negative) => {
        if(!negative && counter - value < 0){
            setCounter(0)
            return
        }
        setCounter(counter - value)
    }
    const reset = () => {
        setCounter(0)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}

