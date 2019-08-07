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
                  <a
                    className=" waves-effect waves-dark"
                    href="#"
                    aria-expanded="false"
                  >
                    <i className="icon-Car-Wheel" />
                    <span className="hide-menu">Gérer les annonces </span>
                  </a>
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
                      <a href="layout-single-column.html">Ventes</a>
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
                      <a href="starter-kit.html">Starter Kit</a>
                    </li>
                    <li>
                      <a href="pages-blank.html">Blank page</a>
                    </li>
                    <li>
                      <a href="#" className="has-arrow">
                        Authentication{" "}
                        <span className="label label-rounded label-success pull-right">
                          6
                        </span>
                      </a>
                      <ul aria-expanded="false" className="collapse">
                        <li>
                          <a href="pages-login.html">Login 1</a>
                        </li>
                        <li>
                          <a href="pages-login-2.html">Login 2</a>
                        </li>

                        <li>
                          <a href="pages-recover-password.html">
                            Recover password
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="#" className="has-arrow">
                        Error Pages
                      </a>
                      <ul aria-expanded="false" className="collapse">
                        <li>
                          <a href="pages-error-400.html">400</a>
                        </li>
                        <li>
                          <a href="pages-error-403.html">403</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
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
