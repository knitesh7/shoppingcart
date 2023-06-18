import {useCounter} from './context/countercontext'

function CounterDiv(){
    const counterState = useCounter()
    return(
        <div className="counterdiv">
            <button onClick={()=>counterState.setCount(counterState.count+1)}>Increment</button>
            <button onClick={()=>counterState.count!=0 && counterState.setCount(counterState.count-1)}>Decrement</button>
        </div>
    )
}
export default CounterDiv