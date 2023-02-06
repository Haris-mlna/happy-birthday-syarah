import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Questioner from "./pages/Questioner";
import Result from "./pages/Result";

import './styles/button.scss'
import './styles/global.scss'

function App() {
  return (
    <>
    <Routes>
      <Route index path="/" element={<Home/>}/>
      <Route path="/questioner" element={<Questioner/>}/>
      <Route path="/result" element={<Result/>}/>
    </Routes>
    </>
    );
}

export default App;
