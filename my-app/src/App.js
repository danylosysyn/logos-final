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
  Nav,
  Button
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider, useSelector, useDispatch } from 'react-redux';
import "./firebase/firebase"
import { store } from './redux/reducers/userReducer';
import { getInfo } from './redux/actions/infoActions';
import { selectInfo } from './redux/selectors/selectInfo';
import { updateDoc } from 'firebase/firestore';
import { docRef } from './firebase/firebase';
import { RequireAuth } from "./components/hoc/RequireAuth"
import { AuthProvider } from './components/hoc/AuthProvider';

function App() {
  let navigate = useNavigate()
  const dispatch = useDispatch();
  const getInfoThunk = () => dispatch(getInfo());
  useEffect(() => {
    getInfoThunk();
  }, []);
  const info = useSelector(selectInfo);
  let logInfo = info?.isLogged;
  useEffect(() => {
    logInfo = info?.isLogged;
  }, [info]);
  const logOutClickHandler = () => {
    updateDoc(docRef, {
      isLogged: false
    })
      .then(() => {
        navigate("../login")
      })
  }

  return (
    <div className="App">
      <div>
        <Navbar bg="light" variant="light">
          <Container style={{backgroundColor: "#ff4040", borderRadius: "10px", padding: "0px 20px"}}>
            <Navbar.Brand href={RouteConst.MAIN_PAGE}><b>My CV</b></Navbar.Brand>
            <Nav className="me-auto">
              {logInfo ? <Link to={RouteConst.ADMIN_PAGE}>Admin</Link> : <Link to={RouteConst.LOGIN_FORM}>Login</Link>}
            </Nav>
            {logInfo ? <Button variant="danger" onClick={logOutClickHandler}>Log out</Button> : <></>}
          </Container>
        </Navbar>

        <AuthProvider>
          <Routes>
            <Route exact path={RouteConst.MAIN_PAGE} element={<MainPage />}></Route>
            <Route path={RouteConst.LOGIN_FORM} element={<LoginForm />}></Route>
            {/* <Route path={RouteConst.ADMIN_PAGE} element={<AdminForm />}></Route> */}
            <Route path={RouteConst.ADMIN_PAGE} element={
              <RequireAuth>
                <AdminForm />
              </RequireAuth>
            } />
          </Routes>
        </AuthProvider>
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
