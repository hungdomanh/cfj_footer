import React, { Component } from 'react'
import Link from 'next/link'

export default class FooterSelectorOptionDiscount extends Component {
    render() {
        return (
            <div className="footer-selector-option-discount">
                <i className="fa fa-tag m-right-5"></i>
                <Link href={this.props.href}>
                    <a href="#">
                        {this.props.text}
                    </a>
                </Link>
            </div>
        )
    }
}
