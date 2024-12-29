import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import emailjs from '@emailjs/browser';
import {registration} from "./http/userAPI";

// Главная страница
function Home() {
  const navigate = useNavigate();

  return (
      <div className="home">
        <header className="header">
          <h1>Зима и Лето</h1>
          <nav>
            <Link to="/">Главная</Link>
          </nav>
        </header>

        <div className="banner">
          <h2>Добро пожаловать в мир Зимы и Лета!</h2>
        </div>

        <div className="info-block">
          <h3>О настольной игре</h3>
          <p>
            "Зима и Лето" — это увлекательная настольная игра для всей семьи.
            Погрузитесь в сезонные приключения и испытайте дух соревнования!
          </p>
          <button onClick={() => navigate('/order')}>Купить</button>
        </div>

        <footer className="footer">
          <p>© 2024 Зима и Лето. Все права защищены.</p>
        </footer>
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
      const response = await registration(formData.email, formData.address, formData.phone);
      console.log(response);
      alert('Заказ оформлен! Мы свяжемся с вами.');
      console.log('Форма отправлена:', formData);
  };

  return (
      <div className="order">
          <header className="header">
              <h1>Оформление заказа</h1>
              <nav>
                  <Link to="/">Главная</Link>
              </nav>
          </header>
          <form ref = {form} className="order-form" onSubmit={handleSubmit}>
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
            <button type="submit">Оформить заказ</button>
          </form>

          <footer className="footer">
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
