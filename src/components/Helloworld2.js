import React from 'react';

function Helloworld2(props) {
    function clickMe() {
        alert("You clicked me from Helloworld2.js!");
    }

    return (
        <div>
            <h1>Hello World 2</h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>
                <button onClick={props.clickMe}>Click Me</button>
            </p>
            <p><button onClick={clickMe}>Click Me 2</button></p>
        </div>
);
}

export default Helloworld2;