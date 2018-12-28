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
                                            <FooterSelectorTypeMake icon="icon icon-sedan" href="#car" />
                                        </div>
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake icon="icon icon-suv" href="#car" />
                                        </div>
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake icon="icon icon-convertible" href="#car" />
                                        </div>
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake icon="icon icon-coupe" href="#car" />
                                        </div>
                                    </div>
                                    <div className="row m-top-5">
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake icon="icon icon-hatchback" href="#car" />
                                        </div>
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake icon="icon icon-wagon" href="#car" />
                                        </div>
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake icon="icon icon-truck_2" href="#car" />
                                        </div>
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake icon="icon icon-bus" href="#car" />
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
                                            <FooterSelectorTypeMake icon="icon icon-toyota" href="#car" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-nisan" href="#car" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-honda" href="#car" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-isuzu" href="#car" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-bmw" href="#car" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-volkswagen" href="#car" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-sabaru" href="#car" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-mazda" href="#car" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-suzuki" href="#car" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-ford" href="#car" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-mercedes_benz" href="#car" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake icon="icon icon-volvo" href="#car" />
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
                            <FooterSelectorOptionLocal icon="icon icon-bahamas" text="CFJ Bahamas" href="#" />
                            <FooterSelectorOptionLocal icon="icon icon-kenya" text="CFJ Kenya" href="#" />
                            <FooterSelectorOptionLocal icon="icon icon-mozambique" text="CFJ Mozambique" href="#" />
                            <FooterSelectorOptionLocal icon="icon icon-malawi" text="CFJ Malawi" href="#" />
                            <FooterSelectorOptionLocal icon="icon icon-tanzania" text="CFJ Tanzania" href="#" />
                            <FooterSelectorOptionLocal icon="fa fa-globe-asia" text="Show all countries" href="#" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
