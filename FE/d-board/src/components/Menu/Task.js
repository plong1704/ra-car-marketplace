import React, { Component } from 'react';
import { FaCalendar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
class Task extends Component {
    render() {
        return (
            <div>
                <li>
                    <Link className="" to="/dashboard/task">
                        <button
                            className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                            type="button"
                            style={{ position: "relative", overflow: "hidden" }}>
                            <FaCalendar className='text-2xl' />
                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                                Tasks
                            </p>
                        </button>
                    </Link>
                </li>
            </div>
        );
    }
}

export default Task;