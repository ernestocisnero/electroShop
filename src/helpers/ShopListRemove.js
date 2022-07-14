export const ShopListRemove = ( id )=>{
    
    
    const shopCartList = JSON.parse(localStorage.getItem("cartList"));
    let cartTotal = JSON.parse(localStorage.getItem("cartTotal"));

    

    if(shopCartList){
        const elementIndex = shopCartList.findIndex( (item)=> item.id === id );
        shopCartList.splice(elementIndex,1);

        if(!shopCartList){
            cartTotal = 0;
        }


        localStorage.setItem("cartList",JSON.stringify(shopCartList));
        localStorage.setItem("cartTotal",JSON.stringify(cartTotal));
    }


}