import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Gatsby Starter - Photon";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                        <header className="major">
                            <h2>How much does FullStack.com cost?</h2>
                        </header>
                        <p>
                          It depends on the infrastructure requirements for your
                          app. If you need less, you pay less.
                        </p>
                        <p>
                          The column on the left indicates infrastructure used.
                          RPM stands for 'requests per minute'. The row at the
                          top indicates the tier that your API key unlocks.
                        </p>
                        <table style={{border: '1px solid black'}}>
                          <tr>
                            <th>Tiers:</th>
                            <th>Anonymous</th>
                            <th>Free</th>
                            <th>Full-Node</th>
                            <th>Indexer</th>
                            <th>SLP</th>
                          </tr>
                          <tr>
                            <td>Price per month:</td>
                            <td>$0</td>
                            <td>$0</td>
                            <td>$10</td>
                            <td>$20</td>
                            <td>$30</td>
                          </tr>
                          <tr>
                            <td>Full Node RPM:</td>
                            <td>3</td>
                            <td>10</td>
                            <td>100</td>
                            <td>10</td>
                            <td>10</td>
                          </tr>
                          <tr>
                            <td>Indexer RPM:</td>
                            <td>3</td>
                            <td>10</td>
                            <td>100</td>
                            <td>100</td>
                            <td>10</td>
                          </tr>
                          <tr>
                            <td>SLPDB RPM:</td>
                            <td>3</td>
                            <td>10</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                          </tr>
                        </table>
</div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">


                        <ul className="actions uniform">
                            <li><a href="/profile" className="button special">Sign Up</a></li>
                            <li><a href="/" className="button">Learn More</a></li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;
