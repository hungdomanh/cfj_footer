import React from 'react'
import fetch from 'isomorphic-unfetch'
// var fetch = require('isomorphic-unfetch')

import Layout from '../components/Layout'
import AboutUsLayout from '../components/AboutUsLayout'
import AboutUsTestimonialList from '../components/AboutUsTestimonialList'

class Index extends React.Component {
    static async getInitialProps ({ reduxStore, req }) {
        const res = await fetch('https://carfromjapan.com/api/satisfaction?public=true')
        const testimonials = await res.json()
        console.log(`Show testimonials fetched. Count: ${testimonials.length}`)
        return {
            testimonials: testimonials
        }
    }
    
    render() {
        return (
            <Layout>
                <AboutUsLayout>
                    <AboutUsTestimonialList testimonials={this.props.testimonials} />
                </AboutUsLayout>
            </Layout>
        )
    }
}


export default Index