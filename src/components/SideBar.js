import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate
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
import { MAIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { NavLink } from "react-router-dom";
import { Context } from "../index";

const SideBar = () => {
  const { device } = useContext(Context);
  const navigate = useNavigate(); // Используем хук useNavigate

  const handleSelectCategory = (categoryName) => {
    // Ищем тип по имени, а не по type
    const selectedType = device.types.find((t) => t.name === categoryName);
    device.setSelectedType(selectedType);
    navigate(SHOP_ROUTE); // Программный переход на страницу магазина
  };

  const categories = [
    { name: "Преобразователи частоты", icon: Pc },
    { name: "Панели оператора", icon: Tv },
    { name: "Программируемые контроллеры", icon: Mb },
    { name: "Датчики", icon: Sensor },
    { name: "Энкодеры", icon: Tach },
    { name: "Электромагнитные тормоза", icon: Brake },
    { name: "Мотор-редукторы", icon: Engine },
    { name: "Валы", icon: Resistor },
  ];

  return (
    <div>
      <header>
        <div className="navbarCustom">
          <NavLink to={MAIN_ROUTE}>
            <div className="navbarCustomLogo">
              <img src={Logo} alt="Logo" />
            </div>
          </NavLink>
          <ul>
            {categories.map((category) => (
              <li
                key={category.name} // Используем name в качестве ключа
                className="navbarListItem"
                onClick={() => handleSelectCategory(category.name)} // Передаем имя категории
              >
                <img src={category.icon} alt={category.name} />
                <span>{category.name}</span>{" "}
                {/* Используем span для сохранения стилей */}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default SideBar;
