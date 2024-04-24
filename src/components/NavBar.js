import React, { useContext } from "react";
import { Context } from "../index";
import { NavLink } from "react-router-dom";
import { MAIN_ROUTE, SPECIAL_ROUTE, CATEGORIES_ROUTE } from "../utils/consts";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import CartModal from "./modals/CartModal";
import "../components/NavBarStyles.css";
import { ReactComponent as Mail } from "../components/icons/mail.svg";
import { ReactComponent as Telegram } from "../components/icons/telegram.svg";
import { ReactComponent as Whatsapp } from "../components/icons/whatsapp.svg";
import { ReactComponent as Viber } from "../components/icons/viber.svg";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    // <div>
    //   <Navbar bg="primary">
    //     <Container>
    //       <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
    //         Roll-tex market
    //       </NavLink>
    //       <CartModal />
    //       {user.isAuth ? (
    //         <Nav className="ml-auto" style={{ color: "white" }}>
    //           <Button
    //             variant={"outline-light"}
    //             onClick={() => navigate(ADMIN_ROUTE)}
    //           >
    //             Админ панель
    //           </Button>
    //           <Button
    //             variant={"outline-light"}
    //             onClick={() => logOut()}
    //             className="ms-2"
    //           >
    //             Выйти
    //           </Button>
    //         </Nav>
    //       ) : (
    //         <Nav className="ml-auto" style={{ color: "white" }}>
    //           <Button
    //             variant={"outline-light"}
    //             onClick={() => navigate(LOGIN_ROUTE)}
    //           >
    //             Авторизация
    //           </Button>
    //         </Nav>
    //       )}
    //     </Container>
    //   </Navbar>
    // </div>
    <div className="content">
      <nav className="sticky-navbar">
        <ul className="stickyLeft">
          <li>
            <NavLink to={MAIN_ROUTE}>Главная</NavLink>
          </li>
          <li>
            <NavLink to={CATEGORIES_ROUTE}>Каталог</NavLink>
          </li>
          <li>
            <NavLink to={SPECIAL_ROUTE}>Связаться с нами</NavLink>
          </li>
        </ul>
        <ul className="stickyRight">
          <li>
            <CartModal />
          </li>
          <li className="contact-icon">
            <Mail />
          </li>
          <li className="contact-icon">
            <Telegram />
          </li>
          <li className="contact-icon">
            <Whatsapp />
          </li>
          <li className="contact-icon">
            <Viber />
          </li>
          <li className="phone">
            <a href="tel:+79673506321">+7 (967) 350-63-21</a>
          </li>
        </ul>
      </nav>
    </div>
  );
});

export default NavBar;
