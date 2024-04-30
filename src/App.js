import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./components/Register";
import Edit from "./components/Edit";
import Details from "./components/Details";
import Invoice from "./components/Invoice";
import Userdataapi from "./components/Userdataapi";
import LocalInvice from "./components/LocalInvice";
import SendMessage from "./components/SendMessage";
import MonthlyIncome from "./components/MonthlyIncome";
import Login from "./components/Login";
import { AuthProvider } from "./components/auth";
import RequireAuth from "./components/RequireAuth";
// import UserDeleteButton from "./components/UserDeleteButton";

function App() {
  return (
    <AuthProvider>
      <Navbar />

      <Routes>
        {/*  <Route path="/login" element={<Login />}></Route> */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/register" element={<Register />}></Route>
        <Route path="/monthlyIncome" element={<MonthlyIncome />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/view/:id" element={<Details />}></Route>
        <Route path="/invice/:id" element={<Invoice />}></Route>
        <Route path="/invice1/:id" element={<LocalInvice />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
