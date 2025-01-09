import {useNavigate} from "react-router-dom";
import myImage5 from "../images/logo.png";
import myImage1 from "../images/img1.jpg";
import myImage2 from "../images/img2.jpg";
import myImage3 from "../images/img3.jpg";
import myImage4 from "../images/img4.jpg";
import React from "react";
import './styles/Home.css'
export function Home() {
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
