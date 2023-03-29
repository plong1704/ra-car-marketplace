import React, { Component } from 'react';
import axios from 'axios';
import './Body.css'
import ProductsItem from './BodyContent/ProductsItem';
import BodyHeader from './BodyHeader/BodyHeader';
import BrandList from './BodyContent/BrandList';
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/model-car',
      data: 'null'

    }).then(res => {
      console.log(res);
      this.setState({
        products: res.data
      });

    }).catch(err => {
      console.log(err);
    });
  }

  showProducts(products) {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductsItem
            key={index}
            product={product}
            index={index}
          />
        )
      })
    }
    return result;
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <div className='body-page'>
          <div>
            <BodyHeader/>
          </div>
          <div>
            <BrandList>{this.showProducts(products)}</BrandList>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
