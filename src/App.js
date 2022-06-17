import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/searchBar/SearchBar";
// styles
import "./styles/App.scss"
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


// Here is your key: fcf9fd19


const StaticData = {
  "Title": "Italian Spiderman",
  "Year": "2007",
  "imdbID": "tt2705436",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}

const API_URL = "http://www.omdbapi.com?apikey=fcf9fd19";
const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([])
  const SearchMovies = async (title) => {
    const response = await axios.get(`${API_URL}&s=${title}`)
    const Data = response.data;
    console.log(Data.Search);
    setMovies(Data.Search)
    console.log(movies);
  }
  const inputChange = (e) => {
    setInputValue(e.target.value);
    // console.log(inputValue);
  }


  useEffect(() => {
    SearchMovies("Supermen")
  }, [])

  // Movie search
  const searchMovies = () => {
    SearchMovies(inputValue)
  }

  return (
    <div className="main-app-container">
      <div className="container">
        <div className="title1">My Movies</div>
        <div className="searchBar">
          <SearchBar inputValue={inputValue} searchData={searchMovies} handleChange={inputChange} />
        </div>
        {
          movies?.length > 0 ? (

            <div className="movie-lists">
              {movies && movies.map((item) => {
                return (
                  <>
                    <div className="card movie_card">
                      <div className="content">
                        <div className="img">
                          <img src={item.Poster !== 'N/A' ? item.Poster : "https://media.istockphoto.com/photos/focused-fashion-model-looking-away-wearing-leather-jacket-picture-id1282302788?b=1&k=20&m=1282302788&s=170667a&w=0&h=xiQKuY2WyfdW9VtYkqxhmHxsa0XJW82SL6QXn4_K7ak="} alt="Loading...." />
                        </div>
                      </div>
                      <div className="title5">{item.Title}</div>
                    </div>
                  </>
                )
              })}
            </div>
          ) : (
            <div className="empty">
              <h2>No Movies Found.</h2>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default App;
