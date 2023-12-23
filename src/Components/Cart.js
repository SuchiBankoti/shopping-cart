import { useContext,useMemo } from "react";
import "../CSS/Cart.css";
import { MyContext } from "../Store/store";
import { bundleItems } from "../tools";
import { Link } from "react-router-dom";
import Profile from "./Profile";


export default function Cart() {
    const { cartItems,addTocart,removeFromcart} = useContext(MyContext)
    const items = useMemo(() => bundleItems(cartItems), [cartItems])
    const total = items.reduce((sum, product) =>(sum+=(product.obj.price*product.count) ),0)
    
    
    return (
        <div className="cart-content">
                <div className="home-page-navbar">
               <Profile/>
               <Link to={"/home"} className="link" id="home">
                    Shop
               </Link>
                </div>
            {total>0 && <div className="checkout"><h2>Your bag total is ${total}</h2><button>Checkout</button></div>}
            {
            items.length === 0 ? <h2 className="heading">No items in your cart</h2> :
            <div className="cart-items">
            {items.map((product) => {
                const { id, title, price, thumbnail } = product.obj;
                const count = product.count;
                return (<div key={id} className="cart-item">
                    <div className="cart-item-img">
                        <img src={thumbnail} alt="thumb"/>
                    </div>
                    <div className="product-title">{title}</div>
                    <div className="item-count-box">
                        <div className="btn" onClick={()=>removeFromcart(id)}>-</div>
                        <div>{count}</div>
                        <div className="btn" onClick={()=>addTocart(id)} >+</div>
                    </div>
                    <div  className="cart-price">${price*count}</div>
                </div>)
            })}
        </div>
        }
     </div>
    )
}