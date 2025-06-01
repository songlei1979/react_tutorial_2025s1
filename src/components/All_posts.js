import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../constants";

function AllPosts(props) {
    const [token, setToken] = useState();
    const [author, setAuthor] = useState("");

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

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseUrl + '/api/posts/',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setPosts(response.data);
            })
            .catch((error) => {
                console.log(error);
                setPosts([]);
            });

    }, [posts]);


    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => {
                    return (
                        <li key={post.id}>
                            <a href={`/post_details/${post.id}`}>{post.title}</a>
                            {author === post.author ?
                                <p>
                                    <a href={`/post_update/${post.id}`}>Update</a>
                                    <a href={`/post_delete/${post.id}`}>Delete</a>
                                </p> : ""}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default AllPosts;