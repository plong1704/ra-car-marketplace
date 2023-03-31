import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div
                                    className="banner_item align-items-center"
                                    style={{ backgroundImage: "url(images/ferrari.jpg)" }}
                                >
                                    <div className="banner_category">
                                        <a href="categories.html">Ferrari</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div
                                    className="banner_item align-items-center"
                                    style={{ backgroundImage: "url(images/lambogini.jpg)" }}
                                >
                                    <div className="banner_category">
                                        <a href="categories.html">Lamborghini</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div
                                    className="banner_item align-items-center"
                                    style={{ backgroundImage: "url(images/bmwz4.jpg)" }}
                                >
                                    <div className="banner_category">
                                        <a href="categories.html">BMW</a>
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

export default Banner;