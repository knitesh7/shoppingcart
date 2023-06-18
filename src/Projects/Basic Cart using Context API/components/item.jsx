import {useCartState} from './context/cartcontext.jsx'

export const Item = ({naam,price})=>{
    const cartState = useCartState()
    return(
        <div className="item">
            <div className="itemSpecs">{naam}</div>
            <div className="itemSpecs">Rs.{price}</div>
            <div><button className="btn" onClick={()=>cartState.setCartItems([...cartState.cartItems,[naam,price]])}>Add to Cart</button></div>
        </div>
    )
}