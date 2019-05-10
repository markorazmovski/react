import React from "react";
import "./register.css"

export class Register extends React.Component {
    render() {
        return (
            <section id="register">
                <div className="container">
                    <div className="formDiv">
                        <form>
                            <label className="registerLabel">First name:</label>
                            <input className="inputs" type="text" />

                            <label className="">Last name:</label>
                            <input className="inputs" type="text" />

                            <label className="">Email:</label>
                            <input className="inputs" type="email" />

                            <label className="">Date of birth:</label>
                            <input className="inputs" type="date" />

                            <label className="registerLabel">Telephone:</label>
                            <input className="inputs" type="number" />

                            <label className="registerLabel">Country:</label>
                            <input className="inputs" type="text" />

                            <label className="registerLabel">Password:</label>
                            <input className="inputs" type="password" />

                            <input className="submit" type="submit" value="REGISTER"/>
                        </form>
                    </div>
                    
                </div>
                <div class="signIn">
                            <p>Or if you don't have an account, <a class="link" href="">Register</a></p>
                        </div>
            </section>

                    );
                };
};