import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import EditableVente from "./../vente/tableVente";

class DemandeLocation extends Component {
  render() {
    return (
      <div className="Annonces">
        <div className="page-wrapper">
          {/* Container fluid  */}
          <div className="container-fluid">
            {/* Bread crumb and right sidebar toggle */}
            <div className="row page-titles">
              <div className="col-md-5 align-self-center">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="javascript:void(0)">Acceuil</a>
                  </li>
                  <li className="breadcrumb-item ">Demande</li>
                  <li className="breadcrumb-item active"> Location</li>
                </ol>
              </div>
              <div className="col-md-7 align-self-center text-right d-none d-md-block">
                <Link to="/ajouterAnnonce">
                  <button type="button" className="btn btn-info">
                    <i className="fa fa-plus-circle" /> Ajouter Une Annonce
                  </button>
                </Link>
              </div>
              <div className>
                <button className="right-side-toggle waves-effect waves-light btn-inverse btn btn-circle btn-sm pull-right m-l-10">
                  <i className="ti-settings text-white" />
                </button>
              </div>
            </div>
            {/* End Bread crumb and right sidebar toggle */}
            {/* Start Page Content */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Data Table</h4>
                    <h6 className="card-subtitle">Data table example</h6>
                    <div className="table-responsive m-t-40">
                      <EditableVente />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Container fluid  */}
        </div>
      </div>
    );
  }
}
export default DemandeLocation;
