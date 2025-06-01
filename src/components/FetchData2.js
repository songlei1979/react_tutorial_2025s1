import React, {useEffect, useState} from 'react';

function FetchData2(props) {
    const [posts, setPosts] = useState([]);
    const [err, setErr] = useState("");

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(
                error => {
                    setErr(error.message);
                    console.log(error);
                    setPosts([])
                });
    }, []);

    return (
        <div>
            {err === "" ? posts.map(post => {
                    return (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    );
                }) :
                <p>{err}</p>
            }

        </div>
    );
}

export default FetchData2;