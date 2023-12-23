import { useContext } from "react";
import "./Product.css"
import { MyContext } from "../Store/store";
import { renderRatingStars } from "../tools";


export default function Product(props) {
    const { id, title, brand, category, description, discountPercentage, price, rating, images, thumbnail } = props.product
    const {addTocart}=useContext(MyContext)
    return (
        <div className="product">
            <div className="product-image-container">
            <img src={thumbnail} alt="thmb" className="product-thumbnail"/>
            {/* <img src={images[0]} alt="i"  className="product-image"/>
            <img src={images[1]} alt="i"  className="product-image" />
            <img src={images[2]} alt="i"  className="product-image"/>  */}
            </div>
            <div className="product-details-container">
            <div className="brand">{brand}/{category}</div>
            <div>{renderRatingStars(rating)}</div>
            <div className="product-title">{title}</div>
            <div className="product-price">${price}</div>
            <div className="discount">{discountPercentage}%</div>
            <button className="product-btn" onClick={()=>addTocart(id)}>Add to cart</button>
            <div className="product-description">{description}</div>
            </div>
        </div>
    )

}
