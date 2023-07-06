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
                }
        >
            {children}
        </NavLink>
    );
}

export default function Nav({onSearch}){
    return (
        <div className={style.nav}>
             <NavLinkMe to="/home">Home</NavLinkMe>
             <NavLinkMe to="/about">About</NavLinkMe>
            <SearchBar onSearch={onSearch}/>

        </div>
    )
}

// const Nav = ({onSearch}) =>{
//     return(
//         <nav className = {style.nav}>
//                 <Link to="/about">About</Link>
//                 <Link to="/home">Home</Link>
//              <SearchBar onSearch={onSearch}/>
//         </nav>
//     );
// }

// export default Nav;




// class Nav extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//   render() {
//      return(
//         <nav>
//             <Link to="/about">About</Link>
//             <Link to="/home">Home</Link>
//             <SearchBar onSearch={this.props.onSearch} />
//         </nav>
//     )
//     }
// }







