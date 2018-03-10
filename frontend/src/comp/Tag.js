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
		const pags = [...Array(6).keys()].map(i =>i+1);
		return (
			<div>
				<table className="table table-hover">
					<thead className="thead-inverse">
						<tr>
							<th>Hashtag</th>
							<th>Veces</th>
						</tr>
					</thead>
					<tbody>
						{items_ahora.map((arg, i) => 
							<tr><td key={i}>{arg[0]}</td>  <td> {arg[1]}</td></tr>
						)}
      
					</tbody>
				</table>

				<h3>Pagina: {this.state.pag_act}</h3>
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
				
			</div>
		);
	}

}