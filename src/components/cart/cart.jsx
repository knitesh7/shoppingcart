import './cart.css'
import { useDispatch, useSelector } from "react-redux"
import CartItem from './cartitem.jsx'
import MainHeader from '../mainheader/mainheader'
import { itemRemover } from '../../redux/slices/cartslice'

export default function Cart() {
    const dispatch = useDispatch()
    const cartInfo = useSelector(state => state.cartInfo)


    function totalItemsCalc() {
        return cartInfo.items.reduce((acc, curr) => +acc + +curr.quantity, 0)
    }

    function cartEmptier() {
        cartInfo.items.map(item => dispatch(itemRemover(item.id)))
    }
    return (
        <div className='cartPage'>
            <MainHeader onCartPage={true} />
            <div className="cart">

                <div className="itemsContainer">
                    {cartInfo.items.length == 0 ? 'Cart is empty' : cartInfo.items.map(item => <CartItem key={item.id} id={item.id} thumbnail={item.thumbnail} title={item.title} price={item.price} />)}
                </div>

                {cartInfo.items.length != 0 && <div className="subtotal">

                    <div className="totalComponents"><button onClick={cartEmptier}>Remove All</button></div>
                    
                    <div className="totalComponents">Total products : {cartInfo.items.length}</div>
                    <div className="totalComponents">Total items : {totalItemsCalc()}</div>
                    <div className="totalComponents">Bill Amount : Rs.{cartInfo.totalAmount}</div>
                    <div className="totalComponents"><button>Proceed to Checkout</button></div>
                </div>}

            </div>
        </div>

    )
}