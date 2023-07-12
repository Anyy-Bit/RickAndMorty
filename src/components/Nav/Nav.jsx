import React from "react";
import SearchBar from "../searchBar/SearchBar";
import style from './nav.module.css'
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavLinkMe = ({to, children, ...props}) => {
    return(
        <NavLink 
            {...props}
            to={to}
            className={({isActive}) => isActive ? style.active : style.disable
            }>
            {children}
        </NavLink>
    );
};


export default function Nav(props){
    const handleLogOut = () => {
        props.logOut();
    };

    return (
        <div className={style.nav}>
             <NavLinkMe to="/home">Home</NavLinkMe>
             <NavLinkMe to="/about">About</NavLinkMe>
             <NavLinkMe to="/favorites">Favorites</NavLinkMe>
             <SearchBar onSearch={(characterId) => props.onSearch(characterId)}/>

            <button onClick={handleLogOut}>LogOut</button>
        </div>
    )
}


{/* <SearchBar onSearch={onSearch}/> */}




