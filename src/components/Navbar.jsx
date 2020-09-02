import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({toggleSideBar}) => {
  return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            {/* <img src={logo} alt="logo"/> */}
            <button type="button" onClick={toggleSideBar} className="toggle-btn">
              <FaAlignRight></FaAlignRight>
            </button>
          </div>
          <PageLinks styleClass="nav-links"/>
        </div>
      </nav>
  )}

export default Navbar
