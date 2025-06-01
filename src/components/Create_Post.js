import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../constants";

function CreatePost(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [snippet, setSnippet] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");
    const [token, setToken] = useState("");

    useEffect(() => {
        setToken(localStorage.getItem('token'));
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseUrl + '/api/auth/user_id',
            headers: {
                'Authorization': 'token ' + token
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setAuthor(response.data.user_id);
                console.log(author);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [token]);


    function createPostSubmit() {
        const FormData = require('form-data');
        let data = new FormData();
        data.append('title', title);
        data.append('content', content);
        data.append('snippet', snippet);
        data.append('category', category);
        data.append('author', author);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:8000/api/posts/',
            headers: {
                'Authorization': 'token faa76a3b7d11e8fa9e81a1e0651da50ca7f929c1',
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setMessage("post created");
            })
            .catch((error) => {
                console.log(error);
                setMessage("post creation failed");
            });
    }

    function titleHandler(event) {
        setTitle(event.target.value);
    }

    function contentHandler(event) {
        setContent(event.target.value);
    }

    function snippetHandler(event) {
        setSnippet(event.target.value);
    }

    function categoryHandler(event) {
        setCategory(event.target.value);
    }


    return (
        <div>
            <p>Title: <input type="text" onChange={titleHandler}/></p>
            <p>Content: <input type="text" onChange={contentHandler}/></p>
            <p>Snippet: <input type="text" onChange={snippetHandler}/></p>
            <p>Category: <input type="text" onChange={categoryHandler}/></p>
            <p>
                <button onClick={createPostSubmit}>Create Post</button>
            </p>
            <p>{message}</p>
        </div>
    );
}

export default CreatePost;