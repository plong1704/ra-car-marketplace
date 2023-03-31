import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Menu from './Menu/Menu';


class DashBoard extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <Menu />
                </div>
                <div>
                    <Outlet />
                </div>


            </div>
        );
    }
}

export default DashBoard;