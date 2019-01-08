import React, { Component } from 'react'

export default class AboutUsWhyChooseUs extends Component {
    render() {
        return (
            <div className="why-choose-us">
                <h2 className="margin-xs strong-color"><b>Why Choose Us</b></h2>
                <hr/>
                
                <div className="row">
                    <div className="col-image left">
                        <img width={"100%"} src="/static/img/about-us-why-choose-us__customer.png" alt=""/>
                    </div>
                    <div className="col-content right">
                        <div className="row row-flex center">
                            <div className="col-xs-3 text-left index">
                                01
                            </div>
                            <div className="col-xs-9 title">
                                98% Customer Satisfaction
                            </div>
                        </div>
                        <p>Customer satisfaction is our 1st priority. Out of the 80,000+ customers we served so far, we have a 98% customer satisfaction rate.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-content left">
                        <div className="row row-flex center">
                            <div className="col-xs-3 text-left index">
                                02
                            </div>
                            <div className="col-xs-9 title">
                                Trusted by buyers in <br/>
                                50+ countries
                            </div>
                        </div>
                        <p>Every year, we export cars from Japan to 50+ countries. Wear egrateful for the trust and continuous business from buyers all over the world.</p>
                    </div>
                    <div className="col-image right">
                        <img width={"100%"} src="/static/img/about-us-why-choose-us__contries.png" alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-image left">
                        <img width={"100%"} src="/static/img/about-us-why-choose-us__price.png" alt=""/>
                    </div>
                    <div className="col-content right">
                        <div className="row row-flex center">
                            <div className="col-xs-3 text-left index">
                                03
                            </div>
                            <div className="col-xs-9 title">
                                10,000+ cars to choose from
                            </div>
                        </div>
                        <p>We have 10,000+ cars available with pictures and detailed information shown in our website. You can compare spec, prices, condition and find the best car for you!</p>
                    </div>
                </div>
            </div>
        )
    }
}
