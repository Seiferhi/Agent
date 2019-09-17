import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import PropTypes from "prop-types";
import axios from "axios";

class EtudeProjetTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      etudeProjets: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/etudeProjets/all")
      .then(res => {
        this.setState({ etudeProjets: res.data });
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
        },

        {
          label: "Profession & Description",
          field: "description & Description",
          sort: "asc",
          width: 100
        },
        {
          label: "Titre",
          field: "titre",
          sort: "asc",
          width: 150
        },

        {
          label: "Localistion",
          field: "localistion",
          sort: "asc",
          width: 100
        },
        {
          label: "Budget",
          field: "budget",
          sort: "asc",
          width: 100
        },

        {
          label: "Description du projet",
          field: "description du projet",
          sort: "asc",
          width: 100
        }
      ],
      rows: []
      // actions: [
      //   {
      //     icon: "save",
      //     tooltip: "Save User",
      //     onClick: (event, rowData) => alert("You saved " + rowData.name)
      //   },
      //   rowData => ({
      //     icon: "delete",
      //     tooltip: "Delete User",
      //     onClick: (event, rowData) =>
      //       window.confirm("You want to delete " + rowData.name),
      //     disabled: rowData.birthYear < 2000
      //   })
      // ],
      // options: [{ actionsColumnIndex: -1 }]
    };

    {
      this.state.etudeProjets.map(etudeProjet =>
        data.rows.push({
          Nom: etudeProjet.nom,
          "Email ": etudeProjet.email,
          Telephone: etudeProjet.tel,
          "Profession & Description": etudeProjet.description,
          Titre: etudeProjet.titre,
          "Budget ": etudeProjet.budget,
          Localisation: etudeProjet.localisation,
          "Profession du projet": etudeProjet.description2
        })
      );
    }

    return <MDBDataTable striped hover data={data} />;
  }
}
export default EtudeProjetTable;
