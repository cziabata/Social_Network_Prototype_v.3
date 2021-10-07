import React from "react";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from "../Utils/validators";
import { Input } from "../Utils/formControls/formControls";
import { Redirect } from "react-router";
import styles from "../Utils/formControls/formControls.module.scss";

let maxLength20 = maxLengthCreator(30)

let LoginForm = props => {
    const { handleSubmit } = props;
    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <span>Email:</span><Field name="email" component={Input} type="text" 
                                              placeholder="Enter your email" validate={[required, maxLength20]} />
                </div>
                <div>
                    <span>Password:</span><Field name="password" component={Input} 
                                                 placeholder="Enter your password" type="text" 
                                                 validate={[required, maxLength20]}/>
                </div>
                <div>
                    <span>Remember me:</span><Field name="rememberMe" component={Input} type="checkbox" validate={[required]}/>
                </div>
                <div>
                    {props.error && <div className={styles.commonError}>{props.error}</div>}
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