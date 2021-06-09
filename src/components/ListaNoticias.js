import React from "react";
import Noticia from "./Noticia";
const ListaNoticias = (props) => (
  <div className="row">
    {props.noticias.map((noticia) => {
      if (noticia.image) {
        return <Noticia key={noticia.url} noticia={noticia} />;
      }
      return null;
    })}
  </div>
);

export default ListaNoticias;
