import React from 'react'

import Layout from '../components/Layout'
import AboutUsLayout from '../components/AboutUsLayout'
import AboutUsCorporate from '../components/AboutUsCorporate'

class Index extends React.Component {
    static getInitialProps ({ reduxStore, req }) {
        return {}
    }
    
    render() {
        return (
            <Layout>
                <AboutUsLayout>
                    <AboutUsCorporate/>
                </AboutUsLayout>
            </Layout>
        )
    }
}


export default Index