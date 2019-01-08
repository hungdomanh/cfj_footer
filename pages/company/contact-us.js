import React from 'react'

import Layout from '../../components/Layout'
import AboutUsLayout from '../../components/AboutUsLayout'
import AboutUsContactUs from '../../components/AboutUsContactUs'

class Index extends React.Component {
    static getInitialProps ({ reduxStore, req }) {
        return {}
    }
    
    render() {
        return (
            <Layout>
                <AboutUsLayout>
                    <AboutUsContactUs/>
                </AboutUsLayout>
            </Layout>
        )
    }
}


export default Index