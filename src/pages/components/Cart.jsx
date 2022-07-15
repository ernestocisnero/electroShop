import { CartCard } from "../../UI";
import { shopData } from "../../data/shopData";

export const Cart = () => {
    const shopDataId = [];

    const cartListLS = JSON.parse(localStorage.getItem("cartList"));

    for (let index = 0; index < cartListLS.length; index++) {
        shopDataId.push(cartListLS[index].id);
    }
    console.log(shopDataId);

    for (let index = 0; index < shopDataId.length; index++) {
       // console.log(shopData[shopDataId[index]].category);

    }


    return (
        <>
            <div className="container d-flex flex-row flex-wrap mt-4 ">
                {
                    shopDataId.map(shopId => {
                        return <CartCard
                            key={shopData[shopId-1].id}
                            id={shopData[shopId-1].id}
                            manufacturer={shopData[shopId-1].manufacturer}
                            type={shopData[shopId-1].type}
                            price={shopData[shopId-1].price}
                            description={shopData[shopId-1].description}
                            imgPath={`assets/images/${shopData[shopId-1].tag}.jpg`}
                        />

                    })
                }
            </div>



        </>
    )
}
