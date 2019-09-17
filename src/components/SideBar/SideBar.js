import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <aside className="left-sidebar">
          {/* Sidebar scroll*/}
          <div className="scroll-sidebar">
            {/* Sidebar navigation*/}
            <nav className="sidebar-nav">
              <ul id="sidebarnav">
                <li className="nav-small-cap">--- ANNONCES</li>
                <li>
                  {" "}
                  <Link
                    className=" waves-effect waves-dark"
                    to="/annonces"
                    aria-expanded="false"
                  >
                    <i className="icon-Car-Wheel" />
                    <span className="hide-menu">Gérer les annonces </span>
                  </Link>
                </li>

                <li className="nav-small-cap">--- DEMANDES</li>
                <li>
                  {" "}
                  <a
                    className="has-arrow waves-effect waves-dark"
                    href="#"
                    aria-expanded="false"
                  >
                    <i className="icon-File" />
                    <span className="hide-menu">Demandes</span>
                  </a>
                  <ul aria-expanded="false" className="collapse">
                    <li>
                      <Link to="/demandeVente">Ventes</Link>
                    </li>
                    <li>
                      <a href="layout-fix-header.html">Achats</a>
                    </li>

                    <li>
                      <a href="layout-logo-center.html">Locations</a>
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a
                    className="has-arrow waves-effect waves-dark"
                    href="#"
                    aria-expanded="false"
                  >
                    <i className="icon-Files" />
                    <span className="hide-menu">
                      Services{" "}
                      <span className="label label-rounded label-info">25</span>
                    </span>
                  </a>
                  <ul aria-expanded="false" className="collapse">
                    <li>
                      <a href="./etudeProjets">Etude Projet</a>
                    </li>
                    <li>
                      <a href="/conseils">Conseils</a>
                    </li>

                    <li>
                      <a href="#">Estimation du prix</a>
                    </li>
                    <li>
                      <a href="#">Négociation</a>
                    </li>
                    <li>
                      <a href="#">Demande une visite</a>
                    </li>
                    <li>
                      <a href="/autres">Autres</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    className=" waves-effect waves-dark"
                    to=""
                    aria-expanded="false"
                  >
                    <i className="icon-Car-Wheel" />
                    <span className="hide-menu">Reporting </span>
                  </Link>
                </li>
              </ul>
            </nav>
            {/* End Sidebar navigation */}
          </div>
          {/* End Sidebar scroll*/}
        </aside>
      </div>
    );
  }
}
export default SideBar;
