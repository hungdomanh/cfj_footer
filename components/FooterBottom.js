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
                  <a href="/sitemap">Sitemap</a>
                </div>
                <div className="p-left-10 p-right-10 d-inline-block fz-700">|</div>
                <div className="d-inline-block">
                  <a href="/company/privacy-policy">Privacy Policy</a>
                </div>
                <div className="p-left-10 p-right-10 d-inline-block fz-700">|</div>
                <div className="d-inline-block">
                  <a href="/company/conditions-of-use">Condition of Use</a>
                </div>
              </div>
              <div>2019 @ All Right Reserved. Authorized Used-Car Dealer in Japan.</div>
              <div>
                <div className="social-icon fb">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/CarFromJapan.Official">
                    <i className="fab fa-facebook-f" />
                  </a>
                </div>
                <div className="social-icon tw">
                  <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/CarFromJapan">
                    <i className="fab fa-twitter" />
                  </a>
                </div>
                <div className="social-icon gp">
                  <a target="_blank" rel="noopener noreferrer" href="https://plus.google.com/+CarfromjapanLtd">
                    <i className="fab fa-google-plus-g" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-right">
              <div>Japanese Government License No# Tokyo 305561505308</div>
              <div>Member of JUMVEA (Approved by Government of Japan) No# xxxx</div>
              <div>Member of Tokyo Chamber of Commerce | No#</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
