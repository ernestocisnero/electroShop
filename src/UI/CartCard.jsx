import { useContext } from "react";
import { CartContext } from "../App";
import { ShopListRemove } from "../helpers";

export const CartCard = ({ id, manufacturer, type, price, description, imgPath }) => {

    let { cartCount, setCartCount } = useContext(CartContext);

    const RemoveCart = (event) => {
        console.log(event.target.id)
        if (cartCount > 0) {

            setCartCount(cartCount = cartCount - 1);
        }

        ShopListRemove(event.target.id, cartCount);
    }

    return (
        <>
            <div className="card w-25 h-25 mx-4 my-4">
                <img className="card-img-top mt-2" width={200} height={200} src={imgPath} alt={`${manufacturer}:${type}`} />
                <div className="card-body">
                    <h5 className="card-title">{`${manufacturer} ${type}`}</h5>
                    <hr />
                    <div className="row">
                        <div className="container-fluid">
                            <button className="btn btn-outline-primary" id={id} onClick={RemoveCart} >Proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}