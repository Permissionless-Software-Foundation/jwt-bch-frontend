import React from 'react'
import Helmet from 'react-helmet'
import 'isomorphic-fetch'
import Footer from '../components/Footer'

import Layout from '../components/layout'
import PSFIMG from '../assets/images/favicon.png'
import CircularProgress from '@material-ui/core/CircularProgress';

import NOTIFICATION from '../lib/notification'
const Notification = new NOTIFICATION()

let _this
class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            balance: '0.00',
            bchAddr: '',
            outWell: '',
            succes: false,
            inFetch: false
        }

        _this = this
        this.Notification = Notification

    }
    render() {
        const siteTitle = 'Gatsby Starter - Photon'

        return (
            <Layout>
                <Helmet title={siteTitle} />
                <section className="faucet-container1">
                    <div className='container'>
                        <div className='row well well-lg'>
                            <div className='col-md-10'>
                                <h2>
                                    BCH Testnet Faucet brought to you by <a href="https://FullStack.cash">FullStack.cash</a>
                                </h2>
                                <h3 className='lead'>
                                    This is a testnet faucet built with
                                     <a href="https://www.npmjs.com/package/@chris.troutner/bch-js">bch-js</a>
                                      JavaScript SDK for Bitcoin Cash! It currently gives
                                      out 0.1 BCH.
                                </h3>
                                <p>
                                    <a href="https://github.com/christroutner/testnet-faucet2" target="_blank">Fork this demo on GitHub!</a>
                                </p>
                            </div>

                            <div className='col-md-2'>
                                <img
                                    src={PSFIMG}
                                    className="faucet-img"
                                    alt='Permissionless Software Foundation'
                                    onClick={() => { _this.goToUrl("https://psfoundation.cash/") }}
                                />
                            </div>
                        </div>

                    </div>
                </section>
                <section className="faucet-container2">

                    <div className="container">

                        <div className="row">
                            <div className="col-sm-12">
                                <form className="form-inline">
                                    <div className="form-group faucet-bchAddr-input">
                                        <label htmlFor="peerId">BCH Testnet Address: </label>
                                        <input
                                            type="text"
                                            className="form-control "
                                            id="bchAddr"
                                            name="bchAddr"
                                            size="60"
                                            placeholder="bchtest:qqmd9unmhkpx4pkmr6fkrr8rm6y77vckjvqe8aey35"
                                            onChange={_this.handleUpdate} />
                                    </div>
                                </form>
                                <button
                                    type="button"
                                    className="btn btn-default fuacet-btn"
                                    onClick={_this.requestBCH}>Get tBCH!
                                  </button>
                                {
                                    _this.state.inFetch &&
                                    <div className="circular-progress-container">
                                        <CircularProgress />
                                    </div>
                                }
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <p>
                                    Please send tBCH back to this faucet at this address:<br />
                                    <b>bchtest:qqmd9unmhkpx4pkmr6fkrr8rm6y77vckjvqe8aey35</b>
                                </p>
                                <p>
                                    Current Balance: <span id="balance"><b>{_this.state.balance}</b></span> BCH
                                 </p>
                            </div>
                        </div>
                        {_this.state.succes &&
                            <div className="row">
                                <div className="col-sm-12 well">
                                    <div id="outWell" >
                                        <p>Success: tBCH are on their way!</p>
                                        <p className="faucet-txid"><b>TXID:</b> {_this.state.outWell}</p>
                                    </div>
                                </div>
                            </div>}

                    </div>

                </section>
                <Footer />
            </Layout>
        )
    }
    componentDidMount() {
        _this.getBalance()
    }
    goToUrl(url) {
        window.open(url)
    }
    handleUpdate(event) {
        _this.setState({
            [event.target.name]: event.target.value,
        })
    }
    async  getBalance() {
        try {
            // const resp = await fetch(`http://localhost:7654/coins`)
            const resp = await fetch(`https://faucet-api.fullstack.cash/coins`)
            const body = await resp.json()
            console.log(`body: ${JSON.stringify(body, null, 2)}`)
            const balance = body.balance / 100000000

            _this.setState({
                balance: balance
            })

            // $('#balance').text(balance)
        } catch (err) {
            console.error(`Error in getBalance(): `, err)
            _this.Notification.notify('Error', err, 'danger')

        }
    }

    async  requestBCH() {
        console.log("request")
        _this.setState({
            succes: false,
            inFetch: true,
        })
        try {

            const bchAddr = _this.state.bchAddr //$('#bchAddr').val()

            if (bchAddr === "" || !bchAddr) {
                _this.appendToWell(`Error: BCH Address can not be blank`)
                _this.Notification.notify('Error', 'BCH Address can not be blank', 'danger')

                _this.setState({
                    inFetch: false
                })
                return
            }

            // const resp = await fetch(`http://localhost:7654/coins/${bchAddr}`)
            const resp = await fetch(`https://faucet-api.fullstack.cash/coins/${bchAddr}`)
            // const resp = await fetch(`/coins/${bchAddr}`)
            const body = await resp.json()
            console.log(`body: ${JSON.stringify(body, null, 2)}`)

            if (!body.success) {
                const message = body.message

                if (message === `Invalid BCH cash address.`) {
                    _this.appendToWell(`Error: Invalid BCH testnet address`)
                    _this.Notification.notify('Error', 'Invalid BCH testnet address', 'danger')
                }
                else {
                    _this.appendToWell(`Error: This BCH address has been used before, or you need to wait 24 hours to request from this IP address.`)
                    _this.Notification.notify(
                        'Error',
                        'This BCH address has been used before, or you need to wait 24 hours to request from this IP address.',
                        'danger',
                        5000)

                }
                _this.setState({
                    inFetch: false
                })
                return
            }

            _this.Notification.notify('SUCCESS!', 'Success: tBCH are on their way!', 'success')

            // _this.appendToWell(`Success: tBCH are on their way!'`)
            _this.writeToWell(` ${body.txid}`)
            _this.setState({
                succes: true,
                inFetch: false
            })

            //Scroll To txId
            setTimeout(() => {
                const outWellElmnt = document.getElementById("outWell");
                outWellElmnt && outWellElmnt.scrollIntoView({
                    block: 'center',
                    behavior: 'smooth'
                });

            }, 250);
            
            // Update balance
            setTimeout(() => {
                _this.getBalance()
            }, 2000);


        } catch (err) {
            _this.setState({
                inFetch: false
            })
            console.log(`Error in requestBCH: `, err)
            _this.Notification.notify('Error', err, 'danger')

        }
    }

    // Gets the current text in the output well.
    getWellText() {
        console.log(_this.state.outWell)
        return _this.state.outWell
        //return $('#outWell').text()
    }

    // Overwrites any content in the output well.
    writeToWell(str) {
        //$('#outWell').text(str)
        _this.setState({
            outWell: str
        })
        console.log(str)

    }

    // Appends a string as a new line to the output well.
    appendToWell(str) {
        let wellText = _this.state.outWell
        wellText = wellText + '\n' + str
        _this.setState({
            outWell: wellText
        })
        console.log(wellText)

        //let wellText = $('#outWell').text()

        // 

        //$('#outWell').text(wellText)
    }
}

export default Homepage
