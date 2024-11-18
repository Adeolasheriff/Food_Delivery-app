import { Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./shared/navbar";
import Footer from "./shared/footer";

export default function App() {
  return (
    <div>
      <Navbar />
        <Outlet/>
      <Footer/>
    </div>
  )
}