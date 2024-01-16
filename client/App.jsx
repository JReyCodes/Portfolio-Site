import React from "react";
import { Routes,Route} from "react-router";
import { HashRouter } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import About from "./About.jsx";

const App = () => {
    return (
        <HashRouter>
            <div>
                <NavBar/>
            </div>
            <Routes>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/about" element={<About/>}></Route>

            </Routes>
        </HashRouter>
    )
}

export default App;