import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import {useNavigate, useParams} from 'react-router-dom'

const Player = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(-2); // Navigates to the / route
  };


  const [apiData, setApiData] = useState({
        name:"",
        key:"",
        published_at:"",
        type:""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTk2M2Y0ZDdhYWFlNGM0NjYxZjZlN2M5NjU5ZWFiYSIsIm5iZiI6MTc2MTM1MzE5Ny4yNjQ5OTk5LCJzdWIiOiI2OGZjMWRlZGIzNzNlNWY2Njc2YTcyYjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CIjKsIaNAMgMeAxw6Xf20pEA92vzD9180FVK0GzcSjU'
    }
  };
  useEffect(()=>{
          fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
          .then(res => res.json())
          .then(res => setApiData(res.results[0]))
          .catch(err => console.error(err));
        },[])
  
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="back arrow icon" onClick={handleButtonClick} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer'
      frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
