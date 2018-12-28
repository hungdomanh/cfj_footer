import React, { Component } from 'react'
import Link from 'next/link'

export default class FooterSelectorOptionLocal extends Component {
    render() {
        return (
            <div className="footer-selector-option-discount">
                <i className={this.props.icon + " m-right-7"}></i>
                <Link href={this.props.href}>
                    {this.props.text}
                </Link>
            </div>
        )
    }
}
