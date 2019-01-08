import React from 'react'

import Layout from '../components/Layout'

class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    return {}
  }

  render() {
    return (
      <div>
        <Layout />
      </div>
    )
  }
}

export default Index
