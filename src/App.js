import React,{Component, Fragment} from 'react';
import Header from './components/Header'
import ListaNoticias from './components/ListaNoticias'
import Formulario from  './components/Formulario'
class App extends Component{
  state={
    noticias: []

  }
  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async(categoria='general')=>{
    const url=`https://newsapi.org/v2/top-headlines?country=ca&category=${categoria}&apiKey=f9cc0cce0bb54c7280f167f5151996a5`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    console.log(noticias.articles);
    this.setState({
      noticias: noticias.articles
    })
  }
  
  render(){
    return(
      <Fragment>
          <Header titulo='News React API'/>
          <div className="container white contenedor-noticias">
           <Formulario
           consultarNoticias={this.consultarNoticias}
           />
           <ListaNoticias 
            noticias= {this.state.noticias}
           />
          </div>
      </Fragment>
    );
  }
}
export default App;
