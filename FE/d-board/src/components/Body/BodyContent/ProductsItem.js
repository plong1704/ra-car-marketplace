import React, { Component } from 'react';

class ProductsItem extends Component {
    render() {
        var {product} = this.props;
        return (
                <tr>
                    <th scope="col" className="py-3 pl-4">
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
                    <th>{product.id}</th>
                    <th>{product.name}</th>
                    <th>{product.description}</th>
                    <th>{product.carbrandid}</th>
                    <th>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                            Edit
                        </button>
                    </th>
                    <th>
                        <button className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                            Delete
                        </button>
                    </th>
                </tr>
                
        );
    }
}

export default ProductsItem;