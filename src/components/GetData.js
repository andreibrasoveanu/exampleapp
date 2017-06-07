import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

import './styles/master.css';
import './styles/getdata.css';

import Check from './icons/Icons';

class GetData extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.listResources = this.listResources.bind(this);
  }

  listResources() {
    let {userToken, orgToken, elementToken} = this.props;
    let baseUrl = 'https://api.cloud-elements.com/elements/api-v2';
    let path= 'contacts';
    // The configuration for fetching data
    let config = {
      method: 'GET',
      headers: {
        'Authorization': `User ${userToken}, Organization ${orgToken}, Element ${elementToken}`,
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
    let { elementToken } = this.props;
    let data = resources ? resources : {};
    let columns = [{Header: 'FirstName', accessor: 'FirstName' },
     {Header: 'LastName', accessor: 'LastName' }, 
     {Header: 'Email', accessor: 'Email' }
    ];
    return(
      <div>
        <div className='card'>
          <div className='heading'> <Check fill={elementToken ? '#fff' : '#fff'}/> 
            4. Pull Data from the Vendor </div>
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