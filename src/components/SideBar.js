import React from "react";
import "../components/SideBarStyles.css";
import Logo from "./icons/logo.svg";
import Pc from "./icons/pc-svgrepo-com.svg";
import Tv from "./icons/screen-tv-svgrepo-com.svg";
import Mb from "./icons/motherboard-svgrepo-com.svg";
import Sensor from "./icons/sensor_8n97fl2ofjry.svg";
import Tach from "./icons/tachometer-fast-alt-svgrepo-com.svg";
import Brake from "./icons/brake-pads-svgrepo-com.svg";
import Engine from "./icons/engine-motor-svgrepo-com.svg";
import Resistor from "./icons/resistor-svgrepo-com.svg";

const SideBar = () => {
  return (
    <div>
      <header>
        <div className="navbarCustom">
          <div className="navbarCustomLogo">
            <a href="index.html">
              <img src={Logo} alt="" />
            </a>
          </div>
          <ul>
            <li className="navbarListItem">
              <img src={Pc} alt="" />
              <a href="">Преобразователи частоты</a>
            </li>
            <li className="navbarListItem">
              <img src={Tv} alt="" />
              <a href="">Панели оператора</a>
            </li>
            <li className="navbarListItem">
              <img src={Mb} alt="" />
              <a href="">Программируемые контроллеры</a>
            </li>
            <li className="navbarListItem">
              <img src={Sensor} alt="" />
              <a href="">Датчики</a>
            </li>
            <li className="navbarListItem">
              <img src={Tach} alt="" />
              <a href="">Энкодеры</a>
            </li>
            <li className="navbarListItem">
              <img src={Brake} alt="" />
              <a href="">Электромагнитные тормоза</a>
            </li>
            <li className="navbarListItem">
              <img src={Engine} alt="" />
              <a href="">Мотор-редукторы</a>
            </li>
            <li className="navbarListItem">
              <img src={Resistor} alt="" />
              <a href="">Валы</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default SideBar;
