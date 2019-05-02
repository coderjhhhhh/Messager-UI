import React, {Component} from 'react';
import {
    Link,
    withRouter
} from 'react-router-dom';
import './AppHeader.css';
import pollIcon from '../poll.svg';
import {Redirect} from 'react-router-dom'
import {Layout, Menu, Dropdown, Icon} from 'antd';
import {signup} from "../util/APIUtils";

const Header = Layout.Header;

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick({key}) {
        if (key === "logout") {
            this.props.onLogout();
        }
    }

    redirectToLogin = () => {
        this.props.history.push("/login");
    }

    redirectToSignup = () => {
        this.props.history.push("/signup");
    }

    render() {
        let menuItems;
        if (this.props.currentUser) {
            menuItems = [
                <div className="navbar-auth-buttons">
                    <button onClick={showProfileMenu} type="button" className="btn btn-default">
                        <span>Профиль</span>
                    </button>
                </div>
            ];
        } else {
            menuItems = [
                <div className="navbar-auth-buttons">
                    <button onClick={this.redirectToLogin} type="button" className="btn btn-default">
                        <span>Войти</span>
                    </button>
                    <button id={'signup'} onClick={this.redirectToSignup} type="button" className="btn btn-default">
                        <span>Регистрация</span>
                    </button>
                </div>
            ];
        }

        return (
            <Header className="navbar">
                <div className="container">
                    <div className="app-title">
                        <Link to="/">Messager</Link>
                    </div>
                    {menuItems}
                </div>
            </Header>
        );
    }
}

function showProfileMenu() {
}

function ProfileDropdownMenu(props) {
    const dropdownMenu = (
        <Menu onClick={props.handleMenuClick} className="profile-dropdown-menu">
            <Menu.Item key="user-info" className="dropdown-item" disabled>
                <div className="user-full-name-info">
                    {props.currentUser.name}
                </div>
                <div className="username-info">
                    @{props.currentUser.username}
                </div>
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="profile" className="dropdown-item">
                <Link to={`/users/${props.currentUser.username}`}>Profile</Link>
            </Menu.Item>
            <Menu.Item key="logout" className="dropdown-item">
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown
            overlay={dropdownMenu}
            trigger={['click']}
            getPopupContainer={() => document.getElementsByClassName('profile-menu')[0]}>
            <a className="ant-dropdown-link">
                <Icon type="user" className="nav-icon" style={{marginRight: 0}}/> <Icon type="down"/>
            </a>
        </Dropdown>
    );
}


export default withRouter(AppHeader);