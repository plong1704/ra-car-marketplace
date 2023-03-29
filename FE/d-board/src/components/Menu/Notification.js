import React, { Component } from 'react';
import { FaCalendar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Notification extends Component {
    render() {
        return (
            <div>
                <li>
                    <Link className="" to="/dashboard/notifactions">
                        <button
                            className="text-xs py-3 rounded-lg text-white hover:bg-white/10 w-full flex gap-4 px-4 capitalize"
                            type="button"
                        >
                            <FaCalendar className='text-2xl' />
                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                                Notification
                            </p>
                        </button>
                    </Link>
                </li>
            </div>
        );
    }
}

export default Notification;