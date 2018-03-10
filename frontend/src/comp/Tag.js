import React from "react";
import "../styles/Tag.css";

export default class Tag extends React.Component{
	constructor(props)
	{
		super(props);
		this.state={
			pag_act: 1
		};
		this.ir_a_pag= this.ir_a_pag.bind(this);
	}

	ir_a_pag(e)
	{
		this.setState({
			pag_act: Number(e.target.id),
		});
	}

	render(){
		const ultimo_pag_index=this.state.pag_act*10;
		const primer_pag_index=ultimo_pag_index - 10;
		const items_ahora = this.props.comunes.slice(primer_pag_index, ultimo_pag_index);
		const pags = [...Array(Math.ceil(this.props.comunes.length / 10)).keys()].map(i =>i+1);
		return (
			<div>
        
				<ul id="pags">
					{pags.map(i => {
						return (
							<li
								key={i}
								id={i}
								onClick={this.ir_a_pag}
							>
								{i}
							</li>
						);
					})}
				</ul>
				<ul>
					{items_ahora.map((arg, i) =>
						<li key={i}>{arg[0]}  ----------> {arg[1]} {arg[1]===1 ? "vez" : "veces"}</li>
					)}
				</ul>
			</div>
		);
	}

}