import React, { Component } from "react";
import TopBar from "./components/topBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import Annonces from "./components/Annonces/Annonces";
import { BrowserRouter, Route } from "react-router-dom";
import AjouterAnnocne from "./components/AjouterAnnonce/AjouterAnnonce";
import Profil from "./components/profile/Profile";
import BoiteRec from "./components/boiteDeReception/boiteDeReception";
import DetaillesMgs from "./components/boiteDeReception/detailleMsg";
import DemandeVente from "./components/vente/Vente";
import DemandeLocation from "./components/location/location";
import Conseils from "./components/service/conseils/conseils";
import EtudeProjet from "./components/service/etudeProjet/etudeProjet";
import Autre from "./components/service/autres/autre";
import Client from "./components/client/clients";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" />
        <TopBar />
        <Route exact path="/annonces" component={Annonces} />
        <Route exact path="/ajouterAnnonce" component={AjouterAnnocne} />
        <Route exact path="/profil" component={Profil} />
        <Route exact path="/boiteReception" component={BoiteRec} />
        <Route exact path="/detaillesMessage" component={DetaillesMgs} />
        <Route exact path="/demandeVente" component={DemandeVente} />
        <Route exact path="/demandeLocation" component={DemandeLocation} />
        <Route exact path="/conseils" component={Conseils} />
        <Route exact path="/etudeProjets" component={EtudeProjet} />
        <Route exact path="/autres" component={Autre} />
        <Route exact path="/clients" component={Client} />
        <SideBar />
      </BrowserRouter>
    );
  }
}

export default App;
