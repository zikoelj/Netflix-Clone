import React from 'react'
import './Home.css'
import Navbar from  '../../Components/Navbar/Navbar'
import bannerHero from '../../assets/hero_banner.jpg'
import titleHero from '../../assets/hero_title.png' 
import playIcon from '../../assets/play_icon.png' 
import infoIcon from '../../assets/info_icon.png' 
import TitleCards from '../../Components/TitleCards/TitleCards'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={bannerHero} alt="banner logo"  className='banner-img'/>
        <div className="hero-caption">
        <img src={titleHero} alt="title logo"  className='caption-img'/>
        <p>
          Discovering his ties to a secret ancient order, 
          a young man living in modern istanbul embarks on 
          a quest to save the city from an immortal enemy.
        </p>         
        <div className="hero-btns">
          <button className='btn'><img src={playIcon} alt="play icon" />
            Play
         </button>
          <button className='btn dark-btn'><img src={infoIcon} alt="info icon" />
            More Info
          </button>
        </div>     
        <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
