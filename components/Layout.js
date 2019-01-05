import React, { Component } from 'react'
import Head from "./Head"
import Footer from './Footer';

import "../src/spritesmith-generated/sprite.css"
import "../assets/css/about-us.scss"
import "../assets/css/footer.scss"
import "../assets/css/main.scss"

export default class Layout extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return ( 
            <div>
                <body>
                <Head/>
                    {/* Header */}
                    
                    {/* Body */}
                    {this.props.children}

                    <Footer/>
                </body>
            </div>
        )
    }
}
