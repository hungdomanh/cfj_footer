import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'

export default class AboutUsSiteBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      corporate: '',
      ourStory: '',
      bankAccounts: '',
      officeCalendar: '',
      whyChooseUs: '',
      testimonials: '',
      contactUs: ''
    }
  }

  componentDidMount() {
    switch (Router.router.asPath) {
      case '/company/corporate':
        this.setState({ corporate: 'active' })
        break
      case '/company/cfj-story':
        this.setState({ ourStory: 'active' })
        break
      case '/company/bank-accounts':
        this.setState({ bankAccounts: 'active' })
        break
      case '/company/office-calendar':
        this.setState({ officeCalendar: 'active' })
        break
      case '/company/why-choose-cfj':
        this.setState({ whyChooseUs: 'active' })
        break
      case '/company/voice-of-clients':
        this.setState({ testimonials: 'active' })
        break
      case '/company/contact-us':
        this.setState({ contactUs: 'active' })
        break
      default:
        break
    }
  }

  render() {
    return (
      <div id="about-us-site-bar">
        <div className="list-group">
          <Link href="/company/corporate">
            <a className={'list-group-item ' + this.state.corporate}>
              Corporate Overview
              <span className="badge">
                <i className="fa fa-chevron-right " />
              </span>
            </a>
          </Link>
          <Link href="/company/cfj-story">
            <a className={'list-group-item ' + this.state.ourStory}>
              Our Story
              <span className="badge">
                <i className="fa fa-chevron-right " />
              </span>
            </a>
          </Link>
          <Link href="/company/bank-accounts">
            <a className={'list-group-item ' + this.state.bankAccounts}>
              Bank Accounts
              <span className="badge">
                <i className="fa fa-chevron-right " />
              </span>
            </a>
          </Link>
          <Link href="/company/office-calendar">
            <a className={'list-group-item ' + this.state.officeCalendar}>
              Office & Calendar
              <span className="badge">
                <i className="fa fa-chevron-right " />
              </span>
            </a>
          </Link>
          <Link href="/company/why-choose-cfj">
            <a className={'list-group-item ' + this.state.whyChooseUs}>
              Why Choose Us
              <span className="badge">
                <i className="fa fa-chevron-right " />
              </span>
            </a>
          </Link>
          <Link href="/company/voice-of-clients">
            <a className={'list-group-item ' + this.state.testimonials}>
              Voice of Clients
              <span className="badge">
                <i className="fa fa-chevron-right " />
              </span>
            </a>
          </Link>
          <Link href="/company/contact-us">
            <a className={'list-group-item ' + this.state.contactUs}>
              Contact Us
              <span className="badge">
                <i className="fa fa-chevron-right " />
              </span>
            </a>
          </Link>
        </div>
      </div>
    )
  }
}
