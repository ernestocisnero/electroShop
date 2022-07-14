
export const ShopList = ( id )=>{
    let cartCount = 0;

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

    for (let index = 0; index < shopCartList.length; index++) {
        cartCount += shopCartList[index].count;
        
    }
    return cartCount;
}