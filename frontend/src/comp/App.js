import React from "react";
import Tags from "./Tag";
import Input from "./Input";
import History from "./History";

var findHashtags = require("find-hashtags");


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comunes: [],
      historial: []
    };
    console.log(this.state.comunes);
    this.manjearSubmit = this.manjearSubmit.bind(this);
    this.decide = this.decide.bind(this);
    this.mostrarHistoriaInicio = this.mostrarHistoriaInicio.bind(this);
  }

  manjearSubmit(hashtag) {
    fetch(`https://www.instagram.com/explore/tags/${hashtag}/?__a=1`)
    .then(res => res.json())
    .then(data => {this.setState(
      {
        comunes: this.decide(data)
      }
      );
  });
    fetch("/api/hashtags", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({hashtag})
    }).then(()=>this.mostrarHistoriaInicio());
    
  }

  mostrarHistoriaInicio()
  {
    fetch("/api/hashtags")
      .then(res => res.json())
      .then(data => this.setState({historial: data}));
  }

  decide(json)
  {
    var dict = {}; // create an empty array
    const data = json.graphql.hashtag.edge_hashtag_to_top_posts.edges;
    for(let d of data)
    {
      let all_tags =findHashtags(d.node.edge_media_to_caption.edges[0].node.text);
      console.log(all_tags);

      for(let t of all_tags)
      {
        var tag_minus = t.toLowerCase();
        if(tag_minus in dict)
        {
          ++dict[tag_minus];    
        } 
        else
        {
          dict[tag_minus] = 1;
        }
      }
    }
    // Create items array
    var items = Object.keys(dict).map((key) =>
      [key, dict[key]]
      );

    // Sort the array based on the second element
    items.sort((first, second) =>
       second[1] - first[1]
    );
    return items;
  }

  render() {
    return (
      <div className="card">
      <div className="card-header">
      <strong>Ingresar tag</strong>
      </div>
      <div className="card-body">
      <Input manjearSubmit={this.manjearSubmit}/>
       <Tags comunes = {this.state.comunes}/>
       <History history = {this.state.historial}/>
      </div>
      </div>
      );
    }
  }