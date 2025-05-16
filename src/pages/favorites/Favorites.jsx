import style from './favoritesStyle.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../../store/reducers/favoriteSlice';
import { MdDeleteOutline } from 'react-icons/md';

const Favorites = () => {
  const { favoriteItems } = useSelector(state => state.favorite);
  const dispatch = useDispatch();

  return (
    <div className="container">
      {favoriteItems.length === 0 ? (
        <p className='desc'>Saylanǵanlar bólimi bos!</p>
      ) : (
        <div className={style.favoriteBlock}>
          {favoriteItems.map(product => (
            <div className={style.favoriteBox} key={product.id}>
              <img src={product.image_link} alt={product.name} />
              <button
                className={style.deleteBtn}
                onClick={() => dispatch(removeFavorite(product.id))}
              >
                <MdDeleteOutline />
              </button>
              <span className={style.brand}>{product.brand}</span>
              <h3 className={style.title}>{product.name}</h3>
              <span className={style.rating}>Reyting: {product.rating}</span>
              <div className={style.MdOutlineFavoriteBottomBlock}>
                <span className={style.price}>{product.price} $</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;