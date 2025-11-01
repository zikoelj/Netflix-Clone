import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import {Link} from 'react-router-dom'

const TitleCards = ({title, category}) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTk2M2Y0ZDdhYWFlNGM0NjYxZjZlN2M5NjU5ZWFiYSIsIm5iZiI6MTc2MTM1MzE5Ny4yNjQ5OTk5LCJzdWIiOiI2OGZjMWRlZGIzNzNlNWY2Njc2YTcyYjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CIjKsIaNAMgMeAxw6Xf20pEA92vzD9180FVK0GzcSjU'
    }
  };
  

const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(error => console.error(error));

  if (cardsRef.current) {
    cardsRef.current.addEventListener('wheel', handleWheel);
  }
  }, [])

  return (
    <div className='title-cards'>
      <h2> { title || "Popular on Netflix"} </h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt={card.nameoriginal_title} />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
