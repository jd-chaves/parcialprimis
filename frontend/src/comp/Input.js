import React from "react";
import "../styles/Input.css";


export default class Input extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			tag: ""
		};
		this.manejarCambioTag = this.manejarCambioTag.bind(this);
		this.manjearSubmit = this.manjearSubmit.bind(this);
	}

	manejarCambioTag(e)
	{
		this.setState({
			tag: e.target.value
		});
	}

	manjearSubmit()
	{
		this.props.manjearSubmit(this.state.tag);
	}
	render()
	{
		return(
			<div>
			<label id="numeral"><strong>#</strong></label>
				<input type="text" placeholder="Tag" value={this.props.valor} onChange={this.manejarCambioTag}/>
				<button className="btn btn-info" type="button" onClick={this.manjearSubmit}>Buscar</button>
			</div>
		);}
}