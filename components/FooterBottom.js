import React, { Component } from 'react'
import Link from 'next/link'

export default class FooterBottom extends Component {
    render() {
        return (
            <div id="footer-bottom" className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <div className="d-inline-block">
                                    <Link href="#">
                                        Sitemap
                                    </Link>
                                </div>
                                <div className="p-left-10 p-right-10 d-inline-block fz-700">|</div>
                                <div className="d-inline-block">
                                    <Link href="#">
                                        Privacy Policy
                                    </Link>
                                </div>
                                <div className="p-left-10 p-right-10 d-inline-block fz-700">|</div>
                                <div className="d-inline-block">
                                    <Link href="#">
                                        Condition of Use
                                    </Link>
                                </div>
                            </div>
                            <div>
                                2018 @ All Right Reserved. Authorized Used-Car Dealer in Japan.
                            </div>
                            <div>
                                <div className='social-icon fb'>
                                    <Link href="#">
                                        <i className='fab fa-facebook-f'></i>
                                    </Link>
                                </div>
                                <div className='social-icon tw'>
                                    <Link href="#">
                                        <i className='fab fa-twitter'></i>
                                    </Link>
                                </div>
                                <div className='social-icon gp'>
                                    <Link href="#">
                                        <i className='fab fa-google-plus-g'></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 text-right">
                            <div>
                                Japanese Government License No# Tokyo 305561505308
                            </div>
                            <div>
                                Member of JUMVEA (Approved by Government of Japan) No# xxxx
                            </div>
                            <div>
                                Member of Tokyo Chamber of Commerce | No#
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
