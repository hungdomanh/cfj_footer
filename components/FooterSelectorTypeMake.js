import React, { Component } from 'react'
import Link from 'next/link'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const tooltip = (
    <Tooltip id="tooltip">
        <strong>Holy guacamole!</strong>
    </Tooltip>
);
export default class FooterSelectorTypeMake extends Component {
    render() {
        return (
            <Link href={this.props.href}>
                    <a className="make-type-icon" href="javascript:void(0)">
                        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip" delayShow="0.1s" >{String(this.props.title).toUpperCase()}</Tooltip>}>
                            <i className={this.props.icon}> </i>
                        </OverlayTrigger>
                    </a>
            </Link>
        )
    }
}
