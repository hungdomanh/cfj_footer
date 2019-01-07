import React, { Component } from 'react'

import AboutUsTestimonial from "./AboutUsTestimonial"

export default class AboutUsTestimonialList extends Component {

    hanldeShowMore = () => {
        // fetch more
    }
    render() {
        const testimonials = this.props.testimonials;
        return (
            <div className="testimonial-list">
                <h2 className="margin-xs strong-color"><b>Voices Of Clients</b></h2>
                <hr/>
                <div className="row">
                    <div className="col-xs-6">
                        {
                            testimonials.length ? (
                                testimonials.map((testimonial, index) => {
                                    if (index % 2 == 0) {
                                        return <AboutUsTestimonial key={index} testimonial={testimonial} />
                                    }
                                })
                            ) : null
                        }
                    </div>
                    <div className="col-xs-6">
                        {
                            testimonials.length ? (
                                testimonials.map((testimonial, index) => {
                                    if (index % 2 == 1) {
                                        return <AboutUsTestimonial key={index} testimonial={testimonial} />
                                    }
                                })
                            ) : null
                        }
                    </div>
                </div>
                <div className="text-center">
                        <button className="btn btn-show-more" onClick={this.hanldeShowMore} >Show more</button>
                </div>
            </div>
        )
    }
}
