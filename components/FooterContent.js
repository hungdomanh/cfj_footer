import React, { Component } from 'react'

import FooterContentLink from './FooterContentLink'

export default class FooterContent extends Component {
  render() {
    return (
      <div id="footer-content" className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-xs-3 footer-content-info">
              <a href="/">
                <i className="icon icon-footer__logo_footer" />
              </a>
              <div>
                <i className="fa fa-envelope" />
                <a href="mailto:ask@carfromjapan.com">ask@carfromjapan.com</a>
              </div>
              <div>
                <i className="fa fa-phone" />
                <a href="tel:+81345406692">+81 3 4540 6692</a>
              </div>
              <div>
                <i className="fa fa-map-marker-alt" />
                <a href="javacript:void(0)">〒153-0062 Mita 2-7-4, Meguro Ku, Tokyo, Japan</a>
              </div>
            </div>
            <div className="col-xs-2 footer-content-about-us-others">
              <div className="footer-content-about-us-icon-list">
                <h5 className="footer-content-title">About Us</h5>
                <FooterContentLink icon="fa fa-user" text="Overview" href="/about" />
                <FooterContentLink icon="fa fa-university" text="Bank Account" href="/company/bank-accounts" />
                <FooterContentLink icon="fa fa-users" text="Team" href="/company/team" />
                <FooterContentLink icon="fa fa-calendar-alt" text="Work Calendar" href="/company/work-calendar" />
              </div>
              <div className="footer-content-others-icon-list">
                <h5 className="footer-content-title">Others</h5>
                <FooterContentLink icon="fa fa-shopping-cart" text="How to buy" href="/how-to-buy" />
                <FooterContentLink icon="fa fa-file-invoice" text="Blog / Car talk" href="/talk" />
              </div>
            </div>
            <div className="col-xs-2 footer-content-help-support">
              <div className="footer-content-help-support-icon-list">
                <h5 className="footer-content-title">Help & Support</h5>
                <FooterContentLink icon="fa fa-headphones-alt" href="/support" text="FAQs" />
                <FooterContentLink
                  icon="fa fa-shopping-cart"
                  href="/article/ufaq-category/reservation-purchase"
                  text="Reservation & Purchase"
                />
                <FooterContentLink
                  icon="fa fa-dollar-sign"
                  href="/article/ufaq-category/payment-refund"
                  text="Payment & Refund"
                />
                <FooterContentLink
                  icon="fa fa-truck"
                  href="/article/ufaq-category/delivery-shipment"
                  text="Delivery & Shipment"
                />
                <FooterContentLink
                  icon="fa fa-list-ul"
                  href="/article/ufaq-category/glossary-of-terms"
                  text="Glossary of Terms"
                />
                <FooterContentLink icon="fa fa-ship" href="/shipping-schedule" text="Shipping Schedule" />
                <FooterContentLink icon="fa fa-envelope" href="/send-inquiry" text="Recommend me a Car" />
              </div>
            </div>
            <div className="col-xs-2 footer-content-our-certificates-payment-method">
              <h5 className="footer-content-title">Our Certificates</h5>
              <div className="footer-content-our-certificates-list">
                <div className="d-inline-block min-w-32-per text-center">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.jumvea.or.jp/members/-579">
                    <i className="icon icon-footer__jumvea_shield" />
                  </a>
                </div>
                <div className="d-inline-block min-w-32-per text-center">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.jumvea.or.jp/members/-579">
                    <i className="icon icon-footer__jumvea" />
                  </a>
                </div>
                <div className="d-inline-block min-w-32-per text-center">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.jumvea.or.jp/members/-579">
                    <i className="icon icon-footer__digicert_secure" />
                  </a>
                </div>
              </div>
              <h5 className="footer-content-title">Payment method</h5>
              <div className="footer-content-payment-method-list-1">
                <div className="d-inline-block min-w-32-per text-center">
                  <a target="_blank" rel="noopener noreferrer" href="/support/payment">
                    <i className="icon icon-footer__visa" />
                  </a>
                </div>
                <div className="d-inline-block min-w-32-per text-center">
                  <a target="_blank" rel="noopener noreferrer" href="/support/payment">
                    <i className="icon icon-footer__master_card" />
                  </a>
                </div>
                <div className="d-inline-block min-w-32-per text-center">
                  <a target="_blank" rel="noopener noreferrer" href="/support/payment">
                    <i className="icon icon-footer__paypal" />
                  </a>
                </div>
              </div>
              <div className="footer-content-payment-method-list-2">
                <div className="d-inline-block min-w-32-per text-center">
                  <a target="_blank" rel="noopener noreferrer" href="/support/payment">
                    <i className="icon icon-footer__bank_transfer" />
                  </a>
                </div>
                <div className="d-inline-block min-w-32-per text-center">
                  <a target="_blank" rel="noopener noreferrer" href="/support/payment">
                    <i className="icon icon-footer__resona_bank" />
                  </a>
                </div>
                <div className="d-inline-block min-w-32-per text-center">
                  <a target="_blank" rel="noopener noreferrer" href="/support/payment">
                    <i className="icon icon-footer__equity" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-3">
              <iframe
                title="car from japan facebook"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCarFromJapan.Official%2F&tabs=timeline&width=280&height=218&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=616121325153748"
                width="280"
                height="218"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
