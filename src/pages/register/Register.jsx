import style from './registerStyle.module.css';

const Register = () => {
    return (
        <div className='container'>
            <form className={style.formBlock}>
                <h1 className={style.formTitle}>Dizimnen ótiń</h1>
                <input type="text" placeholder='Atıńızdı kiritiń' required />
                <input type="text" placeholder='Email kiritiń' required />
                <input type="text" placeholder='Parol kiritiń' required />
                <div className={style.checkBlock}>
                    <label>
                        <input type="checkbox" />
                        <span>30 kún saqlań</span>
                    </label>
                    <a href="#">Parol yadtan shıqqan</a>
                </div>
                <button className={style.registerBtn}>Dizimnen ótiw</button>
            </form>
        </div>
    )
}

export default Register