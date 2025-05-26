import React, {useState} from 'react';

function Form(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
            <p><button>Login</button></p>
            <p>Username: {username}</p>
            <p>Password: {password}</p>
        </div>
    );
}

export default Form;