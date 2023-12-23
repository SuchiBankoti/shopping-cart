import { useContext, useEffect } from "react";
import "./Navbar.css";
import { IoIosCart, IoIosSearch } from "react-icons/io"
import { MyContext } from "../Store/store";
import { Link } from "react-router-dom";
import Profile from "./Profile";


export default function Navbar() {
    const {startSearch,searchValue,setSearchValue,cartItems} = useContext(MyContext)
     
    const handleChange=(e)=>{
        setSearchValue(e.target.value)
    }
    useEffect(() => {
        startSearch(searchValue)
    },[searchValue,startSearch])
    return (
        <>
            <Profile/>
            <div className="search-container">
                <input className="search-bar" value={searchValue} onChange={handleChange}></input>
                <IoIosSearch className="icon"/>
            </div>
           
            <div className="cart-icon-box">
            <Link to={"/cart"} className="link">
                    <IoIosCart className="cart-icon" />
                </Link>
                <div className="number">{cartItems.length}</div>
            </div>
        </>
    )
}