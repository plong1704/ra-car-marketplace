import React, { Component } from 'react';
import './AddPage.css';

class AddPage extends Component {
    render() {
        return (
            <div className='addpage'>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            NAME
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="Name"
                            >
                            DESCRIPTION
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Description"
                            />
                        </div>
                    <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="Description"
                    >
                    BRAND ID
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Brand id"
                    />
                </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                           SAVE
                        </button>
                       
                    </div>
                </form>

            </div>
        );
    }
}

export default AddPage;