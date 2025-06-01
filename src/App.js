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
import Count from "./components/Count";
import FetchData2 from "./components/FetchData2";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import All_posts from "./components/All_posts";
import PostDetail from "./components/Post_Detail";
import Create_Post from "./components/Create_Post";
import Update_Post from "./components/Update_Post";
import DeletePost from "./components/Delete_Post";
import Delete_Post from "./components/Delete_Post";


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
                    <Route path="/" element={<All_posts/>}/>
                    <Route path="/post_details/:id" element={<PostDetail/>}/>
                    <Route path="helloworld2" element={<Helloworld2 name="John Doe" age="30" clickMe={clickMe}/>}/>
                    <Route path="condition" element={<Condition/>}/>
                    <Route path="loop" element={<Loop/>}/>
                    <Route path="form" element={<Form/>}/>
                    <Route path="fechdata" element={<FetchData/>}/>
                    <Route path="count" element={<Count/>}/>
                    <Route path="fetchdata2" element={<FetchData2/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="logout" element={<Logout/>}/>
                    <Route path={"create_post"} element={<Create_Post/>}/>
                    <Route path="/post_update/:id" element={<Update_Post/>}/>
                    <Route path="/post_delete/:id" element={<Delete_Post/>}/>
                </Routes>
            </BrowserRouter>

            <footer>This is my footer</footer>
        </div>
    );
}

export default App;
