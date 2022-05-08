import './App.css';
import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
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


function App() {
  return (
    <div className="App">
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href={RouteConst.MAIN_PAGE}><b>My CV</b></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href={RouteConst.LOGIN_FORM}>Login</Nav.Link>
              <Nav.Link href={RouteConst.ADMIN_PAGE}>Admin</Nav.Link>
            </Nav>
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
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppContainer