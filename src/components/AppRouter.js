import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import {Context} from '../index'

const AppRouter = () => {
  const { user } = useContext(Context);
  return (
    <Routes>
      {user.isAuth === true &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;

// В новых версиях React Router немного изменилась документация.
//Switch (в файле по пути components/AppRoutes из урока) заменить на => 'Routes'.
//Так же 'Components' (в строке Route) заменить на => 'element'.
// Эта строка должна выглядеть так: "<Route key={path} path={path} element={<Component/>} exact/>"
//Так же для "Redirect". Его в новой версии не импортируем.
// строка, там где в старой версии писали "Redirect" работает с таким изменением: <Route path="*" element={<Navigate to="/" />} />
