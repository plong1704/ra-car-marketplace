import React, { Component } from 'react';
import CarBand from './CarBand';
import Folder from './Folder';
import './Menu.css'
import Modules from './Modules';
import Task from './Task';
import Notification from './Notification';
import Setting from './Setting';
class Menu extends Component {
  render() {
    return (
      <div className='left-menu'>
        <aside className=" my-4 ml-4">
          <div className="">
            <a className="" href="/">
              <h2 className="block text-4xl font-semibold leading-relaxed text-green-400">
                Ucars
              </h2>
            </a>
          </div>
          <div className="m-4">
            <div className='list-menu'>
              <ul className="mb-4 flex flex-col gap-1">
                <CarBand />
                <Folder />
                <Task />
                <Modules />
                <Notification />
              </ul>
            </div>
            <div className='setting'>
              <ul className="st-page mb-4 flex flex-col gap-1">
                <Setting />
              </ul>
            </div>

          </div>
        </aside>

      </div>
    );
  }
}

export default Menu;