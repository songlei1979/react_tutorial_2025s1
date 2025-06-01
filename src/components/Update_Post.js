import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import FormData from "form-data";
import {BaseUrl} from "../constants";

function UpdatePost(props) {
    const [post, setPost] = useState({});
    const [message, setMessage] = useState("");
    const { id } = useParams();
    const [token, setToken] = useState();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        setToken(localStorage.getItem('token'));

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseUrl + '/api/posts/' + id,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setPost(response.data);
                setTitle(response.data.title);
                setContent(response.data.content);
                setCategory(response.data.category);
            })
            .catch((error) => {
                console.log(error);
                setPost({});

                setMessage("item not found");
            });
    }, [token]);

    function titleHandler(event) {
        setTitle(event.target.value);
    }

    function contentHandler(event) {
        setContent(event.target.value);
    }

    function categoryHandler(event) {
        setCategory(event.target.value);
    }

    function updatePostSubmit() {
        let data = new FormData();
        data.append('title', title);
        data.append('content', content);
        data.append('category', category);

        let config = {
            method: 'PUT',
            maxBodyLength: Infinity,
            url: BaseUrl + '/api/posts/'+id+'/',
            headers: {
                'Authorization': 'token ' + token,
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setMessage("post updated");
            })
            .catch((error) => {
                console.log(error);
                setMessage("post update failed");
            });
    }

    return (
        <div>
            <h1>Title: <input type="text" value={title} onChange={titleHandler}/></h1>
            <p>content:<input type="text" value={content} onChange={contentHandler}/></p>
            <p>Category: <input type="text" value={category} onChange={categoryHandler}/></p>
            <button onClick={updatePostSubmit}>Update Post</button>
            <p>{message}</p>
        </div>
    );
}

export default UpdatePost;