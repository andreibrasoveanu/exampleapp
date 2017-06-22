import React, { Component } from 'react';
import Authentication from './components/Authentication';
import GetData from './components/GetData';
import DemoAppGuide from './components/DemoAppGuide';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Authentication tokens for connecting to cloud elements
    // This tokens are specific to the current user
    // In this case will just hard code these values as an example user
    // You can find these values under the secrets tab in the console
    this.state = {
      // Cloud Element authentication tokens
      orgToken: '',
      userToken: '',
      // Vendor specific values, these come from your registered application
      vendorApiKey: '',
      vendorSecret: '',
    }
  }

  // Helper Function
  setElementToken(token) {
    this.setState({
      elementToken: token
    })
  }

  // Error handling
  setErrorMessage(message) {
    this.setState({
        errorMessage: message
    })  
  } 

  render() {
    let { userToken, orgToken, elementToken, vendorSecret, vendorApiKey, errorMessage} = this.state;
    return (
      <div className='App'>
        <div className='pageHeading'> Cloud Elements Demo App </div>
        {/* Instructions on how to use this app, you can ignore this */}
        <DemoAppGuide 
          vendorSecret={ vendorSecret }
          vendorApiKey={ vendorApiKey }
          orgToken={ orgToken } 
          userToken={ userToken } />
        {/* Step 3 of the process, contains all the logic for
          authenticating an instance of Salesforce */} 
        {/* vendorSecret, vendorApiKey, orgToken, and userToken are all required for 
            authentication to salesforce*/}
        {/* The other two values are used to retrieve the element token from the authentication*/} 
        <Authentication 
          vendorSecret={ vendorSecret }
          vendorApiKey={ vendorApiKey }
          orgToken={ orgToken } 
          userToken={ userToken } 
          elementToken={ elementToken }
          setElementToken={ token => this.setElementToken(token) }
          errorMessage={ errorMessage }
          setErrorMessage={ message => this.setErrorMessage(message) }
        />
        {/* Step 4, contains all the logic to pull data from the element instance*/} 
        <GetData orgToken={ orgToken } userToken={ userToken } elementToken={ elementToken }/>
      </div>
    );
  }
}

export default App;
