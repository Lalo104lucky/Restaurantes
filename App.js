import React from 'react';
import Navigation from './src/modules/navigation/Navigations';
import {app, auth, db, storage} from './src/config/util/firebaseConnection';

export default function App() {
  return(
    <Navigation></Navigation>
  )
}



// Este el putno de partida de la aplicación