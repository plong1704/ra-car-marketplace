import React, { Component } from 'react';

class Slider extends Component {
    render() {
        return (
            <div>
                <div
                    className="main_slider"
                    style={{ backgroundImage: "url(images/img-bia.png)" }}
                >
                    <div className="container fill_height">
                        <div className="row align-items-center fill_height">
                            <div className="col">
                                <div className="main_slider_content">
                                    <h1>Car Marketplace</h1>
                                    <h6>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
                                        in et, lectus sit lorem id integer.
                                    </h6>
                                    <div className="red_button shop_now_button">
                                        <a href="#">Get Start</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Slider;