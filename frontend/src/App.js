import React from "react";
import Tags from "./Tag";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hashtag: "",
      comunes: []
    };
    console.log(this.state.comunes);
    this.manjearSubmit = this.manjearSubmit.bind(this);
  }

  manjearSubmit() {
fetch(`https://www.instagram.com/explore/tags/${this.state.hashtag}/?__a=1`)
  .then(res => res.json())
    .then(data => {this.setState(
      {
        comunes: data
      }
      );
  });
  }



  render() {
    return (
      <div className="card">
      <div className="card-header">
      <strong>Ingresar tag</strong>
      </div>
      <div className="card-body">
      <input type="text" placeholder="hashtag" value={this.state.hashtag} onChange={this.manejarCambioTag}/><br />
      <button className="btn btn-info" type="button" onClick={this.manjearSubmit}>Buscar</button>
      {this.state.comunes.graphql && <Tags comunesProps = {this.state.comunes}/>}
      </div>
      </div>
      );
    }
  }