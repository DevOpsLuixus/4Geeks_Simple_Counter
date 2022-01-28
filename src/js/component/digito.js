import React from "react";
import PropTypes from "prop-types";

export const Digito = (props) => {
	return (
		<div className="digito">
			<div className="numero">
				<h1>{props.segundos}</h1>
			</div>

			<div className="numero">
				<h1>{props.minutos}</h1>
			</div>

			<div className="numero">
				<h1>{props.horas}</h1>
			</div>
		</div>
	);
};
