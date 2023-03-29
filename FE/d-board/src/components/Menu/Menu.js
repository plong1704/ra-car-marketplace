import React, { Component } from 'react'
import Notification from './Notification';
import CarBand from './CarBand';
import Folder from './Folder';
import Modules from './Modules';
import Task from './Task';
import Setting from './Setting';
import './Menu.css'
import { Link, Route,Routes } from 'react-router-dom';
import FolderPage from './Page/FolderPage';
import Body from '../Body/Body';
import AddPage from '../Body/BodyHeader/AddPage';



class Menu extends Component {
  render() {
    return (
      <div>
        <div className='left-menu'>
          <aside className=" my-4 ml-4">
            <div className="">
              <Link className="" to="/dashboard/carband">
                <h2 className="block text-4xl font-semibold leading-relaxed text-green-400">
                  Ucars
                </h2>
              </Link>
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
        <Routes>
          <Route path='/dashboard/carband/*' exact element={<Body/>}/> 
          <Route path='/dashboard/carband/*' exact element={<Body/>} />
          <Route path='/dashboard/folder' exact element={<FolderPage/>} />
          <Route path='/dashboard/task' exact element={<FolderPage/>} />
          <Route path='/dashboard/modules' exact element={<FolderPage />} />
          <Route path='/dashboard/notifactions' exact element={<FolderPage />} />
          <Route path='/dashboard/carband/addbrand/' exact element={<AddPage/>} />
        </Routes>
      </div>
    );
  }
}

export default Menu;