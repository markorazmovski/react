import React from "react";
import "./login.css";

export class Login extends React.Component {
    render() {
        return(

            <section id="login">
            <div className="wrapper">

        <form action="" className="login_form">

            <label>E-mail</label>

            <input className="inputs" type="email"/>

            <label>Password:</label>

            <input className="inputs" type="password"/>

            <input className="submit" type="submit" value="SIGN IN"/>

        </form>
       
        <div className="register">
            <p>Or if you don't have an account, <a className="link" href="">Register</a></p>
        </div>
          </div>  

        
        </section>

        );
    };
};