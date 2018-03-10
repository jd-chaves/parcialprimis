import React from "react";

export default class History extends React.Component{

	render()
	{	
		console.log(this.props);
		const el_historial = this.props.history;

		return(
			<div>
				<ul id="historial">
					{el_historial.map(i => {
						return (
							<li
								key={i}
								id={i}
							>
								{el_historial[i]}
							</li>
						);
					})}
				</ul>
			</div>
		);}
}