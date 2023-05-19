import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from './nav.module.css'


class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
     return(
        <nav>
            <SearchBar onSearch={this.props.onSearch} />
        </nav>
    )
    }
}

export default Nav;





