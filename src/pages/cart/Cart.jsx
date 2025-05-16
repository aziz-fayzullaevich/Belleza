import style from './cartStyle.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteOutline } from "react-icons/md";
import { decrementQuantity, incrementQuantity, removeFromCart } from '../../store/reducers/cartSlice';
import OrderModal from '../../components/modal/OrderModal';

const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.length;
  const totalPrice = cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0);

  return (
    <div className='container'>
      <h2 className='titleBlock'>Korzina bólimi</h2>
      {cartItems.length === 0 ? (
        <div className={style.emptyBlock}>
          <img src="/main-img/empty-cart.png" alt=" empty-cart" />
        </div>
      ) : (
        <div className={style.cartBlock}>
          {
            cartItems.map(item => (
              <div key={item.id} className={style.cartBox}>
                <img src={item.image_link} alt={item.name} />
                <div className={style.cartDescItem}>
                  <h2>{item.name}</h2>
                  <b className={style.cartPriceItem}>Bahası: {item.price} $</b>
                </div>
                <div className={style.quantityBlock}>
                  <p>Muǵdarı:</p>
                  <div className={style.quantityBlockBtns}>
                    <button onClick={() => dispatch(decrementQuantity(item.id))}
                      disabled={item.quantity === 1}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                  </div>
                </div>
                <button className={style.deleteBtn}
                  onClick={() => dispatch(removeFromCart(item.id))}>
                  <MdDeleteOutline />
                </button>
              </div>
            ))
          }
          <div className={style.totalBlock}>
            <div className={style.totalPriceBlock}>
              <p>Ulıwma tovarlar sanı: {totalQuantity}</p>
              <p>Ulıwma bahası: {totalPrice} $</p>
            </div>
            <button onClick={() => setIsModalOpen(true)}>Zakazdı rásmiylestiriw</button>
          </div>
        </div>
      )}
      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cartItems={cartItems}
        totalQuantity={totalQuantity}
        totalPrice={totalPrice}
      />

    </div>
  );
};

export default Cart;