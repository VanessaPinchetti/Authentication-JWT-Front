import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import "./Navbar.css";

export const Navbar = () => {
  const { store } = useContext(Context);
  const routes = [
    
    
    
    {
      label: "Iniciar Sesión",
      path: "/login",
      shouldDisplay: !store.isAuth,
    },
    {
      label: "Registrarse",
      path: "/signup",
      shouldDisplay: !store.isAuth,
    },
    {
      label: "Inicio",
      path: "/",
      shouldDisplay: store.isAuth,
    },
  ];

  return (
    <nav className="navbar-container">
      
      <div className = "TitleJWT">Aplicación JWT</div>
      {routes.map((route, i) => {
        if (route.shouldDisplay) {
          return (
            <Link className="navbar-link" to={route.path} key={i}>
              {route.label}
            </Link>
          );
        } else return null;
      })}
      {/* {routes.map((route, i) => (
        <Link className="navbar-link" to={route.path} key={i}>
          {route.label}
        </Link>
      ))} */}
    </nav>
  );
};

export default Navbar;
