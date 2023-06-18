import './App.css';
import CounterDiv from './components/counterdiv.jsx'
import {useCounter} from './components/context/countercontext'

function App(){
  const counterState = useCounter()
  return(
    <div className='App'>
      <div className='result'>Counter val is {counterState.count}</div>
      <CounterDiv/>
      <CounterDiv/>
      <CounterDiv/>
      <CounterDiv/>
    </div> 
  )
}

export default App
