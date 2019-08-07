import React, { Component } from "react";
import TopBar from "./components/topBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import Annonces from "./components/Annonces/Annonces";
import { BrowserRouter, Route } from "react-router-dom";
import AjouterAnnocne from "./components/AjouterAnnonce/AjouterAnnonce";
import Image from "./components/image/Image";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" />
        <TopBar />
        <Route exact path="/annonces" component={Annonces} />
        <Route exact path="/ajouterAnnonce" component={AjouterAnnocne} />
        <Route exact path="/image" component={Image} />
        <SideBar />
      </BrowserRouter>
    );
  }
}

export default App;
