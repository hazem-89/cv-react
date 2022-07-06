import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe/AboutMe";
import './App.css';
import Layout from "./Layout/Layout";
import StartPage from "./StartPage/StartPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<StartPage />}></Route>
    <Route path="/layout" element={<Layout />}></Route>
    <Route path="/Aboutme" element={<AboutMe />}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
