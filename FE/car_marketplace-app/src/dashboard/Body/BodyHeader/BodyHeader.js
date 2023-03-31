import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './BodyHeader.css'

class BodyHeader extends Component {
  render() {
    return (
      <div>

        <div className='body-header'>
          <div className="body-listp relative bg-clip-border mx-4 -mt-6 p-6">
            <h6 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-relaxed">
              CAR BRANDS LIST
            </h6>
          </div>
          <div className="bd-th bg-slate-100 relative w-full min-w-[200px] h-10">
            <input
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
              placeholder=" " />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal leading-tight peer-focus:leading-tight transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] before:w-2.5 before:h-1.5 before:mt-[6.5px] before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l  after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-placeholder-shown:leading-[3.75] peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
              Search car brand
            </label>
          </div>
          <div className='btn-add '>
            <Link to='./addbrand' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              <button className=''>
                <FaPlus className='text-xs' />
              </button>
              <button className=''>
                Add Brand
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

}

export default BodyHeader;