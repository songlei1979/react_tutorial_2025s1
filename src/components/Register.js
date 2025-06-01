import React, {useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../constants";

function Register(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [message, setMessage] = useState("")

    function submitRegister() {
        let data = JSON.stringify({
            "username": username,
            "password": password,
            "email": email,
            "first_name": first_name,
            "last_name": last_name
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseUrl+'/api/users/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setMessage("register success");
            })
            .catch((error) => {
                console.log(error);
                setMessage("register failed");
            });
    }

    function usernameHandler(e) {
        setUsername(e.target.value);
    }

    function passwordHandler(e) {
        setPassword(e.target.value);
    }

    function emailHandler(e) {
        setEmail(e.target.value);
    }

    function firstNameHandler(e) {
        setFirstName(e.target.value);
    }

    function lastNameHandler(e) {
        setLastName(e.target.value);
    }


    return (
        <div>
            <p>Username:<input type="text" onChange={usernameHandler} /></p>
            <p>Password:<input type={"password"} onChange={passwordHandler} /></p>
            <p>Email:<input type={"email"} onChange={emailHandler} /></p>
            <p>First Name:<input type={"text"} onChange={firstNameHandler} /></p>
            <p>Last Name:<input type={"text"} onChange={lastNameHandler} /></p>
            <p><button onClick={submitRegister}>Register</button></p>
            <p>{message}</p>
        </div>
    );
}

export default Register;