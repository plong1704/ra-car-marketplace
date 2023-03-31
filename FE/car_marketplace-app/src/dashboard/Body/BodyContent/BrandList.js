import React, { Component } from 'react';
import './BrandList.css'

class BrandList extends Component {
    render() {
        return (
            <div className='panel panel-primary'>
                <div className='panel-body '>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50 ">
                            <tr>
                                <th scope="col" className="py-3 pl-4 ">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="checkbox-all"
                                            type="checkbox"
                                            className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                        />
                                        <label
                                            htmlFor="checkbox"
                                            className="sr-only"
                                        >
                                            Checkbox
                                        </label>
                                    </div>
                                </th>
                                <th scope="col"
                                    className="px-6 py-5 text-xs font-bold text-left text-gray-500 uppercase ">ID</th>
                                <th scope="col"
                                    className="px-6 py-5 text-xs font-bold text-left text-gray-500 uppercase "> Name</th>
                                <th scope="col"
                                    className="px-6 py-5 text-xs font-bold text-left text-gray-500 uppercase ">Description</th>
                                <th scope="col"
                                    className="px-6 py-5 text-xs font-bold text-left text-gray-500 uppercase ">Brand ID</th>
                                <th
                                    scope="col"
                                    className="px-6 py-5 text-xs font-bold text-right text-gray-500 uppercase "
                                >
                                    Edit
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-5 text-xs font-bold text-right text-gray-500 uppercase "
                                >
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default BrandList;