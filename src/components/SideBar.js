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
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  SHOP_ROUTE,
  SPECIAL_ROUTE,
} from "../utils/consts";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <header>
        <div className="navbarCustom">
          <div className="navbarCustomLogo">
            <img src={Logo} alt="" />
          </div>
          <ul>
            <li className="navbarListItem">
              <img src={Pc} alt="" />
              <NavLink to={SHOP_ROUTE}>Преобразователи частоты</NavLink>
            </li>
            <li className="navbarListItem">
              <img src={Tv} alt="" />
              <NavLink to={SHOP_ROUTE}>Панели оператора</NavLink>
            </li>
            <li className="navbarListItem">
              <img src={Mb} alt="" />
              <NavLink to={SHOP_ROUTE}>Программируемые контроллеры</NavLink>
            </li>
            <li className="navbarListItem">
              <img src={Sensor} alt="" />
              <NavLink to={SHOP_ROUTE}>Датчики</NavLink>
            </li>
            <li className="navbarListItem">
              <img src={Tach} alt="" />
              <NavLink to={SHOP_ROUTE}>Энкодеры</NavLink>
            </li>
            <li className="navbarListItem">
              <img src={Brake} alt="" />
              <NavLink to={SHOP_ROUTE}>Электромагнитные тормоза</NavLink>
            </li>
            <li className="navbarListItem">
              <img src={Engine} alt="" />
              <NavLink to={SHOP_ROUTE}>Мотор-редукторы</NavLink>
            </li>
            <li className="navbarListItem">
              <img src={Resistor} alt="" />
              <NavLink to={SHOP_ROUTE}>Валы</NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default SideBar;
