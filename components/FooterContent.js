import React, { Component } from 'react'

export default class FooterContent extends Component {
render() {
    return (
        <div id="footer-content" className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <i className="icon icon-logo_footer"></i>
                        <div><i></i><span>ask@carfromjapan.com</span></div>
                        <div><i></i><span>+81 3 4540 6692</span></div>
                        <div><i></i><span>〒153-0062 Mita 2-7-4, Meguro Ku, Tokyo, Japan</span></div>
                        
                    </div>
                    <div className="col-md-2">
                        <div className="footer-content-title">About Us</div>
                        <div><i></i><span>Overview</span></div>
                        <div><i></i><span>Bank Account</span></div>
                        <div><i></i><span>Team</span></div>
                        <div><i></i><span>Work Calendar</span></div>
                        <br/>
                        <div className="footer-content-title">Others</div>
                        <div><i></i><span>How to buy</span></div>
                        <div><i></i><span>Blog / Car talk</span></div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-content-title">Help & Support</div>
                        <div><i></i><span>FAQs</span></div>
                        <div><i></i><span>Reservation & Purchase</span></div>
                        <div><i></i><span>Payment & Refund</span></div>
                        <div><i></i><span>Delivery & Shipment</span></div>
                        <div><i></i><span>Glossary of Terms</span></div>
                        <div><i></i><span>Shipping Schedule</span></div>
                        <div><i></i><span>Recommend me a Car</span></div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-content-title">Help & Support</div>
                        <div className="d-inline-block min-w-33-per text-center">
                            <i className="icon icon-jumvea_shield"></i>
                        </div>
                        <div className="d-inline-block min-w-33-per text-center">
                            <i className="icon icon-jumvea"></i>
                        </div>
                        <div className="d-inline-block min-w-33-per text-center">
                            <i className="icon icon-digicert_secure"></i>
                        </div>
                        <br/>
                        <div className="footer-content-title">Payment method</div>
                        <div className="d-inline-block min-w-33-per text-center">
                            <i className="icon icon-visa"></i>
                        </div>
                        <div className="d-inline-block min-w-33-per text-center">
                            <i className="icon icon-master_card"></i>
                        </div>
                        <div className="d-inline-block min-w-33-per text-center">
                            <i className="icon icon-paypal"></i>
                        </div>
                        <br/>
                        <div className="d-inline-block min-w-33-per text-center">
                            <i className="icon icon-bank_transfer"></i>
                        </div>
                        <div className="d-inline-block min-w-33-per text-center">
                            <i className="icon icon-resona_bank"></i>
                        </div>
                        <div className="d-inline-block min-w-33-per text-center">
                            <i className="icon icon-equity"></i>
                        </div>
                    </div>
                    <div className="col-md-2">
                        link fb
                    </div>
                
                </div>
            </div>
        </div>
    )
}
}
