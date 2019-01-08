import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

const resuiltStyle = {
  backgroundImage: 'url("/static/img/about-us-our-story__bg-resuilt.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'none'
}

const ourProgressBackgroundStyle = {
  backgroundImage: 'url("/static/img/about-us-our-story__map-our-progress.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'none'
}

export default class AboutUsOurStory extends Component {
  render() {
    return (
      <div className="our-story">
        <h2 className="margin-xs strong-color">
          <b>Our Story</b>
        </h2>
        <hr />
        <br />
        <Carousel>
          <Carousel.Item>
            <img alt="office" src="/static/img/about-us-our-story__carousel-1.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img alt="happy" src="/static/img/about-us-our-story__carousel-2.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img alt="travel" src="/static/img/about-us-our-story__carousel-3.png" />
          </Carousel.Item>
        </Carousel>

        <div className="row stage-list">
          <div className="col-xs-4">
            <div className="stage text-center">
              <div className="title">The beginning</div>
              <p>
                One dining table, 3 passionate hearts, and one connected dream of reinventing the experience of car
                buying and selling worldwide. Those were all, what it took for our three founders, Enam, Derek and Lan
                to start CAR FROM JAPAN. All of them left their well paid jobs in Japan, fancy corporate lives and
                social comfort, only to start this adventurous journey.
              </p>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="stage text-center">
              <div className="title">The pain</div>
              <p>
                When we started, we dig deep into what was happening. There were many sad and blood-boiling stories that
                made our determination towards this mission unbreakable. There were buyers who received a different car
                than what was displayed online in some websites. Many were over charged because they could not compare
                prices among suppliers. And the worst of all, some paid for a car and it never arrived.
              </p>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="stage text-center">
              <div className="title">The need</div>
              <p>
                On the other hand, there were many good and authentic Japanese suppliers could not reach out to buyers.
                These were great companies that are honest and capable of real Japanese quality cars and services. They
                just did not have the language capability, international business experience. Additionally, they lacked
                the technological advancements and online marketing capability needed to make this work in an efficient
                way.
              </p>
            </div>
          </div>
        </div>

        <div className="resuilt" style={resuiltStyle}>
          <p>
            “ Therefore, we built a bridge, innovative yet a soulful one, between Japanese car suppliers and car buyers
            all over the world. “
          </p>
        </div>

        <div className="ceo row">
          <div className="col-xs-4">
            <img src="/static/img/about-us-our-story__avata.png" alt="" />
          </div>
          <div className="col-xs-8 ceo-said">
            <p>
              “ We focus on connecting all car buyers and sellers in the most innovative, efficient and authentic way. ”
            </p>
            <div className="sign text-right">
              <i className="icon icon-about-us-our-story__signature" />
              <div>
                <b>Enam Effekhar, CEO</b>
              </div>
            </div>
          </div>
        </div>

        <div className="our-progress">
          <div className="title row-flex space-between">
            <hr className="left" />
            <div className="text">Our Progress</div>
            <hr className="right" />
          </div>
          <div className="country-user row-flex center">
            <div className="country text-center">
              <div className="count">69</div>
              <div className="detail">Countries we sell to</div>
            </div>
            <div className="user text-center">
              <div className="count">3.7M</div>
              <div className="detail">Number of user</div>
            </div>
          </div>
          <div className="background" style={ourProgressBackgroundStyle} />
        </div>
      </div>
    )
  }
}
