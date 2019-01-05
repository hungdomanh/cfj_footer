import React from 'react'

import Layout from '../components/Layout'
import AboutUsLayout from '../components/AboutUsLayout'
import AboutUsOurStory from '../components/AboutUsOurStory'

class Index extends React.Component {
    static getInitialProps ({ reduxStore, req }) {
        return {}
    }
    
    render() {
        return (
            <Layout>
                <AboutUsLayout>
                    <AboutUsOurStory/>
                </AboutUsLayout>
            </Layout>
        )
    }
}


export default Index