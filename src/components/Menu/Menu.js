import React, { Component, Fragment } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';

const menus = [
    {
        name : 'Trang Chủ',
        to : '/',
        exact : true
    },
    {
        name : 'Danh Sách Sản Phẩm',
        to : '/product-list',
        exact : false
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return(
        <Route 
            path={ to }
            exact={ activeOnlyWhenExact }
            children={ ({match}) => {
                var active = match ? 'active' : '';
                return(
                    <li className={ `nav-item ${active}` }>
                        <Link to={ to } className="nav-link"> { label } </Link>
                    </li>
                );
            }}
        />
    );
};

class Menu extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand navbar-light bg-light">
                    <NavLink className="navbar-brand" to="" >Call API</NavLink>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        { this.showMenu(menus) }
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>

            </Fragment>


        );
    };

    showMenu = (menus) => {
        var result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index) => {
                return(
                    <MenuLink 
                        key={ index }
                        label={ menu.name }
                        to={ menu.to }
                        activeOnlyWhenExact={ menu.exact }
                    />
                );
            });
        }
        return result;
    };

};


export default Menu;
