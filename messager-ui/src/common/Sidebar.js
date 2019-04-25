import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu'
import './Sidebar.css'

class Sidebar extends Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (
            <Menu>
                <a id="about" className="menu-item" href="/about">Сообщество Tesla</a>
                <a id="about" className="menu-item" href="/about">Илон Маск</a>
                <a id="contact" className="menu-item" href="/contact">Филипп Киркоров</a>
                <a id="contact" className="menu-item" href="/contact">Дональд Трамп</a>
            </Menu>
        );
    }
}

export default Sidebar;