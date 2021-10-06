import React from "react";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from "../Utils/validators";
import { Input } from "../Utils/formControls/formControls";
import { Redirect } from "react-router";

let maxLength20 = maxLengthCreator(30)

let LoginForm = props => {
    const { handleSubmit } = props;
    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="email" component={Input} type="text" validate={[required, maxLength20]} />
                </div>
                <div>
                    <Field name="password" component={Input} type="text" validate={[required, maxLength20]}/>
                </div>
                <div>
                    <Field name="rememberMe" component={Input} type="checkbox" validate={[required]}/>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
    )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export const Login = (props) => {
    
    let onSubmit = formData => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        
        <>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}