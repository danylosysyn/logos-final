import AnimatedBackground from "../AnimatedBackground/AnimatedBackground.jsx"
import {
    Schema,
    Form,
    ButtonToolbar,
    Button
}
    from "rsuite"
import "./LoginForm.modules.css"
import React from "react"
import { useDispatch, useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";

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
    const handleSubmit = () => {

        if (!formRef.current.check()) {
            console.error('Form Error');
            return;
        }
        dispatch({type: "LOGIN_TRUE"})
        navigate("../admin")
        console.log(formValue, 'Form Value');
    };

    const handleCheckEmail = () => {
        formRef.current.checkForField('email', checkResult => {
            console.log(checkResult);
        });
    };

    return (
        <Form model={model} ref={formRef} id="formDiv" onChange={setFormValue} onCheck={setFormError} formValue={formValue}>
            <TextField name="name" label="Username" className="formDivElement" />
            <TextField name="email" label="Email" className="formDivElement" />
            <TextField name="password" label="Password" type="password" autoComplete="off" className="formDivElement" />
            <TextField
                name="verifyPassword"
                label="Verify password"
                type="password"
                autoComplete="off"
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