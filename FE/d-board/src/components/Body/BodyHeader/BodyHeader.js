import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

import './BodyHeader.css'
import Search from './Search';

class BodyHeader extends Component {
    render() {
        return (

            <div className='body-header'>
                <div className="body-listp relative bg-clip-border mx-4 -mt-6 p-6">
                    <h6 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-relaxed">
                        CAR BRANDS LIST
                    </h6>
                </div>
                <Search />
                <div className='btn-add '>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        <button className=''>
                            <FaPlus className='text-xs' />
                        </button>
                        <button className=''>
                            Add Brand
                        </button>

                    </button>   

                </div>

            </div>
        );
    }
}

export default BodyHeader;