import { useContext } from "react";
import { CartContext } from "../../App";
// import { ShopList } from "../../helpers/ShopList";
// import { ShopListRemove } from "../../helpers/ShopListRemove";


export const Card = ( {id,manufacturer, type, price, description, imgPath} ) => {

    let { cartCount, setCartCount } = useContext( CartContext );

    const AddCart = ()=>{
        setCartCount( cartCount++)

    //     const cartCount = ShopList( event.target.id );
    //     localStorage.setItem("cartTotal",JSON.stringify(cartCount));
    }

     const RemoveCart = ()=>{
        setCartCount( cartCount--)
    //     ShopListRemove( event.target.id);
     }


    return (
        <>
            <div className="card w-25 h-25 mx-4 my-4">
                <img className="card-img-top" src={imgPath} alt={`${manufacturer}:${type}`}/>
                <div className="card-body">
                    <h5 className="card-title">{`${manufacturer}, ${type}: $${price}`}</h5>
                    <p className="card-text">{description}</p>
                    <hr />
                    
                    <div className="row">
                        <div className="col-6">

                    <button onClick={ AddCart  } className="btn btn-dark" id={id}>Add</button>
                        </div>
                        <div className="col-6">

                    <button onClick={ RemoveCart } className="btn btn-danger" id={id}>Remove</button>
                        </div>
                    </div>
                    
                </div>
            </div>

        </>
    )
}
