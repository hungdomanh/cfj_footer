import React, { Component } from 'react'
import Link from 'next/link'

export default class FooterSelectorTypeMake extends Component {
    render() {
        return (
            <Link href={this.props.href}>
                <a className="make-type-icon" href="javascript:void(0)" title={String(this.props.title).toUpperCase()}>
                    <i className={this.props.icon}> </i>
                </a>
            </Link>
        )
    }
}
