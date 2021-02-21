import react from "react";
import PropTypes from "prop-types";

function Movie({id,title,year,summary,poster}){
    return (
        <div class ="movie">
            <img src={poster} alt ={title}/>
            <div class ="movie_data">
                <h3 class = "movie_title">{title}</h3>
                <h5 class ="movie_year">{year}</h5>
                <p class ="movie_summary">{summary}</p>
            </div>
        </div>
      );
}

export default Movie;