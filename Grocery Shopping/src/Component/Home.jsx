import React from "react";
import './hom1.css';
import { RiAccountPinBoxLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoSearch } from "react-icons/io5";
import { FaMapMarker, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FiFacebook, FiTwitter} from 'react-icons/fi';
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";


function Home() {

  return (
    <>
     <header className="fix">
      <nav>
        <div className="left">
          <ul className="logo-list">
            <li>
              <img
                src="https://cdn3.f-cdn.com/contestentries/109529/2903056/542da741b5963_thumb900.jpg"
                style={{
                  maxWidth: '100%',
                  maxHeight: '50px',
                  display: 'block',
                  textDecoration: 'none'
                }}
                alt="Logo"
              />
            </li>
          </ul>
        </div>
        <div className="center">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <IoSearch style={{ fontSize: '20px', cursor: 'pointer' }} />
          </div>
        </div>
        <div className="right">
          <ul>
          <li
              style={{
                color: "black",
              }}
            >
              <IoHome style={{ fontSize: '25px', cursor: 'pointer' }}
              title="Home"/>
            </li>
          <li style={{
                color: "black",
              }} >
              <FaShoppingCart 
              style={{ fontSize: '25px', cursor: 'pointer' }}
              title="Cart"/>
            </li>
          <li style={{
                color: "black",
              }} >
              <FcAbout 
              style={{ fontSize: '25px', cursor: 'pointer' }}
              title="About us"/>
            </li>
          <Link to='/Login'>  
          <li style={{
                color: "black",
              }}>
              <RiAccountPinBoxLine
                style={{ fontSize: '25px', cursor: 'pointer' }}
                title="Account"
              />
            </li>
            </Link>
          </ul>
        </div>
      </nav>
      </header>
      <div className="space-below-content1"></div>
      <div className="main-content">
        <div className="grid-container">
          <div className="category-column">
            <ul>
              <h2>Categories</h2>
              <br></br>
              <li className="category-item">
                <img src="https://spencers.in/media/catalog/category/18122023_icon_grocery.png" alt="category1"
                 style={{maxHeight:'30px',
                maxWidth:'30px'}}
                 ></img>
                Groceries & Staples</li>
              <li className="category-item">
              <img src="https://www.spencers.in/media/catalog/category/FNV_deatils.jpg" alt="fruits"
                 style={{maxHeight:'30px',
                maxWidth:'30px'}}
                 ></img>
                Fruits & Vegetables</li>
              <li className="category-item">
              <img src="https://spencers.in/media/catalog/category/18122023_icon_DairyIceCream.png" alt="Icecreams"
                 style={{maxHeight:'30px',
                maxWidth:'30px'}}
                 ></img>
                Dairy & Icecreams</li>
              <li className="category-item">
              <img src="https://spencers.in/media/catalog/category/18122023_icon_Bakery.png" alt="Bakery"
                 style={{maxHeight:'30px',
                maxWidth:'30px'}}
                 ></img>
                Bakery</li>
              <li className="category-item">
              <img src="https://spencers.in/media/catalog/category/18122023_icon_frozen_New.png" alt="snakes"
                 style={{maxHeight:'30px',
                maxWidth:'30px'}}
                 ></img>
                Snakes</li>
              <li className="category-item">
              <img src="https://spencers.in/media/catalog/category/18122023_icon_personalCare.png" alt="personal care"
                 style={{maxHeight:'30px',
                maxWidth:'30px'}}
                 ></img>
                Personal care</li>
              <li className="category-item">
              <img src="https://spencers.in/media/catalog/category/18122023_icon_babyCare.png" alt="Baby care"
                 style={{maxHeight:'30px',
                maxWidth:'30px'}}
                 ></img>
                Baby care</li>
              <li className="category-item">
              <img src="https://spencers.in/media/catalog/category/18122023_icon_ENE.png" alt="Electronics"
                 style={{maxHeight:'30px',
                maxWidth:'30px'}}
                 ></img>
                Electrical and Eletronics</li>
            </ul>
          </div>
          <div className="image-column">
            <div className="offer-image">
              <img src="https://www.spencers.in/media/wysiwyg/websiteCreative.jpg" alt="offer"style={{maxHeight:'545px'}} className="category-item"></img>
            </div>
          </div>
          <div className="image-column">
            <div className="offer-image">
               <img src="https://www.spencers.in/media/wysiwyg/FNV_1.jpg" className="category-item" alt="offer1"></img>
               <img src="https://www.spencers.in/media/wysiwyg/FNM_1.jpg" className="category-item" alt="offer2"></img>
            </div>
          </div>
          </div>
      </div>
      <div className="space-below-content"></div>

      <div className="last-image-container">
        <img src="https://www.spencers.in/media/wysiwyg/monthlyWebBanner.jpg" alt="LastImage" className="category-item" />
      </div>

<div className="community-container">
  <center>
    <h2>Be Part of Sponcer's Community</h2>
  </center>
  <div className="four-images-container">
    <img src="https://promotion.spencers.in/promotion/media/deal.jpg" className="category-item1" alt="Image1" />
    <img src="https://promotion.spencers.in/promotion/media/coupon.jpg" className="category-item1" alt="Image2" />
    <img src="https://promotion.spencers.in/promotion/media/brands.jpg" className="category-item1" alt="Image3" />
    <img src="https://promotion.spencers.in/promotion/media/bestSeller.jpg" className="category-item1" alt="Image4" />
  </div>
</div>
<div className="space-below-content2"></div>
<footer className="footer-distributed">
      
      <div className="footer-center">
        <div>
          <FaMapMarker className="icon" />
          <p>
            <span>444, </span> Gandhipuram, Coimbatore
          </p>
        </div>
        <div>
          <FaPhone className="icon" />
          <p>+1.555.555.5555</p>
        </div>
        <div>
          <FaEnvelope className="icon" />
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-icons">
        <a href="https://www.facebook.com/AmazonIN/"  className="a" style={{color:'white'}}><FiFacebook className="icon" /></a>
        <a href="https://twitter.com/amazon" className="a" style={{color:'white'}}>  <FiTwitter className="icon" /></a>
        <a href="https://www.instagram.com/amazon/" className="a" style={{color:'white'}}><FaInstagramSquare className="icon"/></a>
        </div>
        <div className="footer-legal">
   <Link to='/PrivacyPolicy'>  <p className="footer-privacy-policy">
        Privacy Policy
      </p></Link> 
      <p className="footer-copyright">
        © 2023 Grocery Mania. All Rights Reserved.
      </p>
    </div>

      </div>
    </footer>

      

    </>
  );
}

export default Home;
