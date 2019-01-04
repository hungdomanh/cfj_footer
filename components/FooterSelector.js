import React, { Component } from 'react'

import FooterSelectorOptionPrice from './FooterSelectorOptionPrice';
import FooterSelectorOptionDiscount from './FooterSelectorOptionDiscount';
import FooterSelectorOptionLocal from './FooterSelectorOptionLocal';
import FooterSelectorTypeMake from './FooterSelectorTypeMake';

export default class FooterSelector extends Component {
    render() {
        return (
            <div id="footer-selector" className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6">
                            <div className="row">
                                <div className="col-xs-1">
                                    <div className="footer-selector-type">
                                        TYPE
                                    </div>
                                </div>
                                <div className="col-xs-11 p-right-25">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake icon="icon icon-footer__sedan" href="#car" />
                                        </div>
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake icon="icon icon-footer__suv" href="#car" />
                                        </div>
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake icon="icon icon-footer__convertible" href="#car" />
                                        </div>
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake icon="icon icon-footer__coupe" href="#car" />
                                        </div>
                                    </div>
                                    <div className="row m-top-5">
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake icon="icon icon-footer__hatchback" href="#car" />
                                        </div>
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake icon="icon icon-footer__wagon" href="#car" />
                                        </div>
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake icon="icon icon-footer__truck_2" href="#car" />
                                        </div>
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake icon="icon icon-footer__bus" href="#car" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-top-30">
                                <div className="col-xs-1">
                                    <div className="footer-selector-make">
                                        MAKE
                                    </div>
                                </div>
                                <div className="col-xs-11 p-right-25">
                                    <div className="row">
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-footer__toyota" href="#car" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-footer__nisan" href="#car" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-footer__honda" href="#car" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-footer__isuzu" href="#car" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-footer__bmw" href="#car" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-footer__volkswagen" href="#car" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-footer__sabaru" href="#car" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-footer__mazda" href="#car" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-footer__suzuki" href="#car" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-footer__ford" href="#car" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-footer__mercedes_benz" href="#car" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-footer__volvo" href="#car" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-2">
                            <b className="footer-selector-title">Car by Prices</b>
                            <FooterSelectorOptionPrice text="Under US $1000" href="#" />
                            <FooterSelectorOptionPrice text="US $1,001 - $2,000" href="#" />
                            <FooterSelectorOptionPrice text="US $2,001 - $3,000" href="#" />
                            <FooterSelectorOptionPrice text="US $3,001 - $5,000" href="#" />
                            <FooterSelectorOptionPrice text="US $5,001 - $7,000" href="#" />
                            <FooterSelectorOptionPrice text="Over US $7,000" href="#" />
                        </div>
                        <div className="col-xs-2">
                            <b className="footer-selector-title">Car by Discounts</b>
                            <FooterSelectorOptionDiscount text="70% Off or More" href="#" />
                            <FooterSelectorOptionDiscount text="60% Off or More" href="#" />
                            <FooterSelectorOptionDiscount text="50% Off or More" href="#" />
                            <FooterSelectorOptionDiscount text="40% Off or More" href="#" />
                            <FooterSelectorOptionDiscount text="30% Off or More" href="#" />
                            <FooterSelectorOptionDiscount text="1% - 30% Off" href="#" />
                        </div>
                        <div className="col-xs-2">
                            <b className="footer-selector-title">CFJ Local Services</b>
                            <FooterSelectorOptionLocal icon="icon icon-footer__bahamas" text="CFJ Bahamas" href="#" />
                            <FooterSelectorOptionLocal icon="icon icon-footer__kenya" text="CFJ Kenya" href="#" />
                            <FooterSelectorOptionLocal icon="icon icon-footer__mozambique" text="CFJ Mozambique" href="#" />
                            <FooterSelectorOptionLocal icon="icon icon-footer__malawi" text="CFJ Malawi" href="#" />
                            <FooterSelectorOptionLocal icon="icon icon-footer__tanzania" text="CFJ Tanzania" href="#" />
                            <FooterSelectorOptionLocal icon="fa fa-globe-asia" text="Show all countries" href="#" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
