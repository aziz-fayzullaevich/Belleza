import style from './orderModal.module.css';
import { MdOutlineClose } from "react-icons/md";

const OrderModal = ({ isOpen, onClose, cartItems, totalQuantity, totalPrice }) => {
  if (!isOpen) return null;

  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContent}>
        <button onClick={onClose} className={style.closeModal}>
          <MdOutlineClose />
        </button>
        <h2 className={style.title}>Zakazdı rásmiylestiriw</h2>

        <div className={style.orderItems}>
          {cartItems.map(item => (
            <div key={item.id} className={style.itemRow}>
              <img src={item.image_link} alt={item.name} />
              <b>{item.name}</b>
              <div>
                <b>Bahası: {item.price}$</b>
                <b>Muǵdarı: {item.quantity}</b>
              </div>
            </div>
          ))}
        </div>

        <form className={style.formBlock}>
          <input type="text" placeholder="Atıńız" required />
          <input type="text" placeholder="Familiyańız" />
          <input type="tel" placeholder="Telefon nomerińiz" required />
          <input type="text" placeholder="Jiberiw adresi" required />
          <button type="submit" className={style.addedBtn}>Jiberiw</button>
        </form>

        <div className={style.summary}>
          <p>Ulıwma tovarlar: {totalQuantity}</p>
          <p>Ulıwma bahası: {totalPrice} $</p>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;