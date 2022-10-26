import React from 'react'
import Layout from '../components/layout'

import routes from '../data/bchn-routes.json'
import Endpoint from '../components/route/endpoint'
import Footer from '../components/Footer'
import { navigate } from 'gatsby'

let _this
const VERSION = '/v5'
const SERVER = `${process.env.BCHNSERVER}`

class ExploreMainnet extends React.Component {
  constructor (props) {
    super(props)
    _this = this
    this.state = {
      routesData: [],
      endpointIndex: 0
    }
  }

  componentDidMount () {
    console.log(routes)
    _this.setState({
      routesData: routes
    })
  }

  render () {
    return (
      <Layout>
        <section id='one' className='main style1'>
          <div className='explore-container'>
            <select
              className='explore-select'
              defaultValue='BCHN'
              onChange={_this.changeServer}
            >
              <option value='Testnet'>Testnet</option>
              <option value='BCHN'>BCHN</option>
              <option value='ABC'>ABC</option>
            </select>
            {_this.state.routesData.map((val, i) => {
              return (
                <div key={i} className='route-container-collapsible'>
                  <div
                    className='route-container'
                    onClick={e => _this.showEndpoints(i)}
                  >
                    <div className='route-name-container '>
                      <a>{val.name}</a>
                      <span>{val.description}</span>
                    </div>
                    <div className='route-find-out-more '>
                      <a href={val.docUrl} target='_blank' rel='noreferrer'>
                        Find out more
                      </a>
                    </div>
                  </div>
                  {_this.state.endpointIndex === i
                    ? (
                      <Endpoint
                        endpoints={val.endpoints}
                        SERVER={SERVER}
                        VERSION={VERSION}
                      />
                      )
                    : (
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

  showEndpoints (i) {
    const _i = _this.state.endpointIndex === i ? '' : i
    _this.setState({
      endpointIndex: _i
    })
  }

  changeServer () {
    const value = event.target.value
    if (value === 'ABC') {
      navigate('/explore-abc')
    }
    if (value === 'Testnet') {
      navigate('/explore-testnet')
    }
  }
}

export default ExploreMainnet
