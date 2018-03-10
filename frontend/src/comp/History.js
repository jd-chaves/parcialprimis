import React from "react";

export default class History extends React.Component{

	render()
	{	
		console.log("los props son: "+this.props);
		const el_historial = this.props.history;

		return(
			<div>
				<ul id="historial">
					{el_historial.map((elemento, i) => {
						return (
							<li
								key={i}
								id={i}
							>
								{elemento.hashtag}
							</li>
						);
					})}
				</ul>
			</div>
		);}
}