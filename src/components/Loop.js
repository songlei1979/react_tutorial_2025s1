import React, {useState} from 'react';

function Loop(props) {
    const [names, setNames] = useState([]);
    const [name, setName] = useState("");
    function addName() {
        setNames([...names, name]);
    }

    function nameHandler(e) {
        setName(e.target.value);
    }


    return (
        <div>
            {names.map((name, index) => {
                return (
                        <h3 key={index}>{name}</h3>
                );
            })}
            <p><input type="text" onChange={nameHandler}/></p>
            <p><button onClick={addName}>Add Name</button></p>
        </div>
    );
}

export default Loop;