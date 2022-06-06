import './App.css';
import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Link,
} from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import LoginForm from './components/LoginForm/LoginForm';
import AdminForm from './components/AdminForm/AdminForm';
import { RouteConst } from './common/RouteConst';
import {
  Navbar,
  Container,
  Nav
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from "redux";
import { UserInfo } from './components/MainPage/MainPage';
import { Provider, useSelector } from 'react-redux';
import "./firebase/firebase"
import thunk from "redux-thunk"

const defaultInfo = {
  name: "Name",
  surname: "Surname",
  city: "City",
  country: "Country",
  job: "Job",
  extraInfo: "Here is my CV",
  isLogged: false,
}

const userReducer = (state = defaultInfo, action) => {
  switch (action.type) {
    case "LOGIN_TRUE":
      return { ...state, isLogged: true }
    case "SET_DATA":
      return { ...state, info: action.info}
    default:
      return state
  }
}

export const store = createStore(userReducer, applyMiddleware(thunk))

function App() {
  let navigate = useNavigate()
  const logInfo = useSelector(state => state.isLogged)
  return (
    <div className="App">
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href={RouteConst.MAIN_PAGE}><b>My CV</b></Navbar.Brand>
            <Nav className="me-auto">
              <Link to={RouteConst.LOGIN_FORM}>Login</Link>
              <Link to={RouteConst.ADMIN_PAGE}>Admin</Link>
              {logInfo ? <Link to={RouteConst.ADMIN_PAGE}>Admin</Link> : <Link to={RouteConst.LOGIN_FORM}>Login</Link>}            </Nav>
          </Container>
        </Navbar>

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
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default AppContainer
