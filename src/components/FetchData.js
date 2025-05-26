import React, {useState} from 'react';

function FetchData(props) {
    const [posts, setPosts] = useState([]);

    function getPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
    }

    return (
        <div>
            <button onClick={getPosts}>Get Posts</button>
            {posts.map(post => {
                return (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default FetchData;