import React from 'react'
import Layout from '../components/layout'

import routes from '../data/testnet-routes.json'
import Endpoint from '../components/route/endpoint'
import Footer from '../components/Footer'
import { navigate } from 'gatsby'

let _this

const SERVER = `${process.env.TESTNETSERVER}`


class ExploreTestnet extends React.Component {
  constructor(props) {
    super(props)
    _this = this
    this.state = {
      routesData: [],
      endpointIndex: 0
    }
  }

  componentDidMount() {
    console.log(routes)
    _this.setState({
      routesData: routes,
    })
  }

  render() {
    return (
      <Layout>
        <section id="one" className="main style1">
          <div className="explore-container">
            <select className="explore-select" onChange={_this.changeServer}>
              <option value="">Testnet</option>
              <option value="">Mainnet</option>
            </select>
            {_this.state.routesData.map((val, i) => {
              return (
                <div key={i} className="route-container-collapsible">
                  <div className="route-container" onClick={(e) => _this.showEndpoints(i)}>
                    <div className="route-name-container ">
                      <a>{val.name}</a>
                      <span>{val.description}</span>
                    </div>
                    <div className="route-find-out-more ">
                      <a href={val.docUrl} target="_blank">
                        Find out more
                    </a>
                    </div>
                  </div>
                  {_this.state.endpointIndex === i ? (
                    <Endpoint endpoints={val.endpoints} SERVER={SERVER} />
                  ) : (
                      ''
                    )}
                </div>
              )
            })}
          </div>
        </section>
        <Footer />
      </Layout>
    )
  }
  showEndpoints(i) {
    const _i = _this.state.endpointIndex === i ?
      '' : i
    _this.setState({
      endpointIndex: _i,
    })
  }
  changeServer() {
    navigate(`/explore-mainnet`)
  }
}

export default ExploreTestnet