const setStordCard = () => {
    const sotrdCard = localStorage.getItem('cart')
    if(sotrdCard){
        return JSON.parse(sotrdCard)
    }
    return [];
}


const saveCartLS = (cart) => {
    const cardStringifid = JSON.stringify(cart)
    localStorage.setItem('cart',cardStringifid)
}
const setCardLS = id => {
    const Cart  = setStordCard();
    Cart.push(id);

    saveCartLS(Cart);
}
const remove = (id)=>{
    const cart = setStordCard();
    const remaining = cart.filter(idx => idx !== id);
    saveCartLS(remaining)
}



export { setCardLS, setStordCard, remove }


