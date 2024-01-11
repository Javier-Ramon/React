import './CartWidget.css';
import { GrCart } from "react-icons/gr"
import { useContext } from 'react';
import { CartContext } from './../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/Cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <img className='CartImg' src={GrCart} alt='cart-wdiget' />
            {totalQuantity} </Link>
    )
}
export default CartWidget
