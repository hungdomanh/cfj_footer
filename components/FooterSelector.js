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
                                            <FooterSelectorTypeMake title="sedan" icon="icon icon-footer__sedan" href="/cheap-used-sedan-for-sale" />
                                        </div>
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake title="suv" icon="icon icon-footer__suv" href="/cheap-used-suv-for-sale" />
                                        </div>
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake title="convertible" icon="icon icon-footer__convertible" href="/cheap-used-convertible-for-sale" />
                                        </div>
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake title="coupe" icon="icon icon-footer__coupe" href="/cheap-used-coupe-for-sale" />
                                        </div>
                                    </div>
                                    <div className="row m-top-5">
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake title="hatchback" icon="icon icon-footer__hatchback" href="/cheap-used-hatchback-for-sale" />
                                        </div>
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake title="wagon" icon="icon icon-footer__wagon" href="/cheap-used-wagon-for-sale" />
                                        </div>
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake title="truck" icon="icon icon-footer__truck_2" href="/cheap-used-truck-for-sale" />
                                        </div>
                                        <div className="col-xs-3">
                                            <FooterSelectorTypeMake title="bus" icon="icon icon-footer__bus" href="/cheap-used-bus-for-sale" />
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
                                            <FooterSelectorTypeMake title="toyota" icon="icon icon-footer__toyota" href="/cheap-used-toyota-for-sale" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake title="nisan" icon="icon icon-footer__nisan" href="/cheap-used-nisan-for-sale" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake title="honda" icon="icon icon-footer__honda" href="/cheap-used-honda-for-sale" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake title="isuzu" icon="icon icon-footer__isuzu" href="/cheap-used-isuzu-for-sale" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake title="bmw" icon="icon icon-footer__bmw" href="/cheap-used-bmw-for-sale" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake title="volkswagen" icon="icon icon-footer__volkswagen" href="/cheap-used-volkswagen-for-sale" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake title="sabaru" icon="icon icon-footer__sabaru" href="/cheap-used-sabaru-for-sale" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake title="mazda" icon="icon icon-footer__mazda" href="/cheap-used-mazda-for-sale" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake title="suzuki" icon="icon icon-footer__suzuki" href="/cheap-used-suzuki-for-sale" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake title="ford" icon="icon icon-footer__ford" href="/cheap-used-ford-for-sale" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake title="mercedes_benz" icon="icon icon-footer__mercedes_benz" href="/cheap-used-mercedes_benz-for-sale" />
                                        </div>
                                        <div className="col-xs-2">
                                            <FooterSelectorTypeMake title="volvo" icon="icon icon-footer__volvo" href="/cheap-used-volvo-for-sale" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-2">
                            <b className="footer-selector-title">Car by Prices</b>
                            <FooterSelectorOptionPrice text="Under US $1000" href="/cheap-used-cars-for-sale-under-usd1000" />
                            <FooterSelectorOptionPrice text="US $1,000 - $1,500" href="/cheap-used-cars-for-sale-usd1000-1500" />
                            <FooterSelectorOptionPrice text="US $1,500 - $2,000" href="/cheap-used-cars-for-sale-usd1500-2000" />
                            <FooterSelectorOptionPrice text="US $2,000 - $2,500" href="/cheap-used-cars-for-sale-usd2000-2500" />
                            <FooterSelectorOptionPrice text="US $2,500 - $3,000" href="/cheap-used-cars-for-sale-usd2500-3000" />
                            <FooterSelectorOptionPrice text="Over US $3,000" href="/cheap-used-cars-for-sale-over-usd3000" />
                        </div>
                        <div className="col-xs-2">
                            <b className="footer-selector-title">Car by Discounts</b>
                            <FooterSelectorOptionDiscount text="70% Off or More" href="/cheap-used-cars-for-sale-over-off70" />
                            <FooterSelectorOptionDiscount text="60% Off or More" href="/cheap-used-cars-for-sale-over-off60" />
                            <FooterSelectorOptionDiscount text="50% Off or More" href="/cheap-used-cars-for-sale-over-off50" />
                            <FooterSelectorOptionDiscount text="40% Off or More" href="/cheap-used-cars-for-sale-over-off40" />
                            <FooterSelectorOptionDiscount text="30% Off or More" href="/cheap-used-cars-for-sale-over-off30" />
                            <FooterSelectorOptionDiscount text="1% - 30% Off" href="/cheap-used-cars-for-sale-off1-30" />
                        </div>
                        <div className="col-xs-2">
                            <b className="footer-selector-title">CFJ Local Services</b>
                            <FooterSelectorOptionLocal icon="icon icon-footer__bahamas" text="CFJ Bahamas" href="/cfj-bahamas" />
                            <FooterSelectorOptionLocal icon="icon icon-footer__kenya" text="CFJ Kenya" href="/cfj-kenya" />
                            <FooterSelectorOptionLocal icon="icon icon-footer__mozambique" text="CFJ Mozambique" href="/cfj-mozambique" />
                            <FooterSelectorOptionLocal icon="icon icon-footer__malawi" text="CFJ Malawi" href="/cfj-malawi" />
                            <FooterSelectorOptionLocal icon="icon icon-footer__tanzania" text="CFJ Tanzania" href="/cfj-tanzania" />
                            <FooterSelectorOptionLocal icon="fa fa-globe-asia" text="Show all countries" href="/cheap-used-cars-for-sale" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
