import React from "react";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from "../Utils/validators";
import { Input } from "../Utils/formControls/formControls";

let maxLength10 = maxLengthCreator(10)

let LoginForm = props => {
    const { handleSubmit } = props;
    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="login" component={Input} type="text" validate={[required, maxLength10]} />
                </div>
                <div>
                    <Field name="password" component={Input} type="text" validate={[required, maxLength10]}/>
                </div>
                <div>
                    <Field name="rememberMe" component={Input} type="checkbox" validate={[required, maxLength10]}/>
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