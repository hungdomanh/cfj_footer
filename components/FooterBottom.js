import React, { Component } from 'react'

export default class FooterBottom extends Component {
    render() {
        return (
            <div id="footer-bottom" className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <div className="d-inline-block">
                                    Sitemap
                                </div>
                                <div className="p-left-10 p-right-10 d-inline-block fz-700">|</div>
                                <div className="d-inline-block">
                                    Privacy Policy
                                </div>
                                <div className="p-left-10 p-right-10 d-inline-block fz-700">|</div>
                                <div className="d-inline-block">
                                    Condition of Use
                                </div>
                            </div>
                            <div>
                                2018 @ All Right Reserved. Authorized Used-Car Dealer in Japan.
                            </div>
                            <div>
                                <i className="icon icon-test"></i>
                                <i className="icon icon-test"></i>
                                <i className="icon icon-test"></i>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-md-right text-sm-left">
                                Japanese Government License No# Tokyo 305561505308
                            </div>
                            <div className="text-md-right text-sm-left">
                                Member of JUMVEA (Approved by Government of Japan) No# xxxx
                            </div>
                            <div className="text-md-right text-sm-left">
                                Member of Tokyo Chamber of Commerce | No#
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
