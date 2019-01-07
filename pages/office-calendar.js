import React from 'react'

import Layout from '../components/Layout'
import AboutUsLayout from '../components/AboutUsLayout'
import AboutusOfficeCalendar from '../components/AboutusOfficeCalendar'

class Index extends React.Component {
    static getInitialProps ({ reduxStore, req }) {
        return {}
    }
    
    render() {
        return (
            <Layout>
                <AboutUsLayout>
                    <AboutusOfficeCalendar/>
                </AboutUsLayout>
            </Layout>
        )
    }
}


export default Index