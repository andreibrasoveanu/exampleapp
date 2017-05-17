import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

import './styles/master.css';
import './styles/getdata.css';

class GetData extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.listResources = this.listResources.bind(this);
  }

  listResources() {
    let {userToken, orgToken} = this.props;
    let baseUrl = 'https://api.cloud-elements.com/elements/api-v2';
    let path= 'MyContact';
    // The b
    let config = {
      method: 'GET',
      headers: {
        'Authorization': `User ${userToken}, Organization ${orgToken}, Element RP5PS0slJltwMTb/jR8WI99+o8CLQ8v/9w4m+94kFO4=`,
        'Content-Type': 'application/json'
      }
    }
    fetch(`${baseUrl}/${path}`, config)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          resources: responseJson,
        })
      })
  }

  render() {
    let { resources } = this.state;
    let data = resources ? resources : {};
    let columns = [{Header: 'FirstName', accessor: 'FirstName' },
     {Header: 'LastName', accessor: 'LastName' }, 
     {Header: 'email', accessor: 'email' }
    ];
    return(
      <div>
        <div className='card'>
          <h3>4. Pull Data from the Vendor </h3>
          <div> Retrieve data</div>
          <button onClick={this.listResources}> Pull Data </button>
        </div>
        { resources ?
        <ReactTable className='table' data={data} columns={columns} />
        :
        <div> </div>
        }
      </div>
    )
  }

}

export default (GetData);