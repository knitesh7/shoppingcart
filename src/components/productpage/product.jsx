import './product.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {itemAdder} from '../../redux/slices/cartslice'
export default function Product() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const filterInfo = useSelector(state => state.filterInfo)
    const cartInfo = useSelector(state => state.cartInfo)
    const product = filterInfo.unfilteredItems.find(item => Number(item.id) == Number(params.productId))
    console.log('product : ', product)
    const presence = cartInfo.items.some(x => Number(x.id) == Number(params.productId))
    function getQuantity() {
        let item = cartInfo.items.find(x => Number(x.id) == Number(params.productId))
        return item.quantity
    }
    return (
        <div className="productPage">
            <div className="imagesContainer">{product.images.map(image => <img src={image}></img>)}</div>
            <div className="detailsContainer">
                <div className="productDetailsContainer">
                    <div className="productDetails"><h2>{product.title}</h2></div>
                    <div className="productDetails"><h3>{product.description}</h3></div>
                    <div>
                        <div className="productDetails">Product Price : Rs.{product.price}</div>
                        <div className="productDetails">Product Rating : {product.rating}</div>
                    </div>
                    <div>
                        <div className="productDetails">Brand of Product : {product.brand}</div>
                        <div className="productDetails">Category of Product : {product.category}</div>
                    </div>
                </div>
                {presence && <div className="cartDetails">

                    {getQuantity() > 1 ? <div style={{ color: 'red' }}>There are '{getQuantity()}' {product.title}s present in cart</div> : <div style={{ color: 'red' }}>This product is present in cart</div>}

                    <div><button style={{ width: '10vw', margin: '1rem' }} onClick={
                        () => {
                            navigate('/cart')
                        }
                    }>Go to cart</button></div>
                    <div><button style={{ width: '10vw', margin: '1rem' }} onClick={
                        () => {
                            navigate('/')
                        }
                    }>Homepage</button></div>
                </div>}
                {
                    !presence && <div className="cartDetails">
                        {/* <div style={{color:'red'}}>This product is present </div> */}
                        <div><button style={{ width: '10vw', margin: '1rem' }} onClick={() => {
                            const itemToAdd = { id:params.productId, title:product.title, price:product.price, rating:product.rating, thumbnail:product.thumbnail }
                            dispatch(itemAdder(itemToAdd))
                        }}>Add to cart</button></div>
                        <div><button style={{ width: '10vw', margin: '1rem' }} onClick={
                            () => {
                                navigate('/')
                            }
                        }>Homepage</button></div>
                    </div>
                }
            </div>
        </div>
    )
}