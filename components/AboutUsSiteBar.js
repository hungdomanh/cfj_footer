import React, { Component } from 'react'
import Router from 'next/router'

export default class AboutUsSiteBar extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            corporate: "",
            ourStory: "",
            bankAccounts: "",
            officeCalendar: "",
            whyChooseUs: "",
            testimonials: "",
            contactUs: ""
        };    
        console.log(Router.router)
    };
    
    componentDidMount() {
        switch (Router.router.asPath) {
            case "/corporate":
                this.setState({corporate: "active"})
                break;
            case "/our-story":
                this.setState({ourStory: "active"})
                break;
            case "/bank-accounts":
                this.setState({bankAccounts: "active"})
                break;
            case "/office-calendar":
                this.setState({officeCalendar: "active"})
                break;
            case "/why-choose-us":
                this.setState({whyChooseUs: "active"})
                break;
            case "/testimonials":
                this.setState({testimonials: "active"})
                break;
            case "/contact-us":
                this.setState({contactUs: "active"})
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div id="about-us-site-bar">
                <div className="list-group">
                    <a href="/corporate" className={"list-group-item " + this.state.corporate}>
                            Corporate Overview
                            <span className="badge"><i className="fa fa-chevron-right "></i></span>
                    </a>
                    <a href="/our-story" className={"list-group-item " + this.state.ourStory}>
                            Our Story
                            <span className="badge"><i className="fa fa-chevron-right "></i></span>
                    </a>
                    <a href="/bank-accounts" className={"list-group-item " + this.state.bankAccounts}>
                            Bank Accounts
                            <span className="badge"><i className="fa fa-chevron-right "></i></span>
                    </a>
                    <a href="/office-calendar" className={"list-group-item " + this.state.officeCalendar}>
                            Office & Calendar
                            <span className="badge"><i className="fa fa-chevron-right "></i></span>
                    </a>
                    <a href="/why-choose-us" className={"list-group-item " + this.state.whyChooseUs}>
                            Why Choose Us
                            <span className="badge"><i className="fa fa-chevron-right "></i></span>
                    </a>
                    <a href="/testimonials" className={"list-group-item " + this.state.testimonials}>
                            Voice of Clients
                            <span className="badge"><i className="fa fa-chevron-right "></i></span>
                    </a>
                    <a href="/contact-us" className={"list-group-item " + this.state.contactUs}>
                            Contact Us
                            <span className="badge"><i className="fa fa-chevron-right "></i></span>
                    </a>
                </div>
            </div>
        )
    }
}
