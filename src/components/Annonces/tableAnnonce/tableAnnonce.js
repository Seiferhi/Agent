import React from "react";
import MaterialTable from "material-table";

class Editable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Titre", field: "Titre" },

        {
          title: "Description",
          field: "Description",
          initialEditValue: "initial edit value"
        },
        { title: "Statut", field: "Statut", type: "numeric" },
        {
          title: "Catégories",
          field: "Catégories"
          // lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
        },

        { title: "Localisation", field: "Localisation" },
        { title: "Date", field: "Date" }
      ],
      data: [
        {
          Titre: "Mehmet",
          Description: "Baran",
          Statut: "Vente",
          Catégories: "Maison",
          Localisation: "Tunis",
          Date: "01/012019"
        },
        {
          Titre: "Zerya Betül",
          Description: "Baran",
          Statut: "Achat",
          Catégories: "Maison",
          Localisation: "Tunis",
          Date: "03/02/2019"
        }
      ]
    };
  }

  render() {
    return (
      <MaterialTable
        title="Editable Preview"
        columns={this.state.columns}
        data={this.state.data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.data;
                  data.push(newData);
                  this.setState({ data }, () => resolve());
                }
                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.data;
                  const index = data.indexOf(oldData);
                  data[index] = newData;
                  this.setState({ data }, () => resolve());
                }
                resolve();
              }, 1000);
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  let data = this.state.data;
                  const index = data.indexOf(oldData);
                  data.splice(index, 1);
                  this.setState({ data }, () => resolve());
                }
                resolve();
              }, 1000);
            })
        }}
      />
    );
  }
}
export default Editable;
