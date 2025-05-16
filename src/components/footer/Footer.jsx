import style from './footer.module.css';
import { Link } from 'react-router-dom';
import { FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className={style.footerBlock}>
                    <div className={style.leftBlock}>
                        <div className={style.logo}>
                            <img src='/icon.ico' alt="logo" />
                            <Link to='/' >Belleze</Link>
                        </div>
                        <span>© Belleze. 2025</span>
                    </div>
                    <div className={style.rightBlock}>
                        <div className={style.linksBlock}>
                            <p>Bizge aǵza bolıń!</p>
                            <div className={style.links}>
                                <a href="#">
                                    <FaTelegram />
                                </a>
                                <a href="#">
                                    <FaInstagram />
                                </a>
                                <a href="#">
                                    <FaFacebook />
                                </a>
                            </div>
                        </div>
                        <p>Qosımsha sorawlar</p>
                        <div className={style.additQuest}>
                            <input type="text" />
                            <button>Jiberiw</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;