import React from "react";
import { reduxForm, Field } from "redux-form";

let LoginForm = props => {
    const { handleSubmit } = props;
    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="login" component="input" type="text" />
                </div>
                <div>
                    <Field name="password" component="input" type="text" />
                </div>
                <div>
                    <Field name="rememberMe" component="input" type="checkbox" />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
    )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export const Login = () => {
    let onSubmit = values => {
        console.log(values)
    }
    return(
        <>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}