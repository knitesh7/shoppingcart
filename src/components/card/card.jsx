import './card.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { itemAdder } from '../../redux/slices/cartslice'
export default function Card({ id, title, price, rating, thumbnail }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cartInfo = useSelector(state => state.cartInfo)
    function returnQuantity(id) {
        let item = cartInfo.items.find(item => Number(item.id) == Number(id))
        if(item){
            return item.quantity
        }
    }
    return (
        <div className="card" >
            <div className='wrapper' onClick={()=>navigate(`/product/${id}`)}>
                <div className="cardDetails thumbDiv"><img src={thumbnail}></img></div>
                <div className="cardDetails">{title}</div>
                <div className="cardDetails">Rating : {rating}</div>
                <div className="cardDetails">Price : Rs.{price}</div>
            </div>

            {cartInfo.items.some(item => Number(item.id) == Number(id)) ? <div className="cardDetails"><button className="add2cartBtn" onClick={() => {
                const itemToAdd = { id, title, price, rating, thumbnail }
                dispatch(itemAdder(itemToAdd))
            }}>({returnQuantity(id)}) added in cart </button></div> : <div className="cardDetails"><button className="add2cartBtn" onClick={() => {
                const itemToAdd = { id, title, price, rating, thumbnail }
                dispatch(itemAdder(itemToAdd))
            }}>Add to cart</button></div>}


        </div>
    )
}