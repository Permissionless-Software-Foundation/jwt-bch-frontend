import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Footer from '../components/Footer'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import bchApiStack from '../assets/images/bch-api-stack2.jpg'
import cashstack from '../assets/images/cashstack.gif'
import cashStackPoster from '../assets/images/cash-stack-poster.png'

import '../assets/css/main2.css'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'BCH Blockchain As-A-Service SaaS'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit">
                <img src={cashstack} alt="" />
              </span>
            </div>

            <div className="col-6">
              <header className="major">
                <br />
                <br />
                <br />
                <h2>FullStack.Cash</h2>
                <h3>BCH Blockchain As-A-Service</h3>
              </header>
              <h4>
                The open source 'Cash Stack' allows phone and web apps to
                interact with the Bitcoin Cash blockchain.
              </h4>
              <ul className="actions uniform">
                <li>
                  <a href="/login" className="button special">
                    Sign Up
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="button">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="six" className="main style2 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <span className="image fit">
                <img src={cashStackPoster} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-4">
              <span className="icon major fas fa-bolt"></span>
              <h3>Examples</h3>
              <p>
                Get started quickly with code examples that cover most common
                use-cases.
              </p>
              <ul className="actions">
                <li>
                  <a href="/examples" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="icon major fas fa-book-open"></span>
              <h3>Documentation</h3>
              <p>
                Read the API documentation for bch-api, bch-js, and others parts
                of the stack.
              </p>
              <ul className="actions">
                <li>
                  <a href="/documentation" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="icon major fas fa-users"></span>
              <h3>Community</h3>
              <p>
                Have questions? Need help? Just getting started? Say 'Hi!' in
                our community support Telegram channel. Tap into the braintrust
                of the rock-star Bitcoin Cash developer community.
              </p>
              <ul className="actions">
                <li>
                  <a href="https://t.me/bch_js_toolkit" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <h2>What type of developer are you?</h2>
            </div>

            <div className="col-4">
              <span className="icon major fas fa-map"></span>
              <h3>Front End</h3>
              <p>
                You focus on user interfaces (UI) and UX inside a phone app or a
                web browser.
              </p>
              <ul className="actions">
                <li>
                  <a href="/front-end" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="icon major fas fa-server"></span>
              <h3>Back End</h3>
              <p>You focus on databases, full nodes, REST APIs, and dev-ops.</p>
              <ul className="actions">
                <li>
                  <a href="/back-end" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="icon major fas fa-book"></span>
              <h3>Library</h3>
              <p>
                You build middleware libraries for connecting front and back
                ends.
              </p>
              <ul className="actions">
                <li>
                  <a href="/libraries" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="five" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>Coming From Bitcoin.com?</h2>
              </header>
              <p>
                FullStack.cash has roots from{' '}
                <a href="https://developer.bitcoin.com" target="_blank">
                  developer.bitcoin.com
                </a>
                . The open source software started by Bitcoin.com was forked in
                March 2020. It recieved several upgrades, and was modified to
                work with the decentralized infrastructure listed on the{' '}
                <a href="/cashstrap" target="_blank">
                  CashStrap page
                </a>
                .
              </p>
              <p>
                The <b>Cash Stack</b> is a core idea in building scaleable apps
                with a cash-like experience. The button below will take you to
                an introduction to the Cash Stack. The video to the right will
                discuss the differences between Bitcoin.com and FullStack.cash,
                with regard to the Cash Stack infrastructure.
              </p>
              <div>
                <center>
                  <ul className="actions uniform" style={{ padding: '15px' }}>
                    <li>
                      <a
                        href="https://psfoundation.cash/blog/cash-stack"
                        className="button special"
                        target="_blank"
                      >
                        The Cash Stack
                      </a>
                    </li>
                  </ul>
                </center>
              </div>
            </div>

            <div className="col-6">
              <br />
              <br />
              <br />
              <div className="youtube-responsive-container">
                <iframe
                  title="Transitioning from Bitcoin.com to FullStack.cash"
                  src="https://www.youtube.com/embed/FWzTBOgwy-s"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <br />
              <br />
            </div>
          </div>
        </section>

        <Footer />
      </Layout>
    )
  }
}

export default Homepage

// CT 4/24/21 - Delete after 6/1/21
/*


<section id="four" className="main style2 special">
  <div className="grid-wrapper">
    <div className="col-6">
      <header className="major">
        <h2>Become a Full Stack Developer</h2>
      </header>
      <p>
        FullStack.cash has roots
        from <a href="https://developer.bitcoin.com" target="_blank">
        developer.bitcoin.com</a>. The open source software
        started by Bitcoin.com was forked and modified to work with
        the decentralized infrastructure listed
        on the <a href="/cashstrap">CashStrap page</a>. Anyone is free
        to download and run their own infrastructure to work with our
        software.
      </p>
      <p>
        FullStack.cash was born from this original article and video.
      </p>
      <div><center>
      <ul className="actions uniform" style={{padding: '15px'}}>
        <li>
          <a href="https://troutsblog.com/research/bitcoin-cash/how-to-bch-full-stack-developer"
          className="button special" target="_blank">
            Read the Article
          </a>
        </li>
      </ul>
      </center></div>
    </div>

    <div className="col-6">
      <div className="youtube-responsive-container">
        <iframe
          title="Bitcoin Cash Full Stack Introduction"
          src="https://www.youtube.com/embed/ZwK0SHVxhE0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>

  </div>
</section>
  */
