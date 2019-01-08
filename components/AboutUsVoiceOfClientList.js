import React, { Component } from 'react'

import AboutUsVoiceOfClient from "./AboutUsVoiceOfClient"

export default class AboutUsVoiceOfClientList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLength: 10,
            maxShowLength: 16,
            showAll: false
        }
    }
    componentWillMount() {
        if (this.props.testimonials.length < this.state.showLength) {
            this.setState({
                showLength: this.props.testimonials.length,
                maxShowLength: this.props.testimonials.length
            })
        }
    }
    listLeft = () => {
        let listLeft = []
        for (let i = 0; i < this.state.showLength; i+=2) {
            listLeft.push(<AboutUsVoiceOfClient key={i} testimonial={this.props.testimonials[i]} />)
        }
        return listLeft
    }
    listRight = () => {
        const listRight = []
        for (let i = 1; i < this.state.showLength; i+=2) {
            listRight.push(<AboutUsVoiceOfClient key={i} testimonial={this.props.testimonials[i]} />)
        }
        return listRight
    }
    hanldeShowMore = () => {
        const {maxShowLength} = this.state
        this.setState({
            showAll: true,
            showLength: maxShowLength
        })
    }
    hanldeShowAll = () => {
        
    }
    render() {
        const testimonials = this.props.testimonials;
        return (
            <div className="voice-of-client-list">
                <h2 className="margin-xs strong-color"><b>Voices Of Clients</b></h2>
                <hr/>
                <div className="row">
                    <div className="col-xs-6">
                        {this.listLeft()}
                    </div>
                    <div className="col-xs-6">
                        {this.listRight()}
                        
                    </div>
                </div>
                <div className="text-center">
                    {
                        !this.state.showAll && <button className="btn btn-show-more" onClick={this.hanldeShowMore} >Show more</button>
                    }
                    {
                        this.state.showAll && <button className="btn btn-show-all" onClick={this.hanldeShowAll} ><a href="/testimonials">Show All</a></button>
                    }

                </div>
            </div>
        )
    }
}
