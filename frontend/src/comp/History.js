import React from "react";
import "../styles/History.css";


export default class History extends React.Component{

	constructor(props)
	{
		super(props);
		this.manejarClick = this.manejarClick.bind(this);
	}



	manejarClick(e)
	{
		console.log(e.target.id);
		this.props.manejoSubmit(e.target.id);
	}
	render()
	{	

		const el_historial = this.props.history;

		return(
			<div>
			<h2>
			Ultimos 10 tags buscados
			</h2>
				<ul id="historial">
					{el_historial.map((elemento, i) => {
						return (
							<li
								key={i}
								id={elemento.hashtag}
								onClick={this.manejarClick} 
							>
								#{elemento.hashtag}
							</li>
						);
					})}
				</ul>
			</div>
		);}
}