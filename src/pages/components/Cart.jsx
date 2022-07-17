import { CartCard } from "../../UI";
import { shopData } from "../../data/shopData";
import { Link } from "react-router-dom";

export const Cart = () => {
    const shopDataId = [];

    const cartListLS = JSON.parse(localStorage.getItem("cartList"));

    for (let index = 0; index < cartListLS.length; index++) {
        shopDataId.push(cartListLS[index].id);
    }
    
    return (
        <>

            {
                shopDataId.length > 0 ?
                    <div className="container d-flex flex-row flex-wrap mt-4 ">
                        {

                            shopDataId.map(shopId => {
                                return <CartCard
                                    key={shopData[shopId - 1].id}
                                    id={shopData[shopId - 1].id}
                                    manufacturer={shopData[shopId - 1].manufacturer}
                                    type={shopData[shopId - 1].type}
                                    price={shopData[shopId - 1].price}
                                    description={shopData[shopId - 1].description}
                                    imgPath={`assets/images/${shopData[shopId - 1].tag}.jpg`}
                                />

                            })
                        }
                    </div>
                    :
                    <div className="container mt-5 w-50">
                        <div className="alert alert-dark" role="alert">
                            <strong> Your cart is empty. &#128073; <Link to="/">You can check out these products</Link>&#128072;</strong>
                        </div>
                    </div>
            }



        </>
    )
}
