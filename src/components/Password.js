import "../styles/Password.css"
import React, { useState } from "react";

const PasswordChecker = () => {
    return(
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h2 className="title">Password Strength Checker</h2>
                </div>


                <div className="card-body">
                    <div className="input-container">
                        <div className="input-box">
                            <input value={password} onChange={({ target }) => {}} type={hidePassword ? "password" : "text"} className="input" placeholder="Enter Password" ></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}