import Admin from "./pages/Admin";
import {
  ADMIN_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  SPECIAL_ROUTE,
  CATEGORIES_ROUTE,
} from "./utils/consts";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import MainPage from "./pages/MainPage";
import SpecialOrder from "./pages/SpecialOrder";
import Categories from "./pages/Categories";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    Component: DevicePage,
  },
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    path: SPECIAL_ROUTE,
    Component: SpecialOrder,
  },
  {
    path: CATEGORIES_ROUTE,
    Component: Categories,
  },
];
