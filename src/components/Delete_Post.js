import React, {useEffect, useState} from 'react';
import {BaseUrl} from "../constants";
import axios from "axios";
import {useParams} from "react-router-dom";

function DeletePost(props) {

    const [message, setMessage] = useState();
    const [token, setToken] = useState();
    const {id} = useParams();


    useEffect(() => {
        setToken(localStorage.getItem('token'));
        console.log(token);
        console.log(id);

        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: BaseUrl + '/api/posts/' + id + '/',
            headers: {
                'Authorization': 'token ' + token,
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                window.location.href = "/";
            })
            .catch((error) => {
                console.log(error);
                setMessage("post deletion failed");
            });
    }, [token]);

    return (
        <div>{message}</div>
    );
}

export default DeletePost;