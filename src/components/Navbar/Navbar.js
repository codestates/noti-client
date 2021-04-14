import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SearchBox from "./SearchBox"
import "../../Navbar.css";
import axios from "axios";

export default function Navbar({loginHandler, handleLogout, isLogin}){
  const [click, setClick] = useState(false);

  const history = useHistory();

  const handleClick = () => setClick(!click);

  const [searchTerm, setSearchTerm] = useState("")
  



  const updateSearchTerm = (newSearchTerm) => {
    setSearchTerm(newSearchTerm)
  }

  return(
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link 
            exact to="/"
            className="nav-logo"
            style={{textDecoration: "none", color: "black"}}>
            NOTI
          </Link>
          <SearchBox updateSearchTerm={updateSearchTerm}/>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
             {isLogin ? (
            <>
              <li className="nav-item">
                <Link exact to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  발매정보리스트
                </Link>
              </li>  
              <li className="nav-item">
                <Link exact to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  알림리스트
                </Link>
              </li>           
              <li className="nav-item">
                <Link exact to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  회원정보수정
                </Link>
              </li>           
              <li className="nav-item">
                <Link 
                  exact to="/"
                  onClick={handleLogout}
                  activeClassName="active"
                  className="nav-links"
                  onClick={()=>{
                    handleClick();
                    handleLogout();
                  }}
                >
                로그아웃
                </Link>                  
              </li> 
            </>
             ) : (
            <>
              <li className="nav-item">
                <Link exact to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  발매정보리스트
                </Link>
              </li>              
              <li className="nav-item">
                <Link exact to="/login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  로그인
                </Link>
              </li>   
            </>            
            )}          
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}