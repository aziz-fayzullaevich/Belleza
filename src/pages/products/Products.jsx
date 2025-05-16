import style from './productsStyle.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/reducers/productSlice';
import { BiSolidCart } from 'react-icons/bi';
import { MdOutlineFavorite } from "react-icons/md";
import { addToCart } from '../../store/reducers/cartSlice';
import { toggleFavorite } from '../../store/reducers/favoriteSlice';
import { Link } from 'react-router-dom';

const Products = () => {
  const dispatch = useDispatch();
  const productsState = useSelector(state => state.products) || {};
  const { products = [], loading = false, error = null } = productsState;

  const { searchThem } = useSelector(state => state.filter);
  const { favoriteItems } = useSelector(state => state.favorite);

  useEffect(() => {
    if (!Array.isArray(products) || products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const filteredProducts = products.filter(product =>
    product.name?.toLowerCase().includes(searchThem.toLowerCase())
  );

  const shimmerStyle = {
    height: '260px',
    opacity: 0.28,
    background: 'linear-gradient(90deg, #eeeeee 25%, #dddddd 50%, #eeeeee 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite',
  };


  if (loading) {
    return (
      <div className="container">
        <div className={style.productBlock} style={{ marginTop: '40px' }}>
          <div className={`${style.productBox} ${style.shimmer}`}></div>
          <div className={`${style.productBox} ${style.shimmer}`}></div>
          <div className={`${style.productBox} ${style.shimmer}`}></div>
          <div className={`${style.productBox} ${style.shimmer}`}></div>
          <div className={`${style.productBox} ${style.shimmer}`}></div>
          <div className={`${style.productBox} ${style.shimmer}`}></div>
          <div className={`${style.productBox} ${style.shimmer}`}></div>
          <div className={`${style.productBox} ${style.shimmer}`}></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <h1 className={style.error}>Qate: {error}</h1>;
  }

  return (
    <div className="container">
      <h2 className="titleBlock">Kosmetika ónimleri</h2>
      {filteredProducts.length === 0 ? (
        <p className='desc'>Hesh qanday ónim tabılmadı.</p>
      ) : (
        <div className={style.productBlock}>
          {filteredProducts.map(product => (
            <div className={style.productBox} key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.image_link} alt={product.name} />
              </Link>

              <button
                className={style.favoriteClickBtn}
                onClick={() => dispatch(toggleFavorite(product))}
                style={{
                  color: favoriteItems.some(item => item.id === product.id)
                    ? 'red'
                    : 'rgb(194, 194, 194)'
                }}
              >
                <MdOutlineFavorite />
              </button>

              <span className={style.brand}>{product.brand}</span>
              <h3 className={style.title}>{product.name}</h3>
              <span className={style.rating}>Reyting: {product.rating}</span>

              <div className={style.productBottomBlock}>
                <span className={style.price}>${product.price}</span>
                <button
                  className={style.addedBtn}
                  onClick={() => dispatch(addToCart(product))}
                >
                  <BiSolidCart />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
