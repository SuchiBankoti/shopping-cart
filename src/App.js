import Home from "./Components/Home";
import LoginPage from "./Components/Login";
import "./App.css"
import Cart from "./Components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route
          path="/home"
          element={<Home />}
        ></Route>
        <Route
          path="/cart"
          element={<Cart />}
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}