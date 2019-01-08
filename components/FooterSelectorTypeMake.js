import React, { Component } from 'react'
import Link from 'next/link'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

export default class FooterSelectorTypeMake extends Component {
  render() {
    return (
      <Link href={this.props.href}>
        <a className="make-type-icon" href="#">
          <OverlayTrigger
            placement="top"
            delayShow={0.1}
            overlay={<Tooltip id="tooltip">{String(this.props.title).toUpperCase()}</Tooltip>}
          >
            <i className={this.props.icon}> </i>
          </OverlayTrigger>
        </a>
      </Link>
    )
  }
}
