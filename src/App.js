import logo from './logo.svg';
import './App.css';
import Helloworld from "./components/Helloworld";
import Helloworld2 from "./components/Helloworld2";
import Condition from "./components/Condition";
import Loop from "./components/Loop";
import Form from "./components/Form";
import FetchData from "./components/FetchData";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";


function App() {
    // function clickMe() {
    //     alert("You clicked me from App.js!");
    // }

    let clickMe = () => {
        alert("You clicked me from App.js!");
    }

    return (
        <div className="App">
            <header>This is my header</header>
            <Menu/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Helloworld name="John Doe" age="30" clickMe={clickMe}/>}/>
                    <Route path="helloworld2" element={<Helloworld2 name="John Doe" age="30" clickMe={clickMe}/>}/>
                    <Route path="condition" element={<Condition/>}/>
                    <Route path="loop" element={<Loop/>}/>
                    <Route path="form" element={<Form/>}/>
                    <Route path="fechdata" element={<FetchData/>}/>

                </Routes>
            </BrowserRouter>

            <footer>This is my footer</footer>
        </div>
    );
}

export default App;
