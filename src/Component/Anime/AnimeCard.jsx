import React, {useState, useEffect} from 'react';
import './AnimeCard.css';

function AnimeCard(props) {

 
  return (
    <div className="container">
  

        <div className="animeCard">
          <div className="imgCard">
            <img src="https://img1.ak.crunchyroll.com/i/spire4/5568ffb263f6bcba85a639980b80dd9a1612993223_full.jpg" alt="" />
          </div>
          <div className="footer">
                  <p className="animeTitle">Naruto</p>
                  <p className="averageRating">7.9</p>
                </div>
        </div>
        <div className="animeCard">
          <div className="imgCard">
            <img src="https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="" />
          </div>
          <div className="footer">
                  <p className="animeTitle">One Piece</p>
                  <p className="averageRating">10</p>
                </div>
        </div>
        <div className="animeCard">
          <div className="imgCard">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Bleachanime.png/220px-Bleachanime.png" alt="" />
          </div>
          <div className="footer">
                  <p className="animeTitle">Bleach</p>
                  <p className="averageRating">8.9</p>
                </div>
        </div>
        <div className="animeCard">
          <div className="imgCard">
            <img src="https://img1.ak.crunchyroll.com/i/spire3/dac363972d628a7009e04fdeb9d7104a1641869274_main.jpg" alt="" />
          </div>
          <div className="footer">
                  <p className="animeTitle">Attack On Titen</p>
                  <div className='cirlce'>
                  <p className="averageRating">6.5</p>

                  </div>

                </div>
        </div>
    </div>
  );
}


export default AnimeCard;