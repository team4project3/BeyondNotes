import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css'
import 'material-icons/css/material-icons.scss';
import React, {  useEffect, useState } from 'react';
import NavTime from './NavTime'
import { Image } from 'cloudinary-react';



export default function SideNavBar (){
  // const [imageIds, setImageIds] = useState();
  // const loadImages = async () => {
  //     try {
  //         const res = await fetch('/api/images');
  //         const data = await res.json();
  //         setImageIds(data);
  //     } catch (err) {
  //         console.error(err);
  //     }
  // };
  // useEffect(() => {
  //     loadImages();
  // }, []);
  
  // useEffect(() => {
    
  //   document.addEventListener('DOMContentLoaded', function() {
  //     var elems = document.querySelectorAll('.sidenav');
  //     var instances = M.Sidenav.init(elems, {});
  //   });
  // }, []);

  document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
      });

  
  
    return (
      <div>
        <nav> More Than Just A Note ...Beyond Notes!</nav>
          <ul id="slide-out" className="sidenav">
            <li>
              <div className="user-view">
                <div className="background">
                  <img src="images/office.jpg" />
                  
                </div>
                <a href="#user"><img className="circle" src="images/yuna.jpg" /></a>
                <a href="#name"><span className="green-text name">John Doe</span></a>
                <a href="#email"><span className="green-text email">jdandturk@gmail.com</span></a>
              </div>
            </li>
            
            <li><div className="divider" /></li>
            <li><p className="lead center align"><NavTime></NavTime></p></li>
            <li><div className="divider" /></li>
            <li><a href="/Home" className="active"><i class="material-icons">home</i>Home</a></li>
            <li><a href="/upload" className="active">Upload</a> </li>        
            <li><a href="/gallery" className="active">Gallery</a></li>
            <li><a href="/logout"><i class="material-icons">rotate_left</i>Logout</a></li>
          </ul>
          <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      </div>

    )
  
}