import React, { Component } from "react";
import MaterialTable from "material-table";
class PositioningActionsColumn extends React.Component {
  render() {
    return (
      <MaterialTable
        columns={[
          { title: "Nom & prénom", field: "nom" },
          { title: "Adresse Email", field: "email" },
          { title: "Téléphone ", field: "tel", type: "numeric" },
          {
            title: "Message",
            field: "message",
            type: "String"
          }
        ]}
        data={[
          {
            nom: "Mehmet",
            email: "Baran",
            tel: 1987,
            message:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dui vestibulum, bibendum"
          }
        ]}
        actions={[
          {
            icon: "save",
            tooltip: "Save User",
            onClick: (event, rowData) => alert("You saved " + rowData.name)
          },
          {
            icon: "delete",
            tooltip: "Delete User",
            onClick: (event, rowData) => {
              window.confirm("You want to delete " + rowData.name);
            }
          }
        ]}
      />
    );
  }
}
export default PositioningActionsColumn;
