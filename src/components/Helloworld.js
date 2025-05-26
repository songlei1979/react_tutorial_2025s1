import React, {Component} from 'react';

class Helloworld extends Component {
    clickMe() {
        alert("You clicked me from Helloworld.js!");
    }
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
                <p><button onClick={this.props.clickMe}>Click Me</button></p>
                <p><button onClick={this.clickMe}>Click Me 2</button></p>
            </div>
        );
    }
}

export default Helloworld;