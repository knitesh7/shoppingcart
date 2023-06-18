import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { itemRemover } from '../../redux/slices/cartslice'
import { quantityChanger } from '../../redux/slices/cartslice'

export default function CartItem({ id, thumbnail, title, price }) {
    const dispatch = useDispatch()
    const cartInfo = useSelector(state => state.cartInfo)
    const [quantity, setQuantity] = useState('')
    return (

        <div className="cartItemBox">
            <div className="cartItemComponets"><img src={thumbnail}></img></div>
            <div className="cartItemComponets">{title}</div>
            <div className="cartItemComponets cartItemPrice">Rs.{price}</div>

            <div className="cartItemComponets quantityDiv">
                <div>Quantity: {cartInfo.items.find(x => x.id == id).quantity}</div>
                <div>
                    <input type='text' value={quantity} onChange={(e) => setQuantity(Number(e.target.value) != NaN ? Number(e.target.value) : NaN)}></input>
                    <button onClick={() => {
                        !isNaN(quantity) && (parseInt(quantity) >= 1 ? dispatch(quantityChanger({ [id]: parseInt(quantity) })) : alert('Minimum quantity should be 1'))
                        setQuantity('')
                    }}>Submit</button>
                </div>

            </div>
            <div className="cartItemComponets cartItemDelete"><button onClick={() => {
                dispatch(itemRemover(id))
            }}>Delete</button></div>

        </div>
    )
}