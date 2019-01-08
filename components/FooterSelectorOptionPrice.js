import React, { Component } from 'react'
import Link from 'next/link'

export default class FooterSelectorOptionPrice extends Component {
  render() {
    return (
      <div className="footer-selector-option-price">
        <i className="fa fa-award m-right-5" />
        <Link href={this.props.href}>
          <a href="#">{this.props.text}</a>
        </Link>
      </div>
    )
  }
}
