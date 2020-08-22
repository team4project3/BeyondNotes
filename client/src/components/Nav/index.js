import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css'
import 'material-icons/css/material-icons.scss';
import React, { useEffect, useState } from 'react';
import NavTime from './NavTime'
import ImageUpload from '../ImageUpload';
import { Image } from 'cloudinary-react';
import WelcomeMessage from "../WelcomeMessage"
import { useStoreContext } from '../../utils/GlobalState';
import { GET_USERNAME } from '../../utils/actions';
import { PromiseProvider } from 'mongoose';



export default function SideNavBar() {

  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });



  return (
    <div>
      <nav className="grey darken-2 navBar"><span className="navSpan">More Than Just A Note ...Beyond Notes!</span>
      <ul id="slide-out" className="sidenav">
            <li>
              <div className="user-view">
                <div className="background">
                  <img src="assets/beautiful-sea.jpg" />
                  
                </div>
                <a href="/upload"><ImageUpload></ImageUpload></a>                
                <a href="#email"><span className="member-name green-text email"> <WelcomeMessage></WelcomeMessage></span></a>                
              </div>
            </li>

            {/* <li><div className="divider" /></li> */}
            <li><p className="lead center align black-text"><NavTime></NavTime></p></li>
            <li><div className="divider" /></li>
            <li><a href="/Home" className="active"><i class="material-icons">home</i>Home</a></li>
            <li><a href="/upload" className="active"><i className="material-icons">cloud_upload</i>Upload</a> </li>   
          <li><a href="/contacts" className="active"><i className="material-icons">contacts</i>Contacts</a></li>
          <li><a href="/login"><i className="material-icons">rotate_left</i>Logout</a></li>
          
          <br></br>
          <li><div className="divider" /></li>
          <li className="lead center align black-text">
            <div className="copyright">              
                 <small>
                    © 2020 Beyond Notes Project Team:
                  <a className="lead center align blue-text" href="https://github.com/Jones-M12" target="_blank" rel="noopener noreferrer">Malesha Jones</a>
                  <a className="lead center align blue-text" href="https://github.com/cheryld433" target="_blank" rel="noopener noreferrer">Cheryl Daniels</a>
                  <a className="lead center align blue-text" href="https://github.com/AFeese" target="_blank" rel="noopener noreferrer">Ashley Feese</a>
                  <a className="lead center align blue-text" href="https://github.com/TravisLovingood" target="_blank" rel="noopener noreferrer">Travis Lovingood</a>                   
                </small>                                
            </div>
          </li>

        </ul>
        <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>

        
      </nav>

    </div>
  )

}