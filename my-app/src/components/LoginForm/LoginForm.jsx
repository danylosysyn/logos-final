import AnimatedBackground from "../AnimatedBackground/AnimatedBackground.jsx"
import {
    Schema,
    Form,
    ButtonToolbar,
    Button
}
    from "rsuite"
import "./LoginForm.modules.css"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useLocation } from "react-router-dom";
import { getInfo } from "../../redux/actions/infoActions.js"
import { selectInfo } from "../../redux/selectors/selectInfo.js"
import { updateDoc } from "firebase/firestore";
import { docRef } from "../../firebase/firebase.js"
import { useAuth } from "../hoc/useAuth.js"

const LoginForm = () => {
    return (
        <div>
            <AnimatedBackground content={<LoginFormElements />} />
        </div>
    )
}

export default LoginForm

const { StringType, NumberType } = Schema.Types;
const model = Schema.Model({
    name: StringType().isRequired('This field is required.'),
    email: StringType()
        .isEmail('Please enter a valid email address.')
        .isRequired('This field is required.'),
    password: StringType().isRequired('This field is required.'),
    verifyPassword: StringType()
        .addRule((value, data) => {
            if (value !== data.password) {
                return false;
            }

            return true;
        }, 'The two passwords do not match')
        .isRequired('This field is required.')
});

const TextField = React.forwardRef((props, ref) => {
    const { name, label, accepter, ...rest } = props;
    return (
        <Form.Group controlId={`${name}-4`} ref={ref}>
            <Form.ControlLabel>{label} </Form.ControlLabel>
            <Form.Control name={name} accepter={accepter} {...rest} />
        </Form.Group>
    );
});

const LoginFormElements = () => {
    const formRef = React.useRef();
    const [formError, setFormError] = React.useState({});
    const [formValue, setFormValue] = React.useState({
        name: "",
        email: '',
        password: '',
        verifyPassword: ''
    });

    const dispatch = useDispatch();
    const logInfo = useSelector(state => state.isLogged)
    let navigate = useNavigate()
    const getInfoThunk = () => dispatch(getInfo());
    useEffect(() => {
        getInfoThunk();
    }, []);
    const info = useSelector(selectInfo);
    let isLogged = info?.isLogged;
    useEffect(() => {
        isLogged = info?.isLogged;
    }, [info]);
    const handleSubmit = () => {
        if (!formRef.current.check()) {
            console.error('Form Error');
            return;
        }
        updateDoc(docRef, {
            isLogged: true
        })
            .then(() => {
                signIn(formValue.name, () => navigate("../admin", {replace: true}))
                //navigate("../admin")
            })

        // dispatch({type: "LOGIN_TRUE"})
        // navigate("../admin")
        // console.log(formValue, 'Form Value');
    };

    const handleCheckEmail = () => {
        formRef.current.checkForField('email', checkResult => {
            console.log(checkResult);
        });
    };

    const location = useLocation();
    const formPage = location.state?.from?.pathname || "/"
    const { signIn } = useAuth();
    return (
        <Form model={model} ref={formRef} id="formDiv" onChange={setFormValue} onCheck={setFormError} formValue={formValue} autoComplete="off">
            <TextField name="name" label="Username" className="formDivElement" />
            <TextField name="email" label="Email" className="formDivElement" />
            <TextField name="password" label="Password" type="password" autoComplete="off" className="formDivElement" />
            <TextField
                name="verifyPassword"
                label="Verify password"
                type="password"
                //autoComplete="off"
                className="formDivElement"
            />
            <ButtonToolbar>
                <Button appearance="primary" size="lg" type="submit" id="submitButton" onClick={handleSubmit}>
                    Submit
                </Button>
            </ButtonToolbar>
        </Form>
    )
}