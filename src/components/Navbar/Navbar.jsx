import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import { Typography } from "@mui/material";
import navStyle from "./Navbar.module.css";

function Navbar() {
  return(
    <div className={navStyle.navbarMenu}>
      <Typography variant="h5"> GeoQuiz</Typography>
      <div>
          <NavLink to="/"> <Typography  variant="subtitle1" > Играть </Typography> </NavLink>
          <NavLink to="/AddQuiz"><Typography  variant="subtitle1" > Добавить квиз </Typography>  </NavLink>
          
      </div>
      <div>
          <NavLink  to="/Registration">  <Typography  variant="subtitle1" >Регистрация </Typography> </NavLink>
          <NavLink  to="/Authorization"><Typography  variant="subtitle1" > Войти </Typography>  </NavLink>
      </div>      
    </div>
  );
}

export default Navbar;
