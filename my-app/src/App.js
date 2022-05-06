import './App.css';
import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import LoginForm from './components/LoginForm/LoginForm';
import AdminForm from './components/AdminForm/AdminForm';
import { RouteConst } from './common/RouteConst';

function App() {
  return (
    <div className="App">
      <div>
        <ul>
          <li>
            <Link to={RouteConst.MAIN_PAGE}>Main</Link>
          </li>
          <li>
            <Link to={RouteConst.LOGIN_FORM}>Login</Link>
          </li>
          <li>
            <Link to={RouteConst.ADMIN_PAGE}>Admin</Link>
          </li>
        </ul>
        
        <Routes>
          <Route exact path={RouteConst.MAIN_PAGE} element={<MainPage />}></Route>
          <Route path={RouteConst.LOGIN_FORM} element={<LoginForm />}></Route>
          <Route path={RouteConst.ADMIN_PAGE} element={<AdminForm />}></Route>
        </Routes>
      </div>
    </div>
  );
}


const AppContainer = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppContainer