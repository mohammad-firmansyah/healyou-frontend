import  "./App.css";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Detail from "./pages/DetailDonasi";

function App() {

  return (
    <div className=" bg-white flex flex-col items-center px-5">
      <div className="flex w-[828px]  pl-0 flex-col ">
      <div className="flex w-[828px]  pl-0 flex-col ">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/detail/:id" element={ <Detail/> } />
          <Route path="*" element={ <Detail/> } />
        </Routes>
      </div>
      </div>
    </div>
  )
}

export default App