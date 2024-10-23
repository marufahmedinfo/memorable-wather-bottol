import { useEffect } from "react";
import { useState } from "react";
import Bottol from "../Bottol/Bottol";
import './Bottols.css'
import { remove, setCardLS, setStordCard } from "../../utlites/localsotrag";
import Cart from "../Cart/Cart";


const Bottols = () => {
    const [bottols, setBottols] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=> {
        fetch('bottols.json')
        .then(res => res.json())
        .then(data => setBottols(data))
    },[]);
    useEffect(()=>{
        console.log('fjajfolsjdf', bottols.length)
        if(bottols.length>0){
            const stordCard = setStordCard();
            console.log(stordCard)
            const saveCard =[];
            for(const id of stordCard){
                const bottl = bottols.find(btls => btls.id === id)
                if(bottl){
                    saveCard.push(bottl)
                }
            }
            console.log(saveCard)
            setCart(saveCard)
        }
    
    },[bottols])

    const handleAddCard = bottl => {
        // console.log(bottl)
        const newCart = [...cart, bottl];
        setCart(newCart)
        setCardLS(bottl.id)
    }

    const handleRemove = (id) => {
        const remainigCrd = cart.filter(bti => bti.id !== id)
        setCart(remainigCrd)
        remove(id)
    }
    return (
        <div>
            <h2>Bottols Heare : {bottols.length}</h2>
            <Cart cart={cart} handleRemove={handleRemove}></Cart>
          <div className="bottols-container">
          {
                bottols.map(bottol => <Bottol 
                    key={bottol.id}
                    handleAddCard={handleAddCard}
                    bottol={bottol}></Bottol>)
            }
          </div>
        </div>
    );
};

export default Bottols;