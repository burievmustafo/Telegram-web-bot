import './cart.css'
import Button from '../button/button'
import { totalPrice } from '../../units/total-price'

const Cart = ({cartItems, onCheckout}) => {
  const formatPrice = (price) => {
    return price.toLocaleString('uz-UZ') + " so'm";
  }

  return (
    <div className='cart__container'>
      <div className='cart__info'>
        <span className='cart__icon'>🛍️</span>
        <div className='cart__details'>
          <span className='cart__label'>Jami summa</span>
          <span className='cart__total'>{formatPrice(totalPrice(cartItems))}</span>
        </div>
      </div>
      <Button 
        title={cartItems.length === 0 ? "Kurs tanlang" : `💳 To'lash (${cartItems.length})`}
        disable={cartItems.length === 0}
        type={"checkout"}
        onClick={onCheckout}
      />
    </div>
  )
}

export default Cart