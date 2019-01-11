import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
library.add(faFilm)

class App extends Component {
  render() {
    return (
      <div className="App">
           <Header />
      </div>
    );
  }
}

export default App;
