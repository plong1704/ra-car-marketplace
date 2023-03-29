import React, { Component } from 'react';
import { FaCar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
class CarBand extends Component {
    render() {
        return (
            <div>
                <li>
                    <Link className="active" to='/dashboard/carband'>
                        <div
                            className="text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 w-full flex gap-4 px-4 capitalize"
                            type="button"
                            style={{ position: "relative", overflow: "hidden" }}
                        >
                            <button>
                                <FaCar className='text-2xl' />
                            </button>
                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                                Car Brand
                            </p>
                        </div>
                    </Link>
                </li>
            </div>
        );
    }
}

export default CarBand;