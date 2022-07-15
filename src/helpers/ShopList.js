
export const ShopList = ( id, cartCount )=>{

    const shopCartList = JSON.parse(localStorage.getItem("cartList")) || [];

    const itemFound = shopCartList.find( item => item.id === id);

    if( !itemFound ){
        shopCartList.push({
            id,
            count:1
        })
    }
    else{
        itemFound.count++;
    }

    localStorage.setItem("cartList",JSON.stringify(shopCartList));
    localStorage.setItem("cartCount",JSON.stringify(cartCount));
}