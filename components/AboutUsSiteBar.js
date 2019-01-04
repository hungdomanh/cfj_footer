import React, { Component } from 'react'
import Link from 'next/link'

export default class AboutUsSiteBar extends Component {
    render() {
        return (
            <div id="about-us-site-bar">
                <div class="list-group">
                    <Link href="#">
                        <a href="#" class="list-group-item">
                            <span class="badge"><i className="fa fa-chevron-right "></i></span>
                            Corporate Overview
                        </a>
                    </Link>
                    <Link href="#">
                        <a href="#" class="list-group-item">
                            <span class="badge"><i className="fa fa-chevron-right "></i></span>
                            Our Story
                        </a>
                    </Link>
                    <Link href="#">
                        <a href="#" class="list-group-item">
                            <span class="badge"><i className="fa fa-chevron-right "></i></span>
                            Bank Accounts
                        </a>
                    </Link>
                    <Link href="#">
                        <a href="#" class="list-group-item active">
                            <span class="badge"><i className="fa fa-chevron-right "></i></span>
                            Office & Calendar
                        </a>
                    </Link>
                    <Link href="#">
                        <a href="#" class="list-group-item">
                            <span class="badge"><i className="fa fa-chevron-right "></i></span>
                            Why Choose Us
                        </a>
                    </Link>
                    <Link href="#">
                        <a href="#" class="list-group-item">
                            <span class="badge"><i className="fa fa-chevron-right "></i></span>
                            Voice of Clients
                        </a>
                    </Link>
                    <Link href="#">
                        <a href="#" class="list-group-item">
                            <span class="badge"><i className="fa fa-chevron-right "></i></span>
                            Contact Us
                        </a>
                    </Link>
                </div>
            </div>
        )
    }
}
