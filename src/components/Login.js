import React, {useState} from 'react';
import {BaseUrl} from "../constants";
import axios from "axios";

function Login(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    function loginSubmit() {
        let data = JSON.stringify({
            "username": username,
            "password": password,
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseUrl + '/api/auth/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setMessage("login success");
                localStorage.setItem("token", response.data.token);
                window.location.href = "/";
            })
            .catch((error) => {
                console.log(error);
                setMessage("login failed");
            });
    }

    function usernameHandler(e) {
        setUsername(e.target.value);
    }

    function passwordHandler(e) {
        setPassword(e.target.value);
    }


    return (
        <div>
            <p>Username:<input type="text" onChange={usernameHandler} /></p>
            <p>Password:<input type={"password"} onChange={passwordHandler} /></p>
            <p><button onClick={loginSubmit}>Login</button></p>
            <p>{message}</p>

        </div>
    );
}

export default Login;