import AnimatedBackground from "../AnimatedBackground/AnimatedBackground.jsx"
import {
    Schema,
    Form,
    ButtonToolbar,
    Button,
}
    from "rsuite"
import "./LoginForm.modules.css"
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
            console.log(data);

            if (value !== data.password) {
                return false;
            }

            return true;
        }, 'The two passwords do not match')
        .isRequired('This field is required.')
});

function TextField(props) {
    const { name, label, accepter, ...rest } = props;
    return (
        <Form.Group controlId={`${name}-3`}>
            <Form.ControlLabel>{label} </Form.ControlLabel>
            <Form.Control name={name} accepter={accepter} {...rest} />
        </Form.Group>
    );
}

const LoginFormElements = () => {
    return (
        <Form model={model} id="formDiv">
            <TextField name="name" label="Username" className="formDivElement"/>
            <TextField name="email" label="Email" className="formDivElement"/>
            <TextField name="password" label="Password" type="password" autoComplete="off" className="formDivElement"/>
            <TextField
                name="verifyPassword"
                label="Verify password"
                type="password"
                autoComplete="off"
                className="formDivElement"
            />
            <ButtonToolbar>
                <Button appearance="primary" size="lg" type="submit" id="submitButton">
                    Submit
                </Button>
            </ButtonToolbar>
        </Form>
    )
}