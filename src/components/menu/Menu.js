import React, { Component } from 'react';
import './Menu.css';
import { NavLink } from "react-router-dom";

class Menu extends Component {
    render(props) {
    
        const menuItems  = this.props.folders.map((folder) =>
            <li className="Menu-item" key={folder.label}><NavLink activeClassName="Menu-item--active" to={'/' + folder.name}>{folder.label}</NavLink></li>
        );
        
        return (  
            <ul className="Menu-items">{menuItems}</ul>
        )
    }; 
}

export default Menu
