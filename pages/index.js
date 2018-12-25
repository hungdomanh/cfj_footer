import React from 'react'

import Footer from '../components/Footer'

// import "jquery";
// import "popper.js";
// import "bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/spritesmith-generated/sprite.css"
// import "../src/spritesmith-generated/sprite.styl"

import "../assets/css/footer.scss"
import "../assets/css/main.scss"

class Index extends React.Component {
    static getInitialProps ({ reduxStore, req }) {
        const isServer = !!req
        return {}
    }
    
    render() {
        return (
            <div>
                <h1>Footer</h1>
                <Footer></Footer>

            </div>
        )
    }
}


export default Index