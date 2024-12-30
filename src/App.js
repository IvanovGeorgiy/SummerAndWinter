import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import emailjs from '@emailjs/browser';
import myImage1 from './images/img1.jpg';
import myImage2 from './images/img2.jpg';
import myImage3 from './images/img3.jpg';
import myImage4 from './images/img4.jpg';
import myImage5 from './images/logo.png';
import {ArrowLeft} from "react-bootstrap-icons";
import {registration} from "./http/userAPI";

// Главная страница
function Home() {
    const navigate = useNavigate();

    return (
        <div className="home">
            <header className="header">
                <div className="game-name"><img src={myImage5} alt="ghfjkh"></img></div>
            </header>
            <div className="banner">
                <h2 className="welcome">Добро пожаловать в мир Лета и Зимы!</h2>
            </div>
            <div className="container">
                <div className="picture">
                    <img className="summer-winter" alt="kcjvk" src={myImage1}></img>
                </div>
                <div className="picture">
                    <img className="summer-winter" alt="kcjvk" src={myImage2}></img>
                </div>
                <div className="picture">
                    <img className="summer-winter" alt="kcjvk" src={myImage3}></img>
                </div>
                <div className="picture">
                    <img className="summer-winter" alt="kcjvk" src={myImage4}></img>
                </div>
            </div>
            <div className="info-block">
                <div className="info-container1"><img className="summer-winter" alt="kcjvk" src={myImage1}></img>
                </div>
                <div className="info-container2">
                    <div className="inf-right1">
                        <h3 className="game-inf">О настольной игре</h3>
                        <p className="info-text">
                            "Лето и Зима" — веселая семейная игра, в которой игроки должны собрать как можно больше рядов
                            из карточек одного сезона, возрастающих по номеру. В то же время, можно помешать своим
                            соперникам
                            собрать ряд, используя карты оттепели и засухи.
                        </p>
                        <p className="info-text">
                            Цель игры - собрать как можно больше рядов или не дать соперникам сделать это. Вам потребуется
                            умение
                            принимать решения и предвидеть действия других игроков. Какую актику вы выберете?
                        </p>
                        <p className="info-text">
                            "Лето и Зима" - отличный способ развлечься в жаркие летние дни и уютные зимние вечера!
                        </p>
                    </div>
                    <div className="inf-right2">
                        <button style={{ width: "250px", height: "50px",}} onClick={() => navigate('/order')}><text style={{ fontSize: 24 }}>Купить</text></button>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <footer className="footer-screen1">
                    <p>© 2024 Зима и Лето. Все права защищены.</p>
                </footer>
            </div>
        </div>
    );
}

// Страница заказа
function Order() {

    const form = useRef();
  const [formData, setFormData] = React.useState({
    address: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async(e) => {
      console.log(formData);
      e.preventDefault();
      emailjs
          .sendForm('service_300vdgg', 'template_apnaihd', form.current, { publicKey: 'CU6pGX2YLX0LyHKYJ'})
          .then(
              () => {
                  console.log('SUCCESS!');
              },
              (error) => {
                  console.log('FAILED...', error.text);
              },
          );
      const response = await registration(formData.name, formData.email, formData.address, formData.phone);
      console.log(response);
      alert('Заказ оформлен! Мы свяжемся с вами.');
      console.log('Форма отправлена:', formData);
  };

    return (
        <div className="order">
            <div className="header1">
                <div className="link">
                    <nav className="nav-link">
                        <Link to="/"><ArrowLeft/></Link>
                    </nav>
                </div>
                <div className="game-name2">
                    <img src={myImage5} alt="ghfjkh"></img>
                </div>
            </div>

            <div className="making-order">
                <h1>
                    <text style={{fontSize: 25, color: "black"}}>Оформление заказа</text>
                </h1>
            </div>
            <form className="order-form" onSubmit={handleSubmit}>
                <div>
                    <label>Имя:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Адрес доставки:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Номер телефона:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Электронная почта:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="button-make-order">
                    <button type="submit">Оформить заказ</button>
                </div>
            </form>

            <footer className="footer-screen2">
                <p>© 2024 Зима и Лето. Все права защищены.</p>
            </footer>
        </div>
    );
}

// Основной компонент
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/order" element={<Order/>}/>
            </Routes>
        </Router>
    );
}

export default App;
