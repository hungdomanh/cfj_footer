import React from 'react'
import fetch from 'isomorphic-unfetch'
// var fetch = require('isomorphic-unfetch')

import Layout from '../../components/Layout'
import AboutUsLayout from '../../components/AboutUsLayout'
import AboutUsVoiceOfClientList from '../../components/AboutUsVoiceOfClientList'

class Index extends React.Component {
  static async getInitialProps({ reduxStore, req }) {
    const res = await fetch('https://carfromjapan.com/api/satisfaction?public=true')
    const testimonials = await res.json()
    return {
      testimonials: testimonials
    }
  }

  render() {
    return (
      <Layout>
        <AboutUsLayout>
          <AboutUsVoiceOfClientList testimonials={this.props.testimonials} />
        </AboutUsLayout>
      </Layout>
    )
  }
}

export default Index
