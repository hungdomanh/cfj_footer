import React from 'react'

import Layout from '../components/Layout'
import AboutUsLayout from '../components/AboutUsLayout'
import AboutUsBankList from '../components/AboutUsBankList'

class Index extends React.Component {
    static getInitialProps ({ reduxStore, req }) {
        return {}
    }
    
    render() {
        return (
            <Layout>
                <AboutUsLayout>
                    <AboutUsBankList/>
                </AboutUsLayout>
            </Layout>
        )
    }
}


export default Index