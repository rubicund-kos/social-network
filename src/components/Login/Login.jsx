import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-Reducer";
import {Redirect} from "react-router-dom";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormControls/FormControls";
import styles from "./Login.module.sass";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className="loginForm">
            <div>
                <Field name={"email"}
                       placeholder={"Email"}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field name={"password"}
                       placeholder={"Password"}
                       component={Input}
                       type={"password"}
                       validate={[required]}/>
            </div>
            <div>
                <Field name={"rememberMe"}
                       id="rememberMe"
                       type={"checkbox"}
                       component={Input}
                       className={styles.remember}
                />Remember me
            </div>
            {error && <div className={styles.formSummaryError}>{error}</div>}

            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = props => {
    const onSubmit = (formData) => {
        let {email, password, rememberMe} = formData;
        props.login(email, password, rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div className={styles.loginForm_wrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);