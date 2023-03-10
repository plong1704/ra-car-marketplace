
import React, { Component } from 'react';
import { FaBell, FaExclamation, FaUser } from 'react-icons/fa';
import './Header.css'
class Header extends Component {
    render() {
        return (
            <div className=' border-b border-slate-200  header-page'>
                <div className="headers sigin-bt flex items-center">
                    <button className=''>
                        <FaExclamation />
                    </button>
                    <button>
                        <FaBell />
                    </button>
                    <a href="/auth/sign-in">
                        <button
                            className="text-xs py-3 rounded-lg text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 hidden gap-1 px-4 xl:flex"
                            type="button"
                        >
                            <FaUser />
                            Admin
                        </button>
                    </a>
                </div>

            </div>
        );
    }
}

export default Header;