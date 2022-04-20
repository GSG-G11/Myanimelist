import React, { useState, useEffect } from "react";
import "./AnimePage.css";

function AnimePage(props) {
  const [anime, setAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const str = window.location.href;
  const id =  str.substring(str.indexOf("/") + 31);

  useEffect(() => {
    fetch(`https://kitsu.io/api/edge/anime?page[limit]=12&filter%5Bid%5D=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAnime(data);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
    
        <div className="pageContainer">
          <div className="animePage">
            <div className="imgAnime">
              <img
                src={anime.data[0].attributes.posterImage.small}
                alt="anime"
              />
            </div>
            <div className="pfooter">
              <div className="animePageTitle">
                <span > Anime Name :  </span>

                {anime.data[0].attributes.titles.en_jp}
              </div>
              <div className="synopsis">
              <span className="nn"> Anime synopsis :  </span>

                {anime.data[0].attributes.synopsis}
              </div>

              <div className="episodes">
              <span > Anime episodes :  </span>

                {anime.data[0].attributes.episodeCount}
              </div>
              <div className="startDate">
              <span > Anime startDate :  </span>

                {anime.data[0].attributes.startDate}
              </div>
              <div className="endDate">
              <span > Anime endDate :  </span>

                {anime.data[0].attributes.endDate}</div>
              <div className="ratingRank">
              <span > Anime ratingRank :  </span>

                {anime.data[0].attributes.ratingRank}
              </div>
              <div className="averagePageRating">
              <span > Anime averagePageRating :  </span>

                {anime.data[0].attributes.averageRating}
              </div>
            </div>
          </div>
        </div>
      )}
     
    </div>
  );
}

export default AnimePage;
