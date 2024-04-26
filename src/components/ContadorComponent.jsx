import { useCounter } from "../hooks/useCounter"

export const ContadorComponent = () => {

    const {counter, increment, decrement, reset} = useCounter(0)

    return (
    <>
        <h1>Contador: {counter}</h1>
        <button className="btn btn-outline-primary " onClick={() => increment(2)}>+</button>
        <button className="btn btn-outline-danger"  onClick={() => reset()}>Reset</button>
        <button className="btn btn-outline-warning " onClick={() => decrement(3, false)}>-</button>
    </>
    )
}
