import './Bottol.css'
import PropTypes from 'prop-types';

const Bottol = ({bottol,handleAddCard}) => {
    // console.log(bottol)
    const {name, img , price} = bottol;
    return (
        <div className='bottol'>
            <h3>Bottol : {name}</h3>
            <img src={img} alt="" />
            <p>Price : ${price}</p>
            <button onClick={()=>handleAddCard(bottol)}>Parches</button>
        </div>
    );
};


Bottol.propTypes = {
    bottol: PropTypes.object.isRequired,
    handleAddCard: PropTypes.func.isRequired
}

export default Bottol;