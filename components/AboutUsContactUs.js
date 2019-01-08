import React, { Component } from 'react'

export default class AboutUsContactUs extends Component {
  handleSend = () => {}
  render() {
    return (
      <div className="contact-us">
        <h2 className="margin-xs strong-color">
          <b>Contact Us</b>
        </h2>
        <hr />

        <div className="line-heigth-25">
          Check our <a href="/support">FAQ</a> section to find answer for common questions.
          <br />
          OR you can reach us by any of the below methods
        </div>
        <div className="contact-type-list row-flex space-between">
          <div className="contact-type col-flex center text-center">
            <div className="icon">
              <i className="fa fa-envelope-open fa-3x" />
            </div>
            <div className="content email">
              <b>Email: </b> <br />
              <a href="mailto:ask@carfromjapan.com">ask@carfromjapan.com</a>
            </div>
          </div>
          <div className="contact-type col-flex center text-center">
            <div className="icon">
              <i className="fa fa-phone fa-3x" />
            </div>
            <div className="content phone">
              <b>Phone: </b> <br />
              <a href="tel:+81345406692">(EN) +81 3 4540 6692</a> <br />
              <a href="tel:+81345406692">(JP) +81 3 4540 6692</a>
            </div>
          </div>
          <div className="contact-type col-flex center text-center">
            <div className="icon">
              <i className="fab fa-whatsapp fa-3x" />
            </div>
            <div className="content whatsapp">
              <b>Whatsapp: </b> <br />
              <a href="tel:+819084025615">+8190-8402-5615</a> <br />
              <span>(Mr. Ken)</span>
            </div>
          </div>
          <div className="contact-type col-flex center text-center">
            <div className="icon">
              <i className="fa fa-fax fa-3x" />
            </div>
            <div className="content fax">
              <b>Fax: </b> <br />
              <a href="tel:+81367354633 ">+81 3 6735 4633 </a>
            </div>
          </div>
        </div>
        <div className="send-message row">
          <h3>Send Message</h3>
          <div className="col-xs-4 form-group">
            <input type="text" class="form-control" placeholder="Your name" />
          </div>
          <div className="col-xs-4 form-group">
            <input type="email" class="form-control" placeholder="Your email" />
          </div>
          <div className="col-xs-4 form-group">
            <input type="phone" class="form-control" placeholder="Phone" />
          </div>
          <div className="col-xs-12">
            <textarea type="textarea" rows="4" class="form-control" placeholder="Message" />
          </div>
          <button className="btn btn-send" onClick={this.handleSend}>
            Send
          </button>
        </div>
      </div>
    )
  }
}
