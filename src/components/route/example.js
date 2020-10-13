/* eslint-disable */

import React from 'react'
import PropTypes from 'prop-types'

//import '../assets/scss/main.scss'
import '../../assets/scss/main.scss'
import JSONPretty from 'react-json-pretty'
import fetchToCurl from 'fetch-to-curl'

import CircularProgress from '@material-ui/core/CircularProgress';





let _this

class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      endpointType: '',
      parameterType: '',
      parameters: '',
      detailedDescription: '',
      parameterDescription: '',
      requestBody: {} || '',
      endpoint: '',
      tryItOut: false,
      requestResult: '',
      curl: '',
      requestUrl: '',
      responseCode: '',
      isTrayIt: false,
      inFetch: false,

    }

    _this = this
  }

  async componentDidMount() {
    // Validates and sets the default status
    let endpointType = ''
    let parameterType = ''
    let parameters = ''
    let detailedDescription = ''
    let parameterDescription = ''
    let requestBody = ''
    let endpoint = ''
    if (_this.props.data.type) {
      endpointType = _this.props.data.type
      if (endpointType === 'get') {
        parameterType = 'string'
      } else {
        parameterType = 'array'
      }
    }
    if (_this.props.data.parameters) {
      parameters = _this.props.data.parameters
    }
    if (_this.props.data.body) {
      requestBody = _this.props.data.body
    }
    if (_this.props.data.detailedDescription) {
      detailedDescription = _this.props.data.detailedDescription
    }
    if (_this.props.data.parameterDescription) {
      parameterDescription = _this.props.data.parameterDescription
    }
    if (_this.props.data.endpoint) {
      endpoint = _this.props.data.endpoint
    }

    _this.setState({
      endpointType: endpointType,
      parameterType: parameterType,
      parameters: parameters,
      detailedDescription: detailedDescription,
      parameterDescription: parameterDescription,
      requestBody: requestBody,
      endpoint: endpoint,
    })
  }

  render() {
    return (
      <>
        <div className="endpoint-example-container">
          <p>{_this.state.detailedDescription}</p>
          <div className="enpoint-parameters">
            <div>
              <b>Parameters:</b>
              <p>
                {_this.state.parameters
                  ? _this.state.parameterType
                  : 'No Parameters'}
              </p>
            </div>
            <div>
              <b>Description :</b>
              <p>{_this.state.parameterDescription}</p>
            </div>
          </div>
          {!_this.state.requestBody ? (
            ''
          ) : (
              <div className="example-body">
                <p>
                  <b>Example Body:</b>
                </p>
                {!_this.state.isTrayIt ? (
                  <JSONPretty id="json-pretty" data={_this.state.requestBody} />
                ) : (
                    <textarea
                      name="requestBody"
                      id="requestBody"
                      placeholder="Enter your data"
                      rows="4"
                      defaultValue={JSON.stringify(_this.state.requestBody)}
                      onChange={_this.handleUpdate}
                    />
                  )}
              </div>
            )}
          {_this.state.parameters && _this.state.isTrayIt ? (
            <div className="example-body">
              <p>
                <b>Example Parameter:</b>
              </p>
              <input
                type="text"
                name="parameters"
                id="parameters"
                defaultValue={_this.state.parameters}
                placeholder="Enter your data"
                onChange={_this.handleUpdate}
              />
            </div>
          ) : (
              ''
            )}
          {!_this.state.isTrayIt ? (
            <button onClick={_this.tryItOut}>Try it Out</button>
          ) : (
              <div className="example-try-buttons">
                <button onClick={_this.tryItOut}>Cancel</button>
                <button onClick={_this.startRequest}>Execute</button>
              </div>
            )}
          {
            _this.state.inFetch &&
            <div className="circular-progress-container">
              <CircularProgress />
            </div>
          }

          {_this.state.curl ? (
            <>
              <div className="endpoint-example-curl">
                <h4>Curl:</h4>
                <p>{_this.state.curl}</p>
              </div>
            </>
          ) : (
              ''
            )}
          {_this.state.requestUrl ? (
            <>
              <div className="endpoint-example-url">
                <h4>Request Url:</h4>
                <p>{_this.state.requestUrl}</p>
              </div>
            </>
          ) : (
              ''
            )}
          {_this.state.responseCode ? (
            <>
              <div className="endpoint-example-url">
                <h4>Response Code:</h4>
                <p>{_this.state.responseCode}</p>
              </div>
            </>
          ) : (
              ''
            )}
          {_this.state.requestResult ? (
            <>
              <div className="endpoint-example-response">
                <h4>Response Body:</h4>
                <JSONPretty
                  id="json-pretty"
                  data={_this.state.requestResult}
                ></JSONPretty>
              </div>

              <button
                className="example-clear-button"
                onClick={_this.clearRequestResult}
              >
                Clear
              </button>
            </>
          ) : (
              ''
            )}
        </div>
      </>
    )
  }

  handleUpdate(event) {
    _this.setState({
      [event.target.name]: event.target.value,
    })
  }

  // Controller for the try it out button
  tryItOut() {
    _this.clearRequestResult()
    _this.setState({
      isTrayIt: !_this.state.isTrayIt,
    })
  }

  async startRequest() {
    // Validates the type of request
    _this.setState({
      inFetch: true
    })
    try {
      if (
        _this.state.endpointType === 'get' ||
        _this.state.endpointType === 'GET'
      ) {
        await _this.requestGET()
      } else if (
        _this.state.endpointType === 'post' ||
        _this.state.endpointType === 'POST'
      ) {
        await _this.requestPOST()
      }
    } catch (error) {
      console.log("ERROR: ", error)
    }

    _this.setState({
      inFetch: false
    })
  }

  // POST Request
  async requestPOST() {
    const SERVER =  _this.props.SERVER
    const endpoint = `${SERVER}${_this.state.endpoint}`

    let body = _this.state.requestBody
    // If the user edits the body, its necessary
    // To parse the body to a json object
    try {
      body = JSON.parse(_this.state.requestBody)
    } catch (error) { }
    // POST request
    try {
      let code = ''

      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
      console.log('options: ', options)
      const result = await fetch(endpoint, options)
        .then(function (response) {
          code = response.status
          return response.text()
        })
        .then(function (data) {
          console.log(data) // this will be a string
          return data
        })
      const curl = fetchToCurl(endpoint, options)
      _this.setState({
        requestResult: result,
        curl: curl,
        requestUrl: endpoint,
        responseCode: code,
      })

      return result
    } catch (err) {
      return err
    }
  }

  // GET Request
  async requestGET() {
    const SERVER =  _this.props.SERVER

    const endpoint = `${SERVER}${_this.state.endpoint}${_this.state.parameters}`
    try {
      let code = ''

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }

      const result = await fetch(endpoint, options)
        .then(function (response) {
          code = response.status
          return response.text()
        })
        .then(function (data) {
          console.log(data) // this will be a string
          return data
        })

      const curl = fetchToCurl(endpoint, options)
      _this.setState({
        requestResult: result,
        curl: curl,
        requestUrl: endpoint,
        responseCode: code,
      })

      return result
    } catch (err) {
      return false
    }
  }

  // Reset the state to default values
  clearRequestResult() {
    let requestBody = ''
    let parameters = ''
    if (_this.props.data.body) {
      requestBody = _this.props.data.body
    }
    if (_this.props.data.parameters) {
      parameters = _this.props.data.parameters
    }

    _this.setState({
      requestResult: '',
      curl: '',
      requestUrl: '',
      responseCode: '',
      requestBody: requestBody,
      parameters: parameters,
    })
  }
}

Example.propTypes = {
  data: PropTypes.object,
}

export default Example
