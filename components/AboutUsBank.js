import React, { Component } from 'react'

export default class AboutUsBank extends Component {
    render() {
        return (
            <div className="bank">
                <div className="title-logo row-flex space-between">
                    <h3 className="title">1. RESONA Bank</h3>
                    <i className="icon icon-logo_footer"></i>
                </div>
                <div>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <div className="block-left text-left">Bank Name</div>
                            <div className="block-right text-left">RESONA BANK, LTD.</div>
                        </li>
                        <li class="list-group-item">
                            <div className="block-left text-left">Bank SWIFT Code</div>
                            <div className="block-right text-left">DIWAJPJT</div>
                        </li>
                        <li class="list-group-item">
                            <div className="block-left text-left">Bank Code</div>
                            <div className="block-right text-left">0010</div>
                        </li>
                        <li class="list-group-item">
                            <div className="block-left text-left">Branch Name</div>
                            <div className="block-right text-left">ITABASHI BRANCH</div>
                        </li>
                        <li class="list-group-item">
                            <div className="block-left text-left">Branch Address</div>
                            <div className="block-right text-left">3 -1 -1 ITABASHI-KU TOKYO JAPAN</div>
                        </li>
                        <li class="list-group-item">
                            <div className="block-left text-left">Account Number</div>
                            <div className="block-right text-left">598 - 3849646</div>
                        </li>
                        <li class="list-group-item">
                            <div className="block-left text-left">Account Holders' Name
                                <div className="text-color">(Beneficiary's Name)</div>
                            </div>
                            <div className="block-right text-left">Car From Japan Co., Ltd.
                                <div className="white-color">.</div>
                            </div>
                        </li>
                        <li class="list-group-item ">
                            <div className="block-left text-left">Account Holders' Address
                                <div className="text-color">(Beneficiary's Address)</div>
                            </div>
                            <div className="block-right text-left">MITA 2-7-4, MEGURO KU, TOKYO, JAPAN 153-0062
                                <div className="white-color">.</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div className="block-left text-left">Account Holders' Contacts
                                <div className="text-color">(Beneficiary's Contacts)</div>
                                <br/>{" "}
                            </div>
                            <div className="block-right text-left">
                                <div>
                                    <i className="fa fa-envelope"></i>
                                    ask@carfromjapan.com
                                </div>
                                <div>
                                    <i className="fa fa-phone"></i>
                                    +81 3 4405 9092
                                </div>
                                <div>
                                    <i className="fa fa-phone-square"></i>
                                    +81 3 6735 4633
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
