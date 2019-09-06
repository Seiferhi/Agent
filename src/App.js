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
import Conseils from "./components/Annonces/service/conseils/conseils";
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

        <SideBar />
      </BrowserRouter>
    );
  }
}

export default App;
