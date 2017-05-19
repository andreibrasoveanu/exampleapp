import React, { Component } from 'react';

import './styles/master.css';

import Check from './icons/Icons';


class DemoAppGuide extends Component {

  render() {
    let { vendorSecret, vendorApiKey, userToken, orgToken} = this.props;
    return(
      <div>
        <div className='card'>
          <div className='heading'> 
            <Check fill={vendorApiKey && vendorSecret ? '#68B244' : '#fff'}/> 
            1. Register an App with Salesforce: 
          </div>
          <ul>
            <li> The first step is to register an application with salesforce </li>
            <li> See our documentation on how to register an app with salesforce:
              <a href="https://developers.cloud-elements.com/docs/elements/salesforce/salesforce-endpoint-setup.html">
                Documentation Link
              </a>
            </li>
            <li>
              Be sure to register this callback url: <b>{process.env.NGROK}</b>
            </li>
            <li>
              Under <b> src > App.js </b> set the vendorApiKey and vendorSecret
            </li>
          </ul>
        </div>
        <div className='card'>
          <div className='heading'> 
            <Check fill={userToken && orgToken ? '#68B244' : '#fff'}/> 
            2. Cloud Elements Authentication
          </div>
          <ul>
            <li>
              Add your Cloud Element Authentication Tokens
            </li>
            <li>
              You can find you user and organization secrets in the console, under the secrets tab
            </li>
            <li>
              Add the user and organization token, to the configuration values under <b> src > App.js </b>
            </li>
          </ul>
        </div>
      </div>
    )
  }

}

export default (DemoAppGuide);