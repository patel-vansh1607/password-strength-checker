import "../styles/Password.css"
import React, { useState } from "react";

const PasswordChecker = () => {
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [progress, setProgress] = useState("");

    
    const [hidePassword, setHidePassword] = useState(true);





    return(
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h2 className="title">Password Strength Checker</h2>
                </div>


                <div className="card-body">
                    <div className="input-container">
                        <div className="input-box">
                            <input value={password} onChange={({ target }) => {}} type={hidePassword ? "password" : "text"} className="input" placeholder="Enter Password" />
                            <a
                            href="#"
                            className="toggle-btn"
                            onClick={() => {
                                setHidePassword(!hidePassword)
                            }}
                            >
                             <span
                             className="material-icons eye-icon"
                             style={{color: !hidePassword ? "#1364FF" : "#c3c3c3"}}
                             >
                                visibilty
                            </span>                   
                            </a>
                        </div>

                        <div className="progress-bg">
                             <div
                                className="progress"
                                style={{
                                    width: process,
                                    backgroundColor: getActiveColor(message),
                                }}
                                ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordChecker