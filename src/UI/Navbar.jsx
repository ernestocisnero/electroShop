import { useContext } from "react";
import { NavLink,Link } from "react-router-dom";
import { CartContext } from "../App";

import './PersonalizedUIstyles.css';



export const Navbar = () => {

    //const cartCount = JSON.parse(localStorage.getItem("cartTotal"));
    const { cartCount } = useContext( CartContext );
    
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                <NavLink className="navbar-brand" to="/">Electro-Shop</NavLink>

                <div className="container w-50">
                    <input className="form-control me-sm-2" type="text" placeholder="Looking for something?" />
                    <button className="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
                </div>

                <div className="container w-25">
                    <Link className="navbar-brand" to="/cart">
                    <i className="fa-solid fa-cart-shopping fa-2xl"></i>
                    </Link>
                    { cartCount > 0 && <div className="cart-counter"> {cartCount} </div> }
                </div>

                <NavLink className="navbar-brand mx-2" to="/auth">
                    Login
                </NavLink>

            </nav>
        </>

    )
}
