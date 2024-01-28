export const ADMIN_ROUTE = '/admin'
export const LOGIN_ROUTE = '/login'
export const REGISTRATION_ROUTE = '/registration'
export const SHOP_ROUTE = '/'
export const BASKET_ROUTE = '/basket'
export const DEVICE_ROUTE = '/device'



// Во вкладке DeviceItem.js в новой версии react-router-dom v6 хук useHistory  заменён  на useNavigate :
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();
// onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)} 