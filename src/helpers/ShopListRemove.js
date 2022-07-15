

export const ShopListRemove = ( id, cartCount )=>{

    const shopCartList = JSON.parse(localStorage.getItem("cartList"));
    

    if(shopCartList){
        const elementIndex = shopCartList.findIndex( (item)=> item.id === id );
        shopCartList.splice(elementIndex,1);
        localStorage.setItem("cartList",JSON.stringify(shopCartList));
        
        
    }
    
    localStorage.setItem("cartCount",JSON.stringify(cartCount));

}