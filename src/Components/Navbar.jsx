import React from "react";
import "./navbar.css";
import rasm1 from "./img/rasm1.svg";
import rasm2 from "./img/rasm2.svg";
import logo from "./img/logo.svg";
import rasm3 from "./img/rasm3.svg";
import rasm4 from "./img/rasm4.svg";
import rasm5 from "./img/rasm5.svg";
import rasm6 from "./img/rasm6.svg";
import rasm7 from "./img/rasm7.svg";
import rasm8 from "./img/rasm8.svg";
import rasm9 from "./img/rasm9.svg";
import rasm10 from "./img/rasm10.svg";
import rasm11 from "./img/rasm11.svg";
import rasm12 from "./img/rasm12.svg";
import rasm13 from "./img/rasm13.svg";
import rasm14 from "./img/rasm14.svg";
import rasm15 from "./img/rasm15.svg";
import rasm16 from "./img/rasm16.svg";
import rasm17 from "./img/rasm17.svg";
import rasm18 from "./img/rasm18.svg";
import rasm19 from "./img/rasm19.svg";
import rasm20 from "./img/rasm20.svg";
import rasm21 from "./img/rasm21.svg";
import rasm22 from "./img/rasm22.svg";
import rasm23 from "./img/rasm23.svg";
import rasm24 from "./img/rasm24.svg";
import rasm25 from "./img/rasm25.svg";
import rasm26 from "./img/rasm26.svg";
import rasm27 from "./img/rasm27.svg";
import img1 from "./img2/img1.svg";
import img2 from "./img2/img2.svg";
import img3 from "./img2/img3.svg";
import img4 from "./img2/img4.svg";

const Navbar = () => {
  const contentImages = [rasm2, rasm13, rasm15, rasm17, rasm22, rasm23, rasm24, rasm26, rasm27, img1, img2, img3];
  const iconImages = [rasm12, rasm14, rasm16, rasm18, rasm14, rasm19, rasm19];

  return (
    <div className="app">
      <div className="sidebar">
        <div className="logo">
        { <div className="conatainer">
      <input type="text"placeholder="Ara" className="search"/>
      </div>}
          <img src={logo} alt="Logo 2" className="logo-secondary" />
          <img src={rasm1} alt="Logo 1" className="logo-image" />
        </div>
        <ul className="menu">
          <li>
            <img src={rasm3} alt="" />
            Anasayfa
          </li>
          <li>
            <img src={rasm4} alt="" />
            Keşfet
          </li>
          <li>
            <img src={rasm5} alt="" />
            Abonelikler
          </li>
          <li>
            <img src={rasm6} alt="" />
            Kitaplık
          </li>
          <li>
            <img src={rasm7} alt="" />
            Geçmiş
          </li>
          <li>
            <img src={rasm8} alt="" />
            Videolarınız
          </li>
          <li>
            <img src={rasm9} alt="" />
            Daha sonra izle
          </li>
          <li>
            <img src={rasm10} alt="" />
            Beğendiğim videolar
          </li>
          <li>
            <img src={rasm11} alt="" />
            Daha fazla göster
          </li>
          <li></li>
          <li>ABONELİKLER</li>
          <li>
            <img src={rasm12} alt="" />
            The game
          </li>
          <li>
            <img src={rasm14} alt="" />
            Lean Yo
          </li>
          <li>
            <img src={rasm16} alt="" />
            Best Kuaför
          </li>
          <li>
            <img src={rasm18} alt="" />
            Meyau Seu
          </li>
          <li>
            <img src={rasm19} alt="" />
            Discover Design
          </li>
          <li>
            <img src={rasm20} alt="" />
            Build Game
          </li>
          <li>
            <img src={rasm21} alt="" />
            Vlogger Man
          </li>
          <li>
            <img src={rasm11} alt="" />
            Daha fazla göster
          </li>
          <li></li>
          <li>YOUTUBE’DEN DAHA FAZLA İÇERİK</li>
          <li>
            <img src={rasm25} alt="" />
            Youtube Premium
          </li>
        </ul>
      </div>
      <div className="main">
        <div className="navbar"> 
          <button className="nav-link active">Kino</button>
          <button className="nav-link">Comedy</button>
          <button className="nav-link">Mix</button>
          <button className="nav-link">Cartoons</button>
          <button className="nav-link">Muzik</button>
          <button className="nav-link">Futbol</button>
          <button className="nav-link">El sanatları</button>
          <button className="nav-link">UX Tasarım</button>
          <button className="nav-link">Animasyon</button>
          <button className="nav-link">Görsel sanatlar</button>
          <button className="nav-link">Son yüklenenler</button>
        </div>
        <div className="content">
          {contentImages.map((img, index) => (
            <div className="card" key={index}>
              <img src={img} alt={`rasm-${index}`} className="card-image" />
              <div className="card-text">
                <h3>
                  {index < contentImages.length - 4 && (
                    <img
                      src={iconImages[index % iconImages.length]}
                      alt="Icon"
                      className="icon-image"
                    />
                  )}
                  Lorem Ipsum is simply dummy text of the printing
                </h3>
                <p>
                  LOREM IPSUM <br />
                  156 Görüntüleme · 4 Dakika önce
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;


