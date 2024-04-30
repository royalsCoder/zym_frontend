import Cookies from "js-cookie";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Login from "./Login";
function Navbar() {
  const navigator = useNavigate();
  const token = Cookies.get("loginToken");
  // console.log("token", token);

  const logout = () => {
    Cookies.remove("loginToken");
    navigator("/");
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg   navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            ROSHNI OPTICALS
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link " to="/monthlyIncome">
                  Monthly Income
                </NavLink>
              </li>
            </ul>
            {token ? (
              <button className="btn btn-primary" onClick={logout}>
                logout
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
