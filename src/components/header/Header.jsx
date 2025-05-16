import style from './header.module.css';
import { Link, NavLink } from 'react-router-dom';
import { MdFavoriteBorder, MdShoppingCart, MdLogin, MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchThem } from '../../store/reducers/filterSlice';
import { useState } from 'react';

const Header = () => {
  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const totalQuantity = cartItems.length;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleSearchChange = (e) => {
    dispatch(setSearchThem(e.target.value));
  };

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.headerBlock}>
          <div className={style.logo}>
            <img src='/icon.ico' alt="logo" />
            <Link to="/">Belleze</Link>
          </div>

          <div className={style.searchBlock}>
            <MdSearch />
            <input
              type="search"
              placeholder='Tovarlardı izlew...'
              onChange={handleSearchChange}
            />
          </div>

          <div className={style.burger + (menuOpen ? ` ${style.burgerOpen}` : '')} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`${style.navbars} ${menuOpen ? style.active : ''}`}>
            <NavLink to='/favorites' onClick={() => setMenuOpen(false)}>
              <MdFavoriteBorder />
            </NavLink>
            <NavLink to='/cart' className={style.showLengthLink} onClick={() => setMenuOpen(false)}>
              {totalQuantity > 0 && <span className={style.cartCount}>{totalQuantity}</span>}
              <MdShoppingCart />
            </NavLink>
            <NavLink to='/register' onClick={() => setMenuOpen(false)}>
              <MdLogin />
            </NavLink>
          </nav>
        </div>
      </div>
    </header>

  );
};

export default Header;