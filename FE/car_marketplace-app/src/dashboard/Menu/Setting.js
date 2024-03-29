import React, { Component } from 'react';
import { FaWrench } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Setting extends Component {
    render() {
        return (
            <div className='border-t border-slate-200'>
                <li>
                    <Link className="" to="/auth/setting">
                        <button
                            className="text-xs py-3 rounded-lg text-white hover:bg-white/10  w-full flex gap-4 px-4 capitalize"
                            type="button">
                            <FaWrench className='text-2xl' />
                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                                Setting
                            </p>
                        </button>
                    </Link>
                </li>
            </div>
        );
    }
}

export default Setting;