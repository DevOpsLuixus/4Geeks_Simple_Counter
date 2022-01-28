import React from "react";
import { Digito } from "./digito";
import PropTypes from "prop-types";

//create your first component
const Home = (props) => {
	console.return(
		<>
			<Digito numero={props.segundo} /> <Digito />
		</>
	);
};

export default Home;
