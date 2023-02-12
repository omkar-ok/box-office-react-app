import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

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
                <NavLinkStyled className="nav-link" aria-current="page" to="/"> Home </NavLinkStyled>
              </li>
              <li className="nav-item">
                <NavLinkStyled className="nav-link" to="/starred"> Starred </NavLinkStyled>
              </li>
              <li className="nav-item">
                <NavLinkStyled className="nav-link disabled" to="/about" tabIndex="-1" aria-disabled="true" > Disabled </NavLinkStyled>
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

const NavLinkStyled = styled(NavLink)`
  display: block;
  padding: 3px 15px;
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.mainColors.gray} ;
  &.active {
    color: ${({ theme }) => theme.mainColors.blue} !important;
    &:after {
      content: '';
      position: absolute;
      display: block;
      height: 2px;
      left: 0%;
      bottom: 0;
      background-color: ${({ theme }) => theme.mainColors.blue} ;
      animation: slide-in 0.3s ease-in forwards;
      @keyframes slide-in {
        from {
          left: 50%;
          width: 0;
        }
        to {
          left: 0%;
          width: 100%;
        }
      }
    }
  }
`;