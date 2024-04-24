import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./CategoriesStyles.css";
import { Context } from "../index";
import Pc from "../components/icons/pc-svgrepo-com.svg";
import Tv from "../components/icons/screen-tv-svgrepo-com.svg";
import Mb from "../components/icons/motherboard-svgrepo-com.svg";
import Sensor from "../components/icons/sensor_8n97fl2ofjry.svg";
import Tach from "../components/icons/tachometer-fast-alt-svgrepo-com.svg";
import Brake from "../components/icons/brake-pads-svgrepo-com.svg";
import Engine from "../components/icons/engine-motor-svgrepo-com.svg";
import Resistor from "../components/icons/resistor-svgrepo-com.svg";
import { SHOP_ROUTE } from "../utils/consts";
import Footer from "../components/Footer";

const Categories = () => {
  const { device } = useContext(Context);
  const navigate = useNavigate();

  const categories = [
    {
      name: "Преобразователи частоты",
      icon: Pc,
      description:
        "Преобразователь частоты является важным оборудованием в промышленной электронике, предназначенным для управления скоростью и частотой вращения электродвигателей. Он позволяет эффективно регулировать скорость механизмов и оборудования, что обеспечивает гибкость и оптимизацию процессов в различных отраслях промышленности.",
    },
    {
      name: "Панели оператора",
      icon: Tv,
      description:
        "Незаменимый инструмент для операторов и инженеров, который позволяет им контролировать и управлять различными процессами и системами в реальном времени. Они обеспечивают эффективное и надежное управление, что способствует повышению производительности и безопасности работы в широком спектре отраслей.",
    },
    {
      name: "Программируемые контроллеры",
      icon: Mb,
      description:
        "ПЛК контроллеры широко используются в различных отраслях, включая промышленность, энергетику, автомобильный и производственный сектор. Они обеспечивают надежность, гибкость и эффективность управления автоматизированными системами, что позволяет повысить производительность и оптимизировать процессы работы.",
    },
    {
      name: "Датчики",
      icon: Sensor,
      description:
        "Незаменимые инструменты для многих производств. Они позволяют собирать и анализировать данные, контролировать процессы и использовать эти данные для принятия решений. Благодаря им, возможна автоматизация, оптимизация и улучшение производительности в различных областях.",
    },
    {
      name: "Энкодеры",
      icon: Tach,
      description:
        "Обычно представляет собой физическое устройство, которое может быть использовано в различных областях, таких как робототехника, автоматизация производства, контроллеры и другие приложения, где требуется точное измерение, отслеживание или управление позицией, скоростью или углом.",
    },
    {
      name: "Электромагнитные тормоза",
      icon: Brake,
      description:
        "Электромагнитные тормоза широко применяются в различных областях, включая текстильную промышленность, станочное оборудование, подъемные механизмы, транспортные системы и другие приложения, где требуется точное и надежное торможение и удержание механизма.",
    },
    {
      name: "Мотор-редукторы",
      icon: Engine,
      description:
        "Мотор-редуктор является надежным и эффективным устройством, которое обеспечивает приводную систему с необходимыми характеристиками для оптимального функционирования. Благодаря своей универсальности и простоте использования, он пользуется широким спросом во многих отраслях и секторах промышленности.",
    },
    {
      name: "Валы",
      icon: Resistor,
      description:
        "Валы доступны в различных размерах, диаметрах и длинах, чтобы соответствовать требованиям конкретного механизма или устройства. Изготавливаем пневмовалы, банановые валы индивидуально по вашим размерам.",
    },
  ];

  const handleSelectCategory = (categoryName) => {
    const selectedType = device.types.find((t) => t.name === categoryName);
    device.setSelectedType(selectedType);
    navigate(SHOP_ROUTE);
  };

  return (
    <>
      <div className="container-cat">
        {categories.map((category) => (
          <div
            className="card-cat"
            key={category.name}
            onClick={() => handleSelectCategory(category.name)}
          >
            <div className="face face1">
              <div className="content-cat">
                <img src={category.icon} alt={category.name} />
                <h3>{category.name}</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content-cat">
                <p>{category.description}</p>
                <a
                  className="link"
                  onClick={() => handleSelectCategory(category.name)}
                >
                  Подробнее
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default Categories;
