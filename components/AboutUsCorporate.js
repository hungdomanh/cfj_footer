import React, { Component } from 'react'

const mission1BackgroundStyle = {
    backgroundImage: 'url("./static/img/about-us-corporate__why_do_we_do_this.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}
const mission2BackgroundStyle = {
    backgroundImage: 'url("./static/img/about-us-corporate__our_mission.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}
const mission3BackgroundStyle = {
    backgroundImage: 'url("./static/img/about-us-corporate__vision.png")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}
const ContriesBackgroundStyle = {
    backgroundImage: 'url("./static/img/about-us-corporate__contries.png")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}

export default class AboutUsCorporate extends Component {
    render() {
        return (
            <div className="corporate">
                <h2 className="margin-xs strong-color"><b>Corporate Overview</b></h2>
                <hr/>
                
                <div className="text-title company">
                    Company information
                </div>
                <div>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <div className="block-left text-left">Company Name</div>
                            <div className="block-right text-left">
                                Car From Japan Co., Ltd. (EN) <br/>
                                株式会社Car From Japan (JP)
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div className="block-left text-left">Year Established</div>
                            <div className="block-right text-left">2014</div>
                        </li>
                        <li class="list-group-item">
                            <div className="block-left text-left">Capital (Paid in)</div>
                            <div className="block-right text-left">45.23 Million Japanese Yen</div>
                        </li>
                        <li class="list-group-item">
                            <div className="block-left text-left">Company Representative</div>
                            <div className="block-right text-left">Enam Eftekhar (CEO)</div>
                        </li>
                        <li class="list-group-item">
                            <div className="block-left text-left">Location</div>
                            <div className="block-right text-left">
                                <div class="office">
                                    <div class="office-name">
                                        Head Office
                                        <div class="hr"></div>
                                    </div>
                                    <div className="row-flex row-info">
                                        <i className="fa fa-map-marker-alt"></i>    
                                        <div>
                                            Mita 2-7-4, Meguro-ku, Tokyo, Japan    <br/>
                                            153-0062.
                                        </div>
                                    </div> 
                                    <div className="row-flex row-info">
                                        <i className="fa fa-phone"></i>
                                        <div>
                                            (EN) +81 3 4540 6692.  <br/>
                                            (JP) 03 4405 9092. 
                                        </div>
                                    </div> 
                                    <div className="row-flex row-info">
                                        <i className="fa fa-fax"></i>
                                        <div>
                                            +813 6735 4633
                                        </div>
                                    </div> 
                                </div>
                                <hr/>
                                <div class="office">
                                    <div class="office-name">
                                        Kenya office
                                        <div class="hr"></div>
                                    </div>
                                    <div className="row-flex row-info">
                                        <i className="fa fa-map-marker-alt"></i>    
                                        <div>
                                            5F, Aly’s Centre, Junction of Mpaka road and <br/>
                                            Muthithi road, Westlands, Nairobi, KENYA
                                        </div>
                                    </div> 
                                    <div className="row-flex row-info">
                                        <i className="fa fa-phone"></i>
                                        <div>
                                            +254 20 765 2222
                                        </div>
                                    </div> 
                                </div>
                                <hr/>
                                <div class="office">
                                    <div class="office-name">
                                        Viet Nam 
                                        <div class="hr"></div>
                                    </div>
                                    <div className="row-flex row-info">
                                        <i className="fa fa-map-marker-alt"></i>    
                                        <div>
                                            24F, Ecolife Tay Ho Building, Vo Chi Cong St., <br/>
                                            Xuan La Tay Ho, Hanoi, VIETNAM
                                        </div>
                                    </div> 
                                    <div className="row-flex row-info">
                                        <i className="fa fa-phone"></i>
                                        <div>
                                            +84 90 4500 489 (Ms. Mai Anh) <br/>
                                            +84 90 4546 964 (Mr. Ethan)
                                        </div>
                                    </div> 
                                </div>
                                
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div className="block-left text-left">Mail address</div>
                            <div className="block-right text-left">
                                ask@carfromjapan.com
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div className="block-left text-left">Banks</div>
                            <div className="block-right text-left">
                                <div className="row-flex space-between">
                                    <i className="icon icon-bank icon-about-us-bank__RESONA"></i>
                                    <i className="icon icon-bank icon-about-us-bank__MIZUHO"></i>
                                    <i className="icon icon-bank icon-about-us-bank__SUMITOMO_MITSUI"></i>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="row mission row-flex center">
                    <div className="col-xs-6">
                        <div className="text-title">
                            Why do we do this?
                        </div>
                        <p>The idea of CAR FROM JAPAN was born in 2014. At that time, there was so much of inconvenience in car export - import industry. Though buyers and sellers were getting connected online, the essential factors like trust, transparency, reliability and human connections were rare. Convenience and peace of mind in importing or exporting a car from japan was still a distant reality. Thus, Car From Japan was born to solve this problem.</p>
                    </div>
                    <div className="col-xs-6">
                        <div className="cover" style={mission1BackgroundStyle}></div>
                    </div>
                </div>
                <hr/>
                <div className="row mission row-flex center">
                    <div className="col-xs-6">
                        <div className="cover" style={mission2BackgroundStyle}></div>
                    </div>
                    <div className="col-xs-6">
                        <div className="text-title">
                            Our mission is to provide trade solutions with a focus on convenience, opportunity and peace of mind.
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row mission row-flex center">
                    <div className="col-xs-6">
                        <div className="text-title">
                            Our vision is to connect all car buyers and sellers in the most innovative, efficient and authentic way.
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="cover" style={mission3BackgroundStyle}></div>
                    </div>
                </div>

                <div className="coutries">
                    <div className="bg-overlay" style={ContriesBackgroundStyle}></div>
                    <div className="text-title text-center">
                        We sell cars to these 69 countries 
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-xs-4 text-left">
                            <b>A.</b> <br/>
                            Anguilla <br/>
                            Antigua and Barbuda <br/>
                            Aruba <br/>
                            Australia <br/>
                            <b>B.</b> <br/>
                            Bahamas <br/>
                            Bahrain <br/>
                            Bangladesh <br/>
                            Barbados <br/>
                            Bermuda <br/>
                            Botswana <br/>
                            Brunei Darussalam <br/>
                            Burundi <br/>
                            <b>C.</b> <br/>
                            Canada <br/>
                            Cayman Islands <br/>
                            Chile <br/>
                            Cyprus <br/>
                            <b>K.</b> <br/>
                            Kenya <br/>
                            Kiribati <br/>
                            <b>L.</b> <br/>
                            Lesotho <br/>
                            <b>M.</b> <br/>
                            Malawi <br/>
                            Malta <br/>
                            Micronesia <br/>
                            Mozambique <br/>
                            Myanmar <br/>
                        </div>
                        <div className="col-xs-4 text-left">
                            <b>D.</b> <br />
                            D.R. Congo <br />
                            Djibouti <br />
                            Dominica <br />
                            <b>F.</b> <br />
                            Fiji <br />
                            Finland <br />
                            <b>G.</b> <br />
                            Germany <br />
                            Grenada <br />
                            Guam <br />
                            Guyana <br />
                            <b>H.</b> <br />
                            Haiti <br />
                            <b>I.</b> <br />
                            Ireland <br />
                            <b>J.</b> <br />
                            Jamaica <br />
                            Japan <br />
                            <b>N.</b> <br />
                            Netherlands <br />
                            Netherlands Antilles <br />
                            New Zealand <br />
                            Nigeria <br />
                            <b>P.</b> <br />
                            Pakistan <br />
                            Palau <br />
                            Panama <br />
                            Papua New Guinea <br />
                        </div>
                        <div className="col-xs-4 text-left">
                            <b>S.</b> <br />
                            Saba <br />
                            Saint Kitts And Nevis <br />
                            Samoa <br />
                            Solomon Islands <br />
                            South Africa <br />
                            South Sudan <br />
                            Spain <br />
                            Sri Lanka <br />
                            St. Lucia <br />
                            St. Vincent <br />
                            St. Vincent and the Grenadines <br />
                            Suriname <br />
                            Sweden <br />
                            <b>T.</b> <br />
                            Tanzania <br />
                            Thailand <br />
                            Tonga <br />
                            Trinidad and Tobago <br />
                            Turkey <br />
                            <b>U.</b> <br />
                            UAE <br />
                            Uganda <br />
                            United Kingdom <br />
                            USA <br />
                            <b>Z.</b> <br />
                            Zambia <br />
                            Zimbabwe <br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
