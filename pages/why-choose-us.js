import React from 'react'

import Layout from '../components/Layout'
import AboutUsLayout from '../components/AboutUsLayout'
import AboutUsWhyChooseUs from '../components/AboutUsWhyChooseUs'

class Index extends React.Component {
    static getInitialProps ({ reduxStore, req }) {
        return {}
    }
    
    render() {
        return (
            <Layout>
                <AboutUsLayout>
                    <AboutUsWhyChooseUs/>
                </AboutUsLayout>
            </Layout>
        )
    }
}


export default Index