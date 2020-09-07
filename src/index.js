import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header";


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Header />, wrapper) : false;
