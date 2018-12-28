import React, { Component } from 'react'
import Link from 'next/link'

import FooterContentLink from "./FooterContentLink"

export default class FooterContent extends Component {
render() {
    return (
        <div id="footer-content" className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-xs-3 footer-content-info">
                        <Link href="/">
                            <a href="javascript:void(0)">
                                <i className="icon icon-logo_footer"></i>
                            </a>
                        </Link>
                        <div>
                            <i className="fa fa-envelope"></i>
                            <Link href="mailto:ask@carfromjapan.com">ask@carfromjapan.com</Link>
                        </div>
                        <div>
                            <i className="fa fa-phone"></i>
                            <Link href="tel:+81345406692">+81 3 4540 6692</Link>
                        </div>
                        <div>
                            <i className="fa fa-map-marker-alt"></i>
                            <Link href="#">〒153-0062 Mita 2-7-4, Meguro Ku, Tokyo, Japan</Link>
                        </div>
                    </div>
                    <div className="col-xs-2 footer-content-about-us-others">
                        <div className="footer-content-about-us-icon-list">
                            <h5 className="footer-content-title">About Us</h5>
                            <FooterContentLink icon="fa fa-user" text="Overview" href="#" />
                            <FooterContentLink icon="fa fa-university" text="Bank Account" href="#" />
                            <FooterContentLink icon="fa fa-users" text="Team" href="#" />
                            <FooterContentLink icon="fa fa-calendar-alt" text="Work Calendar" href="#" />
                        </div>
                        <div className="footer-content-others-icon-list">
                            <h5 className="footer-content-title">Others</h5>
                            <FooterContentLink icon="fa fa-shopping-cart" text="How to buy" href="#" />
                            <FooterContentLink icon="fa fa-file-invoice" text="Blog / Car talk" href="#" />
                        </div>
                    </div>
                    <div className="col-xs-2 footer-content-help-support">
                        <div className="footer-content-help-support-icon-list">
                            <h5 className="footer-content-title">Help & Support</h5>
                            <FooterContentLink icon="fa fa-headphones-alt" href="#" text="FAQs"/>
                            <FooterContentLink icon="fa fa-shopping-cart" href="#" text="Reservation & Purchase"/>
                            <FooterContentLink icon="fa fa-dollar-sign" href="#" text="Payment & Refund"/>
                            <FooterContentLink icon="fa fa-truck" href="#" text="Delivery & Shipment"/>
                            <FooterContentLink icon="fa fa-list-ul" href="#" text="Glossary of Terms"/>
                            <FooterContentLink icon="fa fa-ship" href="#" text="Shipping Schedule"/>
                            <FooterContentLink icon="fa fa-envelope" href="#" text="Recommend me a Car"/>
                        </div>
                    </div>
                    <div className="col-xs-2 footer-content-our-certificates-payment-method">
                        <h5 className="footer-content-title">Our Certificates</h5>
                        <div className="footer-content-our-certificates-list">
                            <div className="d-inline-block min-w-32-per text-center">
                                <i className="icon icon-jumvea_shield"></i>
                            </div>
                            <div className="d-inline-block min-w-32-per text-center">
                                <i className="icon icon-jumvea"></i>
                            </div>
                            <div className="d-inline-block min-w-32-per text-center">
                                <i className="icon icon-digicert_secure"></i>
                            </div>
                        </div>
                        <h5 className="footer-content-title">Payment method</h5>
                        <div className="footer-content-payment-method-list-1">
                            <div className="d-inline-block min-w-32-per text-center">
                                <i className="icon icon-visa"></i>
                            </div>
                            <div className="d-inline-block min-w-32-per text-center">
                                <i className="icon icon-master_card"></i>
                            </div>
                            <div className="d-inline-block min-w-32-per text-center">
                                <i className="icon icon-paypal"></i>
                            </div>
                        </div>
                        <div className="footer-content-payment-method-list-2">
                            <div className="d-inline-block min-w-32-per text-center">
                                <i className="icon icon-bank_transfer"></i>
                            </div>
                            <div className="d-inline-block min-w-32-per text-center">
                                <i className="icon icon-resona_bank"></i>
                            </div>
                            <div className="d-inline-block min-w-32-per text-center">
                                <i className="icon icon-equity"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-3">
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCarFromJapan.Official%2F&tabs=timeline&width=280&height=218&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=616121325153748" width="280" height="218" style={{border:'none', overflow:'hidden'}} scrolling="no" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
}
