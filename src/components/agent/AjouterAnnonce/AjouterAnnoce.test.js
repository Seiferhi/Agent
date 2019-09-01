import React from "react";
import ReactDOM from "react-dom";
import AjouterAnnonces from "./AjouterAnnonces";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AjouterAnnonces />, div);
});
