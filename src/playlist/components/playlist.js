import React from 'react';
import './playlist.css';

import Media from './media.js'; 

//Componente funcional -> containers -> Qué hace?, no tiene un ciclo de vida
function Playlist(props){
  return (
    <div>
      {
        props.playlist.map((item) => {
          return <Media {...item} key={item.id} />
        })
      }
    </div>
  )
}

export default Playlist;