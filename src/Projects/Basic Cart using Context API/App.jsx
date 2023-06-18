import {Item} from './components/item.jsx'
import {Cart} from './components/cart.jsx'

import './App.css'
const App = ()=>{
  
  return(
    <div className="App">
        <div className='itemContainer'>
          <Item naam='Mobile' price='20000' />
          <Item naam='TV' price='25000' />
          <Item naam='AC' price='50000' />
        </div>
        <Cart/>
    </div>
  )
}

export default App