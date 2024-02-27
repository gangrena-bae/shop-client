import React from "react";
import "./CategoriesStyles.css";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  SHOP_ROUTE,
  SPECIAL_ROUTE,
} from "../utils/consts";
import { NavLink } from "react-router-dom";
import Pc from "../components/icons/pc-svgrepo-com.svg";
import Tv from "../components/icons/screen-tv-svgrepo-com.svg";
import Mb from "../components/icons/motherboard-svgrepo-com.svg";
import Sensor from "../components/icons/sensor_8n97fl2ofjry.svg";
import Tach from "../components/icons/tachometer-fast-alt-svgrepo-com.svg";
import Brake from "../components/icons/brake-pads-svgrepo-com.svg";
import Engine from "../components/icons/engine-motor-svgrepo-com.svg";
import Resistor from "../components/icons/resistor-svgrepo-com.svg";

const Categories = () => {
  return (
    <div className="container-cat">
      <div className="card-cat">
        <div className="face face1">
          <div className="content-cat">
            <img src={Pc} />
            <h3>
              Преобразователи
              <br />
              частоты
            </h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content-cat">
            <p>
              Преобразователь частоты является важным оборудованием в
              промышленной электронике, предназначенным для управления скоростью
              и частотой вращения электродвигателей. Он позволяет эффективно
              регулировать скорость механизмов и оборудования, что обеспечивает
              гибкость и оптимизацию процессов в различных отраслях
              промышленности.
            </p>
            <NavLink to={SHOP_ROUTE}>Каталог</NavLink>
          </div>
        </div>
      </div>
      <div className="card-cat">
        <div className="face face1">
          <div className="content-cat">
            <img src={Tv} />
            <h3>Панели оператора</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content-cat">
            <p>
              Незаменимый инструмент для операторов и инженеров, который
              позволяет им контролировать и управлять различными процессами и
              системами в реальном времени. Они обеспечивают эффективное и
              надежное управление, что способствует повышению производительности
              и безопасности работы в широком спектре отраслей.
            </p>
            <NavLink to={SHOP_ROUTE}>Каталог</NavLink>
          </div>
        </div>
      </div>
      <div className="card-cat">
        <div className="face face1">
          <div className="content-cat">
            <img src={Mb} />
            <h3>Программируемые контроллеры</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content-cat">
            <p>
              ПЛК контроллеры широко используются в различных отраслях, включая
              промышленность, энергетику, автомобильный и производственный
              сектор. Они обеспечивают надежность, гибкость и эффективность
              управления автоматизированными системами, что позволяет повысить
              производительность и оптимизировать процессы работы.
            </p>
            <NavLink to={SHOP_ROUTE}>Каталог</NavLink>
          </div>
        </div>
      </div>
      <div className="card-cat">
        <div className="face face1">
          <div className="content-cat">
            <img src={Sensor} />
            <h3>Датчики</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content-cat">
            <p>
              Незаменимые инструменты для многих производств. Они позволяют
              собирать и анализировать данные, контролировать процессы и
              использовать эти данные для принятия решений. Благодаря им,
              возможна автоматизация, оптимизация и улучшение производительности
              в различных областях.
            </p>
            <NavLink to={SHOP_ROUTE}>Каталог</NavLink>
          </div>
        </div>
      </div>
      <div className="card-cat">
        <div className="face face1">
          <div className="content-cat">
            <img src={Tach} />
            <h3>Энкодеры</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content-cat">
            <p>
              Обычно представляет собой физическое устройство, которое может
              быть использовано в различных областях, таких как робототехника,
              автоматизация производства, контроллеры и другие приложения, где
              требуется точное измерение, отслеживание или управление позицией,
              скоростью или углом.
            </p>
            <NavLink to={SHOP_ROUTE}>Каталог</NavLink>
          </div>
        </div>
      </div>
      <div className="card-cat">
        <div className="face face1">
          <div className="content-cat">
            <img src={Brake} />
            <h3>Электромагнитные тормоза</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content-cat">
            <p>
              Электромагнитные тормоза широко применяются в различных областях,
              включая текстильную промышленность, станочное оборудование,
              подъемные механизмы, транспортные системы и другие приложения, где
              требуется точное и надежное торможение и удержание механизма.
            </p>
            <NavLink to={SHOP_ROUTE}>Каталог</NavLink>
          </div>
        </div>
      </div>
      <div className="card-cat">
        <div className="face face1">
          <div className="content-cat">
            <img src={Engine} />
            <h3>Мотор-редукторы</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content-cat">
            <p>
              Мотор-редуктор является надежным и эффективным устройством,
              которое обеспечивает приводную систему с необходимыми
              характеристиками для оптимального функционирования. Благодаря
              своей универсальности и простоте использования, он пользуется
              широким спросом во многих отраслях и секторах промышленности.
            </p>
            <NavLink to={SHOP_ROUTE}>Каталог</NavLink>
          </div>
        </div>
      </div>
      <div className="card-cat">
        <div className="face face1">
          <div className="content-cat">
            <img src={Resistor} />
            <h3>Каталог</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content-cat">
            <p>
              Валы доступны в различных размерах, диаметрах и длинах, чтобы
              соответствовать требованиям конкретного механизма или устройства.
              Изготавливаем пневмовалы, банановые валы индивидуально по вашим
              размерам
            </p>
            <NavLink to={SHOP_ROUTE}>Каталог</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
