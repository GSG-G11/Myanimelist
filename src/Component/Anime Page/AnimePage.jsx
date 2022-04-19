import React, { useState, useEffect } from "react";
import "./AnimePage.css";

function AnimePage(props) {
    const [anime, setAnime] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const id = props.id;
    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?page[limit]=12&page[offset]=0`)
            .then((response) => response.json())
            .then((data) => {
                setAnime(data);
                setIsLoading(false);
                console.log(data.data[id]);
            });
    }, [id]);


    
  return (
    <div>
        {isLoading ? (
            <div className="loading">Loading...</div>
        ) : (
            //Anime Card
            // Get Data
            // one Anime only
         <div className="pageContainer">
                <div className="animePage">
                <div className="imgAnime">
                    <img src={anime.data[id].attributes.posterImage.small} alt="anime" />
                </div>
                <div className="pfooter">
                    <div className="animePageTitle">
                        {anime.data[id].attributes.titles.en_jp}
                    </div>
                    <div className="synopsis">
                        {anime.data[id].attributes.synopsis}
                    </div>
               
                        <div className="episodes">
                        {anime.data[id].attributes.episodeCount}
                        </div>
                        <div className="startDate">
                        {anime.data[id].attributes.startDate}
                        </div>
                        <div className="endDate">
                        {anime.data[id].attributes.endDate}
                        </div>
                        <div className="ratingRank">
                        {anime.data[id].attributes.ratingRank}
                        </div>
                        <div className="averagePageRating">
                        {anime.data[id].attributes.averageRating}
                    </div>



                </div>
            </div>
            </div>
        )}

    </div>
    );
}

export default AnimePage