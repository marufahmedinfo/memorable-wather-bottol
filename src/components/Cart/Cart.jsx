import './Cart.css'
import PropTypes from 'prop-types';

const Cart = ({cart,handleRemove}) => {
    return (
        <div>
            <h3>Cart : {cart.length}</h3>
            <div className="img-cant">
            {cart.map(btll=> <div  key={btll.id}>
                <img  src={btll.img}></img>
                <button onClick={()=>handleRemove(btll.id)}>Delete</button>
            </div>)}
            </div>
        </div>
    );
};


Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired
}
export default Cart;