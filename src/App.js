import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Search from './components/Search/Search'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
library.add(faFilm)

const API_KEY = 'GET_YOUR_OWN';
class App extends Component {

  state = {
     input : '',
     title : ' ' , 
     genre: '',
     description: '',
     init : true  , // initial values for the cards preview ,
  }
  
  handleInput = (event) => {
   event.preventDefault();
   this.setState({
      input : event.target.value,
    }) 
}

handleFetch = () => {
 fetch(`http://www.omdbapi.com/?t=${this.state.input}&apikey=${API_KEY}`)
.then(results => results.json())
.then(data => {
    let title = data.Title;
    let genre = data.Genre;
    let description = data.Plot;
        this.setState({
        title, 
        genre,
        description,
        init : false
    })
})
.catch(err => console.log('sorry Wrong Fetch!'))
}


  render() {
    return (
      <div className="App">
           <Header />
           <Search search = {this.handleFetch}  change = {this.handleInput} />
           <Cards 
           title ={this.state.title} 
           genre = {this.state.genre}
           description = {this.state.description}
           init = {this.state.init} 
           />
      </div>
    );
  }
}

export default App;
