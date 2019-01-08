import React, { Component } from 'react'

export default class AboutusOfficeCalendar extends Component {
    render() {
        return (
            <div className="office-calendar">
                <h2 className="margin-xs strong-color"><b>Office & Calendar</b></h2>
                <hr/>

                <div className="list-office">
                    <div className="office row">
                        <div className="col-xs-4">
                            <div className="text-title">
                                Japan Head Office (Tokyo)
                            </div>
                        </div>
                        <div className="col-xs-8">
                            <div className="row-flex row-info">
                                <i className="fa fa-map-marker-alt"></i>    
                                <div>
                                    Mita 2-7-4, Meguro-ku,   <br/>
                                    Tokyo, Japan 153-0062
                                </div>
                            </div> 
                            <div className="row-flex row-info">
                                <i className="fa fa-phone"></i>
                                <div>
                                    (EN) +81 3 4540 6692 /
                                    (JP) 03 4405 9092 
                                </div>
                            </div>
                            <div className="map">
                                <div class="mapouter">
                                    <div class="gmap_canvas">
                                        <iframe width = "100%"
                                            height = "239"
                                            id = "gmap_canvas"
                                            src = "https://maps.google.com/maps?q=2%2BChome-7-4%2BMita%2C%2BMeguro-ku%2C%2BT%C5%8Dky%C5%8D&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                            frameBorder = "0"
                                            scrolling = "no"
                                            marginHeight = "0"
                                            marginWidth = "0" >
                                        </iframe>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <hr/>
                    <div className="office row">
                        <div className="col-xs-4">
                            <div className="text-title">
                                Kenya Office 
                            </div>
                        </div>
                        <div className="col-xs-8">
                            <div className="row-flex row-info">
                                <i className="fa fa-map-marker-alt"></i>    
                                <div>
                                    5F, Aly’s Centre, Junction of Mpaka road and Muthithi road, Westlands, <br/>
                                    Nairobi, KENYA
                                </div>
                            </div> 
                            <div className="row-flex row-info">
                                <i className="fa fa-phone"></i>
                                <div>
                                    +254 20 765 2222
                                </div>
                            </div>
                            <div className="map">
                                <div class="mapouter">
                                    <div class="gmap_canvas">
                                        <iframe width = "100%"
                                            height = "239"
                                            id = "gmap_canvas"
                                            src = "https://maps.google.com/maps?q=5F%2C%20Aly%E2%80%99s%20Centre%20Junction%20of%20Mpaka%20road%20and%20Muthithi%20road%20Westlands%2C%20Nairobi%2C%20Kenya&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                            frameBorder = "0"
                                            scrolling = "no"
                                            marginHeight = "0"
                                            marginWidth = "0" >
                                        </iframe>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <hr/>
                    <div className="office row">
                        <div className="col-xs-4">
                            <div className="text-title">
                                VietNam Office 
                            </div>
                        </div>
                        <div className="col-xs-8">
                            <div className="row-flex row-info">
                                <i className="fa fa-map-marker-alt"></i>    
                                <div>
                                    24F, Ecolife Tay Ho Building, Vo Chi Cong St., Xuan La Tay Ho, <br/> 
                                    Hanoi, VIETNAM
                                </div>
                            </div> 
                            <div className="row-flex row-info">
                                <i className="fa fa-phone"></i>
                                <div>
                                    +84 90 4500 489 /
                                    +84 90 4546 964
                                </div>
                            </div>
                            <div className="map">
                                <div class="mapouter">
                                    <div class="gmap_canvas">
                                        <iframe width = "100%"
                                            height = "239"
                                            id = "gmap_canvas"
                                            src = "https://maps.google.com/maps?q=T%C3%B2a%20nh%C3%A0%20Ecolife%20T%C3%A2y%20H%E1%BB%93%2C%20%C4%91%C6%B0%E1%BB%9Dng%20p.%20Q%2C%20V%C3%B5%20Ch%C3%AD%20C%C3%B4ng%2C%20Xu%C3%A2n%20La%2C%20T%C3%A2y%20H%E1%BB%93%2C%20H%C3%A0%20N%E1%BB%99i%2C%20Vietnam&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                            frameBorder = "0"
                                            scrolling = "no"
                                            marginHeight = "0"
                                            marginWidth = "0" >
                                        </iframe>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>   
                <hr/>
                <div className="calendar">
                    <div className="text-title">
                        Work Calendar of Japan Office
                    </div>
                    <div>2019 Scheduled Off Days, Calendar</div>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th><div>#</div></th>
                                <th><div>Date</div></th>
                                <th><div>Day</div></th>
                                <th><div>Name in English</div></th>
                                <th><div>Name in Japanese</div></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1-Jan-2019</td>
                                <td>Tuesday</td>
                                <td className="col-xs-5">New Year</td>
                                <td>正月</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2-Jan-2019</td>
                                <td>Wednesday</td>
                                <td>New Year</td>
                                <td>正月</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>3-Jan-2019</td>
                                <td>Thursday</td>
                                <td>New Year</td>
                                <td>正月</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>14-Jan-2019</td>
                                <td>Monday</td>
                                <td>Coming of Age</td>
                                <td>成人の日</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>11-Feb-2019</td>
                                <td>Monday</td>
                                <td>National Foundation Day</td>
                                <td>建国記念の日</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>21-Mar-2019</td>
                                <td>Thursday</td>
                                <td>Spring Equinox Day</td>
                                <td>春分の日</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>29-Apr-2019</td>
                                <td>Monday</td>
                                <td>Showa Day</td>
                                <td>昭和の日</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>3-May-2019</td>
                                <td>Friday</td>
                                <td>Constitution Day</td>
                                <td>憲法記念日</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>4-May-2019</td>
                                <td>Saturday</td>
                                <td>Greenery Day</td>
                                <td>みどりの日</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>5-May-2019</td>
                                <td>Sunday</td>
                                <td>Children’s Day</td>
                                <td>こどもの日</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>6-May-2019</td>
                                <td>Monday</td>
                                <td>Subsitute Holiday</td>
                                <td>振替休日</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>15-Jul-2019</td>
                                <td>Monday</td>
                                <td>Ocean Day</td>
                                <td>海の日</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>11-Aug-2019</td>
                                <td>Sunday</td>
                                <td>Mountain Day</td>
                                <td>山の日</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>12-Aug-2019</td>
                                <td>Monday</td>
                                <td>Subsitute Holiday</td>
                                <td>振替休日</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>16-Sep-2019</td>
                                <td>Monday</td>
                                <td>Respect for the Aged Day</td>
                                <td>敬老の日</td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>23-Sep-2019</td>
                                <td>Monday</td>
                                <td>Autum Equinox Day</td>
                                <td>秋分の日</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>14-Oct-2019</td>
                                <td>Monday</td>
                                <td>Health and Sports Day</td>
                                <td>体育の日</td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>3-Nov-2019</td>
                                <td>Sunday</td>
                                <td>Culture Day</td>
                                <td>文化の日</td>
                            </tr>
                            <tr>
                                <td>19</td>
                                <td>4-Nov-2019</td>
                                <td>Monday</td>
                                <td>Subsitute Holiday</td>
                                <td>振替休日</td>
                            </tr>
                            <tr>
                                <td>20</td>
                                <td>23-Nov-2019</td>
                                <td>Saturday</td>
                                <td>Labour Thanksgiving Day</td>
                                <td>勤労感謝の日</td>
                            </tr>
                            <tr>
                                <td>21</td>
                                <td>23-Dec-2019</td>
                                <td>Saturday</td>
                                <td>Emperor’s Birthday</td>
                                <td>天皇誕生日</td>
                            </tr>
                            <tr>
                                <td>22</td>
                                <td>31-Dec-2019</td>
                                <td>Tuesday</td>
                                <td>New Year</td>
                                <td>正月</td>
                            </tr>
                            <tr>
                                <td colSpan="5" class="red-color">
                                    "** Other than the days mentioned above, Our Japan Office will be closed on Saturdays & Sundays."
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    
                </div>            
            </div>
        )
    }
}
