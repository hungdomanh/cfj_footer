import React, { Component } from 'react'
import Link from 'next/link'
import { Carousel } from 'react-bootstrap'
import Rating from 'react-rating'
import { getImageCDN } from "../assets/js/main"


export default class AboutUsTestimonial extends Component {
    render() {
        const testimonial = this.props.testimonial;
        return (
            <div className="testimonial">
                <div className="info row-flex space-between">
                    <div className="buyer">
                        <div><b className="strong-color">{testimonial.name}</b></div>
                        <div>
                            <i className="fa fa-check-circle m-right-7"></i>
                            Verified Buyer
                        </div>
                        <div>
                            <img className="m-right-7" src={"//static.carfromjapan.com/public/system/assets/img/flags/" + String(testimonial.country).toLowerCase() + ".png"} alt={testimonial.country} width="25" />
                            {testimonial.country} 
                        </div>
                    </div>
                    <div>
                        <div className="testimonial-satisfield">
                            <i class="fa fa-thumbs-up"></i> {" "}
                            Satisfied
                        </div>
                        <div className="testimonial-stars">
                            <Rating
                                placeholderRating={testimonial.ratingValue}
                                emptySymbol='fa fa-star fa-star-grey'
                                placeholderSymbol='fa fa-star fa-star-yellow'
                                readonly='true'
                            />
                        </div>
                    </div>
                </div>
                <div className="client-photos">
                    <Carousel>
                        {
                            testimonial.images.length ? (
                                testimonial.images.map((image, index) => {
                                    return  <Carousel.Item>
                                                <img alt="client-photo" src={getImageCDN(image, 640, 0, 'https')} />
                                            </Carousel.Item>
                                })
                            ) : null
                        }
                    </Carousel>
                </div>
                <div className="comment">{testimonial.comment}</div>
                <hr/>
                <div className="purchased-car row">
                    <div className="col-xs-12">
                        Purchased car before delivery (on website)
                    </div>
                    <div className="col-xs-6 purchased-car-image">
                        <img src={getImageCDN(testimonial.car.images[0], 640, 0, 'https')} alt=""/>
                    </div>
                    <div className="col-xs-6 purchased-car-detail">
                        <div><Link href={testimonial.car.url}><b className="strong-color">{testimonial.car.title}</b></Link></div>
                        <div>Model Code: KDN185</div>
                    </div>
                </div>
            </div>
        )
    }
}
