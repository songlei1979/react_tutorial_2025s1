import React, {useState} from 'react';

function Count(props) {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function textHandler(e) {
        setText(e.target.value);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <p><button onClick={increment}>Increment</button></p>
            <p><button onClick={decrement}>Decrement</button></p>

            <p>Text: {text}</p>
            <p><input type="text" onChange={textHandler}/></p>
        </div>
    );
}

export default Count;