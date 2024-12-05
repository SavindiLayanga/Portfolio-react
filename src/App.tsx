import './App.css'

import NavBar from "./components/navBar.tsx";
import Contact from "./pages/contact.tsx";
import Home from "./pages/home.tsx";
import Expertise from "./pages/expertise.tsx";
import Service from "./pages/service.tsx";
import About from "./pages/about.tsx";
import Skills from "./pages/skills.tsx";

function App() {


    return (
        <div>
            <NavBar/>
            <Home/>
            <About/>
            <Skills/>
            <Expertise/>
            <Service/>
            <Contact/>

        </div>
    )
}

export default App

