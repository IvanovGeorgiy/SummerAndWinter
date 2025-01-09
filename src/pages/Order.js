import React from "react";
import {registration} from "../http/userAPI";
import {Link} from "react-router-dom";
import {ArrowLeft} from "react-bootstrap-icons";
import myImage5 from "../images/logo.png";
import './styles/Order.css';

export function Order() {
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
        // emailjs
        //     .sendForm('service_300vdgg', 'template_apnaihd', form.current, { publicKey: 'CU6pGX2YLX0LyHKYJ'})
        //     .then(
        //         () => {
        //             console.log('SUCCESS!');
        //         },
        //         (error) => {
        //             console.log('FAILED...', error.text);
        //         },
        //     );
        const response = await registration(formData.name, formData.email, formData.address, formData.phone);
        console.log(response);
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