import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';


class PositioningActionsColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conseils: ''
    };
  }



componentDidMount() {
axios 
  .get("localhost:8080/conseils/all")
  .then(res => {
    this.setState({ conseils: res.data });
  })
  .catch(err => console.log(err));
}


render(){
  
  const {conseils} = this.state

  const data = {
    columns: [
      {
        label: 'Nom',
        field: 'nom',
        sort: 'asc',
        width: 150
      },
    
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Telephone',
        field: 'telephone',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Message',
        field: 'message',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
    ]
  };
  
  if(conseils)
  {
  {conseils.map((conseil,index) =>  
   conseil.activated ?
    data.rows.push(
    {
     
      'Nom' :conseil.nom, 
      'Email ' :conseil.email, 
      'Telephone' :conseil.tel, 
      'Message' :conseil.message, 
     } )  :null
  
)}
  
  }

  return (
    <MDBDataTable
      striped
      hover
      data={data}
    />
  );
}
}

export default PositioningActionsColumn;