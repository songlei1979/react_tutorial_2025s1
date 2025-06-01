import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../constants";

function Logout(props) {
    const [token, setToken] = useState("");
    const [message, setMessage] = useState()

    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, []);

    function logoutSubmit() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseUrl + '/api/auth/logout/',
            headers: {
                'Authorization': 'token ' + token
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                localStorage.removeItem('token');
                window.location.href = "/login";
            })
            .catch((error) => {
                console.log(error);
                setMessage("logout failed");
            });


    }

    return (
        <div>
            <p><button onClick={logoutSubmit}>Logout</button></p>
            <p>{message}</p>
        </div>
    );
}

export default Logout;