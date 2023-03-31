import React, { Component } from 'react';
import Banner from './banner/Banner';
import LatestBlogs from './latestblogs/LatestBlogs';
import Menu from './menu/Menu';
import NewCars from './newcars/NewCars';
import Slider from './slider/Slider';
import UsedCars from './usedcars/UsedCars';

class Body extends Component {
    render() {
        return (
            <div className='body-home'>
                <Menu/>
                <Slider/>
                <Banner/>
                <NewCars/>
                <UsedCars/>
                <LatestBlogs/>
            </div>
        );
    }
}

export default Body;