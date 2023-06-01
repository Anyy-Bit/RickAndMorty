import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from './nav.module.css'
import { Link } from "react-router-dom";


const Nav = ({onSearch}) =>{
    return(
        <nav className = {style.nav}>
                <Link to="/about">About</Link>
                <Link to="/home">Home</Link>
             <SearchBar onSearch={onSearch}/>
        </nav>
    );
}

export default Nav;




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







