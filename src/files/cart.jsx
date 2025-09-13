
export default function Cart({cart = []}){
    if(cart.length<1){
        return <><p>Your cart is empty</p></>
    }else{
        return <>
            <label >Your cart</label>
            <ul>
                {cart}
            </ul>
        </>
    }
}