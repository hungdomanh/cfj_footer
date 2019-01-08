import React, { Component } from 'react'

import FooterSelector from './FooterSelector'
import FooterContent from './FooterContent'
import FooterBottom from './FooterBottom'

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <FooterSelector />
        <FooterContent />
        <hr className="hr-0-0" />
        <FooterBottom />
      </div>
    )
  }
}
