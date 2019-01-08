import React, { Component } from 'react'

export default class FooterSelectorOptionLocal extends Component {
  render() {
    return (
      <div className="footer-selector-option-discount">
        <i className={this.props.icon + ' m-right-7'} />
        <a href={this.props.href}>
          <a href="#">{this.props.text}</a>
        </a>
      </div>
    )
  }
}
