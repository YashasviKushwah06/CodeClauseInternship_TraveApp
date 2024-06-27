import React, { useEffect } from 'react'
import './body.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardList } from "react-icons/lu";

import img1 from '../../assets/laplandFinland.jpg'
import img2 from '../../assets/cappadociaTurkey.jpg'
import img3 from '../../assets/antelopeCanyon.jpg'
import img4 from '../../assets/hawaii.jpg'
import img5 from '../../assets/parisFrance.jpg'
import img6 from '../../assets/Seychelles.jpg'
import img7 from '../../assets/barcelonaSpain.jpg'
import img8 from '../../assets/kyotoJapan.jpg'
import img9 from '../../assets/oiaGreece.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'LapLand',
    location: 'Finland',
    grade: 'NORTHERN LIGHTS',
    price: '$500',
    description: "A magical winter wilderness with stunningly beautiful sights known for its incredible, year-round light phenomena, vast arctic nature, and Santa Claus."
  },
  ,
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'SCENIC BEAUTY',
    price: '$800',
    description: "Land of natural wonder famous for its picturesque valleys, unique cave hotels, mystical underground cities, fairy chimneys (unique rock formations) and breathtaking hot air balloon rides at sunrise."
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Antelope Canyon',
    location: 'Arizona',
    grade: 'UNIQUE PHOTOGENIC WAVES',
    price: '$1000',
    description: "Wave-like structure that gives it a unique look and, along with the canyon's glorious light beams, often knows as 'The place where water runs through rocks'"
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Hawaii',
    location: 'United States',
    grade: 'NATURAL BEAUTY',
    price: '$900',
    description: "The loveliest fleet of islands that lies anchored in any ocean. Distinguished by its strong sense of community, its connection to the land and sea, and its rich artistic traditions."
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Paris',
    location: 'France',
    grade: 'CITY OF LIGHTS',
    price: '$1100',
    description: "Known for its gorgeous, imposing monuments. These iconic structures, often an exemplar of a particular era in architecture, are one of the city's instantly recognizable elements."
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Saychelles',
    location: 'East Africa',
    grade: 'GORGEOUS LANDSCAPES',
    price: '$700',
    description: "The world's only granite islands in mid-ocean, the world's oldest ocean islands, the world's largest raised coral atoll and a whole host of attractions"
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Barcelona',
    location: 'Spain',
    grade: 'MODERNIST FAIRY TALE',
    price: '$850',
    description: "A rich cultural heritage and a major tourist destination, renowned are the architectural works of Antoni Gaudí and Lluís Domènech i Montaner, designated as UNESCO World Heritage Sites"
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Kyoto',
    location: 'Japan',
    grade: 'CULTURAL RELAX',
    price: '$900',
    description: "home to beautiful natural scenery interwoven with historical buildings and traditional architecture. Mainly famous for hundreds of temples and shrines."
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Oia',
    location: 'Greece',
    grade: 'AESTHETICS',
    price: '$700',
    description: "The most picturesque village of Santorini and the most visited spot for sunset viewing. It provides an excellent view of the well-known sunset, probably the most famous sunset in the world."
  }
]

const Body = () => {

  useEffect(() => {
    Aos.init({duration: 1000})
  },[])

  const handleBookNow = (destination) => {
    alert(`Destination ${destination} added to your bookings!`);
  };

  return (
    <section className='main container'>
      <div className='secTitle'>
        <h3 data-aos="fade-right" className='title'>Most Visited Destinations</h3>
      </div>
      <div className='secContent grid' >
        {data.map(({id, imgSrc, destTitle, location, grade, price, description}) => {
          return(
            <div data-aos="fade-up" key={id} className='singleDestination'>
              <div className='imageDiv'>
                <img src={imgSrc} alt={destTitle} />
              </div>
              <div className='cardInfo'>
                <h4 className='destTitle'>{destTitle}</h4>
                <span className='continent flex'><HiOutlineLocationMarker className='icon'/><span className='name'>{location}</span></span>
                <div className='fees flex'>
                  <div className='grade'>
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className='price'><h5>{price}</h5></div>
                </div>
              </div>
              <div className='desc'>
                <p>{description}</p>
              </div>
              <button className='btn flex' onClick={() => handleBookNow(destTitle)} >BOOK NOW!<LuClipboardList className='icon'/></button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Body