import { useCartState } from "./context/cartcontext"
export const Cart = () => {
    const cartState = useCartState()
    const cartItemsArr = cartState.cartItems.map(x => x[0])
    function updateCartItems() {
        const cartItemsObj = cartItemsArr.reduce((acc, curr) => {
            if (acc[curr]) {
                acc[curr] += 1
            } else {
                acc[curr] = 1
            }
            return acc
        }, {})
        const cartItemsInfo = Object.entries(cartItemsObj)
        return cartItemsInfo.map(x => (x[1] > 1) ? `${x[0]}(${x[1]})` : `${x[0]}`)
    }
    return (
        <div className="cart">
            <div className="cartList">Cart-Items : {cartState.cartItems.length == 0 ? 'No items added yet' : updateCartItems().join(', ')}</div>
            {cartState.cartItems.length != 0 && <div className="cartTotal">Total Bill : Rs.{cartState.cartItems.reduce((acc, curr) => +acc + +curr[1], 0)}</div>}
        </div>
    )
}