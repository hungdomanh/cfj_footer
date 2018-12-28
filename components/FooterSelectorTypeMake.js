import React, { Component } from 'react'
import Link from 'next/link'

export default class FooterSelectorTypeMake extends Component {
    render() {
        return (
            <Link href={this.props.href}>
                <a href="javascript:void(0)">
                    <i className={this.props.icon}> </i>
                </a>
            </Link>
        )
    }
}
