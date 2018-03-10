import React from "react";


export default class Creative extends React.Component{

	render()
	{	
		const huffman = {
			a:"1110",
			b:"110000",
			c:"01001",
			d:"11111",
			e:"100",
			f:"00101",
			h:"0110",
			i:"1011",
			j:"001001011",
			k:"0010011",
			l:"11110",
			m:"00111",
			n:"1010",
			o:"1101",
			p:"110001",
			q:"001001001",
			r:"0101",
			s:"0111",
			t:"000",
			u:"01000",
			v:"001000",
			w:"00110",
			x:"001001010",
			y:"110010",
			z:"001001000"};
		
		var arr =this.props.historial; 
		var a ="";
		for(let p of arr)
		{
			a+=p.hashtag;
		}
		var b = "";


		for (var i = 0; i < a.length; i++) {
			if(a.charAt(i) in huffman)
			{
				b += huffman[a.charAt(i)];
			}
		}
		return <div>
			<h1>Y como no pude pensar en algo mejor...A continuacion estan los tags codificados usando {"Huffman Codes"} (para ingles)</h1>
			<p>{b}</p>
		</div>;
	}
}