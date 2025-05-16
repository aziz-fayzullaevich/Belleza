import style from './productDetailsStyle.module.css';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../store/reducers/productSlice';
import { addToCart } from '../../store/reducers/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productsState = useSelector(state => state.products) || {};
  const { products = [], loading = false, error = null } = productsState;


  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!Array.isArray(products) || products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  if (loading) {
    return <h2 className={style.loading}>Júklenip atır...</h2>;
  }

  const product = products.find(item => String(item.id) === id);

  if (!product && !loading) {
    return <h2 className={style.error}>Ónim tabılmadı!</h2>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <div className='container'>
      <div className={style.detailsBlock}>
        <img
          src={product.image_link}
          alt={product.name}
          className={style.detailProductImg}
        />

        <div className={style.detailProductDescBlock}>
          <h2 className={style.detailProductTitle}>{product.name}</h2>
          <p className={style.detailProductDesc}>{product.description}</p>

          <div className={style.detailProductInfo}>
            <b>Reyting: {product.rating}</b>
            <b>Brend: {product.brand}</b>
          </div>

          <span className={style.detailProductPrice}>$ {product.price}</span>

          <div className={style.detailProductQuantityBlock}>
            <b>Muǵdarı:</b>
            <div className={style.detailProductQuantity}>
              <button
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity(prev => prev + 1)}
              >
                +
              </button>
            </div>
          </div>

          <button
            className={style.addBtnDetailProduct}
            onClick={handleAddToCart}
          >
            Korzinaǵa qosıw
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
