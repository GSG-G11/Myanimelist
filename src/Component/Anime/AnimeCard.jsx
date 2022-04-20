import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/NOANIME.png'

import "./AnimeCard.css";
function AnimeCard(props) {
  const [anime, setAnime] = useState(props.anime);
  const [isLoading, setIsLoading] = useState(true);
  const search = props.title;

  useEffect(() => {
    if (search === "" || search === undefined) {
      fetch(`https://kitsu.io/api/edge/anime?page[limit]=12&page[offset]=0`)
        .then((response) => response.json())
        .then((data) => {
          setAnime(data);
          setIsLoading(false);
        });
    } else {
      fetch(
        `https://kitsu.io/api/edge/anime?page[limit]=12&filter%5Btext%5D=${search}`
      )
        .then((response) => response.json())
        .then((data) => {
          setAnime(data);
          setIsLoading(false);
        });
    }
  }, [search]);

  return (
    <div className="all">
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="container">
          {anime.data.length ? (anime.data.map((anime,index) => (
            <div  className="animeCard" key={index}>
          
              <div className="imgCard">
                <img src={anime.attributes.posterImage.small} alt="anime" />
              </div>
              <div className="footer">
              <div className="animeTitle">
                    <Link  className="animeTitle" to={`/anime/${anime.id}`}>
                      {anime.attributes.titles.en_jp}
                    </Link>
                  </div>
                <div className="averageRating">
                  {anime.attributes.averageRating}
                </div>
               
              </div>
            </div>
          ))): (<img src={logo} alt="404" />)}
         
        </div>
      )}
    </div>
  );
}

export default AnimeCard;
