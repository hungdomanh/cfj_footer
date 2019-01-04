import React, { Component } from 'react'

import AboutUsSideBar from './AboutUsSiteBar'

export default class AboutUsLayout extends Component {
    render() {
        return (
            <div>
                <div id="about-us">
                    <div className="container">
                        <div className="col-xs-3">
                            <AboutUsSideBar />
                        </div>
                        <div className="col-xs-9">
                            {this.props.children}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
