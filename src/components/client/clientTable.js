import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import PropTypes from "prop-types";
import axios from "axios";

class ClientTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/clients/all")
      .then(res => {
        this.setState({ clients: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const data = {
      columns: [
        {
          label: "Nom",
          field: "nom",
          sort: "asc",
          width: 150
        },
        {
          label: "Prenonom",
          field: "prenom",
          sort: "asc",
          width: 150
        },

        {
          label: "Email",
          field: "email",
          sort: "asc",
          width: 100
        },
        {
          label: "Telephone",
          field: "telephone",
          sort: "asc",
          width: 100
        }
      ],
      rows: []
    };

    {
      this.state.clients.map(client =>
        data.rows.push({
          Nom: client.nom,
          Prenom: client.prenom,
          "Email ": client.email,
          Telephone: client.tel
        })
      );
    }

    return <MDBDataTable striped hover data={data} />;
  }
}

export default ClientTable;
