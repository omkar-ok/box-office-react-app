import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/"> {props.title} </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"> Home </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/starred"> Starred </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true" > Disabled </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit"> Search </button>
            </form>
          </div>
        </div>
      </nav>

     
    </div>
  );
}
