import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Footer from '../components/Footer'

import telegram from '../assets/images/telegram-200px.png'
import fullstackLogo from '../assets/images/fullstackcash-Grey.png'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Consulting'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Get the Help Your Business Needs</h2>
              </header>
            </div>

            <div className="col-12">
              <p>
                FullStack.cash is part of
                the <a href="https://psfoundation.cash" target="_blank">Permissionless
                Software Foundation</a>, a network of independent developers
                around the globe, focusing on Bitcoin Cash. We can help connect
                you with the developer resources your company needs.
              </p>
            </div>
          </div>


          <div className="grid-wrapper" style={{ border: 'solid 1px black', marginTop: '25px' }}>
            <div className="col-6" style={{ padding: '20px' }}>
              <a href="/contact" style={{borderBottom: 'none'}}>
                <span className="image">
                  <img src={fullstackLogo} alt="" />
                </span>
                <h3>FullStack.cash Consulting Services</h3>
              </a>
            </div>

            <div className="col-6" style={{ padding: '20px' }}>
              <p>
                FullStack.cash can provide the developer talent to help you
                achieve your business goals. We specialize in
                developing <a href="https://cashstack.info" target="_blank">infrastructure</a> and
                the <a href="https://psfoundation.info" target="_blank">software maintained by the PSF</a>.
              </p>
              <p>
                If you have an app idea and would like help from FullStack.cash,
                we are available for at a rate of $100 per hour for long-term
                contracts (a month or longer), or $150 per hour for short-term tasks.
              </p>

              <ul className="actions">
                <li>
                  <a href="/contact" className="button">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
	  <br />

	  <div className="grid-wrapper" style={{ border: 'solid 1px black' }}>
            <div className="col-6" style={{ padding: '20px' }}>
              <a href="https://t.me/slp_devs_for_hire" style={{borderBottom: 'none'}}>
                <span className="image">
                  <img src={telegram} alt="" />
                </span>
                <h3>SLP Token Devs for Hire</h3>
              </a>
            </div>

            <div className="col-6" style={{ padding: '20px' }}>
              <p>
                This Telegram channel is moderated by staff from FullStack.cash.
                It was created for entrepreneurs to find developers who have
                experience with SLP tokens and Bitcoin Cash. It's a simple, free
                way for you to find an independent developer or your next employee.
              </p>

              <ul className="actions">
                <li>
                  <a href="https://t.me/slp_devs_for_hire" className="button">
                    Join
                  </a>
                </li>
              </ul>
            </div>
          </div>

	  <br />
	  <hr />
	  <br />

	  <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h3>Need an Online Store? We've got you covered.</h3>
              </header>
            </div>

            <div className="col-12">
              <p>
                Many business owners simply need an online shopping cart where customers can
		purchase goods for Bitcoin Cash. We can install a simple Wordpress store that
		allows you to display goods, and allows customers to pay in Bitcion Cash.
              </p>
	      <br />
	      <a href="https://bchstore.com" className="button">See Demo</a>
            </div>
          </div>

	  <br />
	  <hr />
	  <br />

	  <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h3>Need Something More Advanced? We've got that too.</h3>
              </header>
            </div>

            <div className="col-12">
              <p>
                We can build custom crypto apps for your business too. We generally build web-apps first,
                and then compile them into Android and iOS apps. See examples in our portfolio:
              </p>

              <a href="/portfolio" className="button">See Our Portfolio</a>
              <br /><br />

              <p>
                Here is a list of custom services that FullStack.cash offers:
              </p>
              <ul style={{textAlign: 'left'}}>
                <li><b>Architecture</b>: Designing the infrastructure and communication flow for a custom app for your business</li>
                <li><b>App development</b>: Building custom apps for your business</li>
                <li><b>Infrastructure</b>: Setup and management of crypto infrastructure for your business</li>
                <li><b>Developer recruitment</b>: We can help you find developers to hire</li>
                <li><b>Developer screening</b>: Testing the skills of potential hires</li>
                <li><b>Developer management</b>: Project management and coordinating work among a team</li>
              </ul>

              <p>
                Read more about our management and development practices in these blog posts:
              </p>
              <ul>
                <li>
                  <a href="https://christroutner.github.io/trouts-blog/blog/managing-app-development/" target="_blank">
                    Managing App Development
                  </a>.
                </li>
                <li>
                  <a href="https://christroutner.github.io/trouts-blog/blog/software-development-process" target="_blank">
                    Our Software Development Process
                  </a>.
                </li>
              </ul>

              <p>
                But we can't do it all. Some skills are outside our expertise. When these are needed,
                we can help you find additional resources for your project, but FullStack.cash can not
                take responsiblity for the execution:
              </p>
              <ul style={{textAlign: 'left'}}>
                <li><b>Design</b>: color pallets, graphics, and aesthetics</li>
                <li><b>Native apps</b>: We can build an app for iOS and Android, but not with native features like the camera or NFC.</li>
                <li><b>Website development</b>: We focus on crypto apps, not on websites. A lot of other contractors can do this.</li>
                <li><b>General apps</b>: We focus on crypto apps. If the app doesn't involve cryptocurrency, we'll help you partner with a general app design company.</li>
                <li><b>App stores</b>: We can not help you get your app into the iOS or Google app stores. That is often a full-time job in itself.</li>
              </ul>


            </div>
          </div>

        </section>

        <Footer />
      </Layout>
    )
  }
}

export default Homepage
