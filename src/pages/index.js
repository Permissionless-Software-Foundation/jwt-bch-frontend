import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import bchApiStack from '../assets/images/bch-api-stack2.jpg'

import "../assets/css/main2.css"

class Homepage extends React.Component {
    render() {
        const siteTitle = "Gatsby Starter - Photon";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>FullStack.Cash<br />
                                BCH Blockchain As-A-Service</h2>
                            </header>
                            <h3>
                              The open source 'Cash Stack' allows phone
                              and web apps to interact with the
                              Bitcoin Cash blockchain.
                            </h3>
                            <ul className="actions uniform">
                                <li><a href="/login" className="button special">Sign Up</a></li>
                                <li><a href="#" className="button">Pricing</a></li>
                            </ul>
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

                <section id="four" className="main style2 special">

                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>What is the 'Cash Stack'?</h2>
                            </header>
                            <h4>
                              It's the full stack of software allowing modern
                              apps to talk to the blockchain, <b>and send
                              uncensorable money.</b>
                            </h4>
                            <p>
For full-stack developers who want to run their own
infrastructure, <a href="https://troutsblog.com/research/bitcoin-cash/how-to-bch-full-stack-developer" target="_blank">
this articles shows you how</a>. But most front-end developers will want someone
else to take care of the back-end duties. <b>That's what FullStack.cash does.</b>
                            </p>
                            <p>
Are you a developer? <a href="/login">Create an account</a> in order to unlock
increased rate-limits when using
the <a href="https://www.npmjs.com/package/@chris.troutner/bch-js" target="_blank">bch-js npm library</a> to
call the <a href="https://api.fullstack.cash">bch-api REST API at api.fullstack.cash</a>.
                            </p>
                        </div>
                        <div className="col-6">
                            <span className="image fit">
                              <a href="https://troutsblog.com/research/bitcoin-cash/how-to-bch-full-stack-developer" target="_blank">
                                <img src={bchApiStack} alt="" />
                              </a>
                            </span>

                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Lorem ipsum dolor adipiscing<br />
                                amet dolor consequat</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                            <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Adipiscing amet consequat</h2>
                            </header>
                            <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
                        </div>

                        <div className="col-4">
                            <span className="icon major fa-bolt"></span>
                            <h3>Examples</h3>
                            <p>Get started quickly with code examples that cover most common use-cases.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/Permissionless-Software-Foundation/bch-js-examples" target="_blank" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="icon major fa-book"></span>
                            <h3>Documentation</h3>
                            <p>Read the API documentation for bch-api, bch-js, and others parts of the stack.</p>
                            <ul className="actions">
                                <li><a href="https://api.fullstack.cash" target="_blank" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="icon major fa-users"></span>
                            <h3>Community</h3>
                            <p>FullStack.cash is an extension of the <a href="https://psfoundation.cash" target="_blank">Permissionless Software Foundation</a> community.</p>
                            <ul className="actions">
                                <li><a href="https://t.me/permissionless_software" className="button">More</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Adipiscing amet consequat</h2>
                            </header>
                            <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Ipsum feugiat consequat?</h2>
                        </header>
                        <p>Sed lacus nascetur ac ante amet sapien.</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign Up</a></li>
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;
