import React, { useEffect } from 'react';
import './footer.css';
import footerVideo from '../../assets/footerVideo.mp4';

import Aos from 'aos'
import 'aos/dist/aos.css'

import { FiSend , FiChevronRight } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube , FaInstagram , FaTripadvisor } from "react-icons/fa";

const Footer = () => {

  useEffect(() => {
    Aos.init({duration: 1000})
  },[])

  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={footerVideo} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div data-aos="fade-up" className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel With Us</h2>
          </div>
          <div className='inputDiv flex'>
            <input data-aos="fade-up" type='text' placeholder='Enter Email Address' />
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>
        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
                <MdTravelExplore className='icon'/> JetSetGo
              </a>
            </div>
            <div data-aos="fade-up" className='footerPara'>
              Explore meticulously curated destinations that cater to your wanderlust, spanning serene beaches and dynamic cityscapes. 
              Whether you seek cultural immersion, scenic vistas, or culinary delights, JetSetGo offers bespoke travel experiences tailored to elevate your journeys. 
              Join us and embark on personalized adventures that inspire and enrich your travel narrative.
            </div>
            <div data-aos="fade-up" className='footerSocials flex'>
              <FaXTwitter className='icon' />
              <FaYoutube className='icon' />
              <FaInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>
          <div className='footerLinks grid'>
            {/* Group one */}
            <div data-aos="fade-up" data-aos-duration="2000" className='linkGroup'>
              <span className='groupTitle'>OUR AGENCY</span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> Services
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> Insurance
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> Agency
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> Tourism
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> Payment
              </li>
            </div>

            {/* Group two */}
            <div data-aos="fade-up" data-aos-duration="2000" className='linkGroup'>
              <span className='groupTitle'>PARTNERS</span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> Bookings
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> Rentcars
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> HostelWorld
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> Trivago
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> TripAdvisor
              </li>
            </div>

            {/* Group three */}
            <div data-aos="fade-up" data-aos-duration="2000" className='linkGroup'>
              <span className='groupTitle'>LAST MINUTE</span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> London
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> California
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> Europe
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> Australia
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> Malaysia
              </li>
            </div>
          </div>

          <div className='footerDiv flex'>
            <small>Your Travel Companion</small>
            <small>COPYRIGHTS RESERVED - &copy; 2024</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
