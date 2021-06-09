import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias";
import Formulario from "./components/Formulario";
class App extends Component {
  state = {
    noticias: [],
  };
  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = "general") => {
    const url = `https://gnews.io/api/v4/top-headlines?topic=${categoria}&&lang=en&&token=e87eb3d9850a7cf538c0edfb63ac4d03`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    this.setState({
      noticias: noticias.articles.slice(0, 9),
    });
  };

  render() {
    return (
      <Fragment>
        <Header titulo="News React API" />
        <div className="container white contenedor-noticias">
          <Formulario consultarNoticias={this.consultarNoticias} />
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </Fragment>
    );
  }
}
export default App;
