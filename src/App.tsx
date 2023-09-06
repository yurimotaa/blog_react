import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
