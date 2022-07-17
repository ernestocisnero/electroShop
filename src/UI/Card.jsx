import { useContext } from "react";
import { CartContext } from "../App";
import { ShopList, ShopListRemove } from "../helpers";



export const Card = ({ id, manufacturer, type, price, description, imgPath }) => {

    let { cartCount, setCartCount } = useContext(CartContext);

    const AddCart = (event) => {

        setCartCount(cartCount = cartCount + 1);

        ShopList(event.target.id, cartCount);
    }

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
                <img className="card-img-top mt-2" src={imgPath} width={200} height={200} alt={`${manufacturer}:${type}`} />
                <div className="card-body">
                    <h5 className="card-title">{`${manufacturer}, ${type}: $${price}`}</h5>
                    <p className="card-text">{description}</p>
                    <hr />

                    <div className="row">
                        <div className="col-6">

                            <button onClick={AddCart} className="btn btn-dark" id={id}>Add</button>
                        </div>
                        <div className="col-6">

                            <button onClick={RemoveCart} className="btn btn-danger" id={id}>Remove</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
