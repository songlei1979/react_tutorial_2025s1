import React, {useState} from 'react';
import {c} from "react/compiler-runtime";

function Condition(props) {
    const [name, setName] = useState("");
    let age = props.age;

    function clickMe() {
        name === "" ? setName("Simon Dacey") : setName("");
    }

    function incrementAge() {
        age = age + 1;
    }

    function clickMe2() {
        if (name === "") {
            setName("Simon Dacey")
        }else {
            setName("")
        }
    }
    return (
        <div>
            <h2>Name: {name}</h2>
        <button onClick={clickMe2}>change name</button>
            <h2>Age: {age}</h2>
            <button onClick={incrementAge} className={'btn btn-danger'}>increment age</button>
        </div>
    );
}

export default Condition;