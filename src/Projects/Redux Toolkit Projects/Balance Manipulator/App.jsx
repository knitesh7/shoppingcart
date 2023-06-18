import './App.css'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux/es/exports'
import { incrementer,decrementer } from './redux/slices/balance'

const App = () => {
  const[val,setVal] = useState(null)
  const dispatch = useDispatch()
  const balanceState = useSelector(state=>state.balanceState)
 
  return (
    <div className="App">
      <h1>Current Bank Balance : Rs.{balanceState.amount}</h1>
      <div className='inpDiv'>Enter Amount : <input autofocus type='text' value={val} onChange={e=>setVal(e.target.value)}></input></div>
      <div className='btnsDiv'>
        <button id='inc' onClick={()=>{
            !isNaN(Number(val))?dispatch(incrementer(val)):alert('Enter a number value not a string value')
        }}>Deposit</button>
        <button id='inc' onClick={()=>{
            dispatch(incrementer(100000))
        }}>Deposit Rs. 1,00,000</button>
        <button id='dec' onClick={()=>{
            !isNaN(Number(val))?dispatch(decrementer(val)):alert('Enter a number value not a string value')
        }}>Withdraw</button>
        <button id='dec' onClick={()=>{
            dispatch(decrementer(100000))
        }}>Withdraw Rs. 1,00,000</button>
      </div>

    </div>
  )
}

export default App
