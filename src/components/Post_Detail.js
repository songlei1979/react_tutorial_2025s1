import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import FormData from "form-data";
import {BaseUrl} from "../constants";

function PostDetail(props) {
    const [post, setPost] = useState({});
    const [message, setMessage] = useState("");
    const { id } = useParams();

    useEffect(() => {

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:8000/api/posts/' + id,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setPost(response.data);
            })
            .catch((error) => {
                console.log(error);
                setPost({});
                setMessage("item not found");
            });
    }, []);



    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p><img src={post.image}/></p>
            <p>Author: {post.author_username}</p>
            <p>Category: {post.category_name}</p>

            <p>{message}</p>
        </div>
    );
}

export default PostDetail;