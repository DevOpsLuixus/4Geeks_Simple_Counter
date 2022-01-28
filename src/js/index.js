//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { Digito } from "./component/digito.js";
//render your react application

let segundo = 0;
let minutos = 0;
let horas = 0;

setInterval(() => {
	segundo++;

	if (segundo > 9) {
		segundo = 0;
		minutos++;
		if (minutos > 9) {
			minutos = 0;
			horas++;
			if (horas > 9) {
				horas = 0;
			}
		}
	}
	ReactDOM.render(
		<>
			<div className="row">
				<Digito minutos={minutos} segundos={segundo} horas={horas} />
			</div>
		</>,
		document.querySelector("#app")
	);
}, 1000);
