import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Search from './components/Search/Search';
import Trending from './components/Trending/Trending'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
library.add(faFilm)

const API_KEY = '7ce76177';
class App extends Component {

  state = {
     input : '',
     title : ' ' , 
     genre: '',
     description: '',
     init : true  , // initial values for the cards preview ,
     phase : 'Search For a keyWord in the Box' // user msg to search resuls
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
  if(data.Response === 'True'){
    let title = data.Title;
    let genre = data.Genre;
    let description = data.Plot;
        this.setState({
        title, 
        genre,
        description,
        init : false,
        phase : 'some_thing'
    })
  }
  else {
    this.setState({phase : 'Movie Not Found'})
  }
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
           phase = {this.state.phase }
           />
           <Trending />
      </div>
    );
  }
}

export default App;


//Features To Work on :: 
// 1. Add a check if the movie name doesnt exist                        [Done]  
// 2.design a not found page / Route in the if else statement 
// 3.dynamimcally change the app response to react with user searchs   [Done] 
// 4.create trending movies cards                                      [Done] 
// 5. fetch random images in cards posters                             [Done] 
// 6. add information to every movie details [ route ]
//7. create nice header for movies 