import React, { Component } from "react";

class Formulario extends Component {
  state = {
    categoria: "general",
  };

  cambiarCategoria = (e) => {
    this.setState(
      {
        categoria: e.target.value,
      },
      () => {
        this.props.consultarNoticias(this.state.categoria);
      }
    );
  };
  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form>
            <h2>Find news by category</h2>
            <div className="input-field col s12 ">
              <select onChange={this.cambiarCategoria}>
                <option value="breaking-news">Breaking news</option>
                <option value="business">Business</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Formulario;
