import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css'
import 'material-icons/css/material-icons.scss';
import React, {  useEffect, useState } from 'react';
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
        <nav> 
        <a href="/upload" className="active">Upload</a> 

        <a  href="/Home" className="active">Home</a> 
        <a href="/gallery" className="active">Gallery</a> 
           </nav>
          <ul id="slide-out" className="sidenav">
            <li>
              <div className="user-view">
                <div className="background">
                  <img src="images/office.jpg" />
                  {/* {imageIds &&
                    imageIds.map((imageId, index) => (
                        <Image
                            key={index}
                            cloudName="dqs5ijw1m"
                            publicId={imageId}
                            width="250"
                            crop="scale"
                        />
                    ))} */}
                </div>
                <a href="#user"><img className="circle" src="images/yuna.jpg" /></a>
                <a href="#name"><span className="white-text name">John Doe</span></a>
                <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
              </div>
            </li>
            <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
            <li><a href="#!">Second Link</a></li>
            <li><div className="divider" /></li>
            <li><a className="subheader">Subheader</a></li>
            <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
          </ul>
          <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      </div>

    )
  
}