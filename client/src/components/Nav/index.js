import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css'
import 'material-icons/css/material-icons.scss';
import React, {  useEffect, useState } from 'react';
import NavTime from './NavTime'
import ImageUpload from '../ImageUpload';
import { Image } from 'cloudinary-react';
import WelcomeMessage from "../WelcomeMessage"
import { useStoreContext } from '../../utils/GlobalState';
import { GET_USERNAME } from '../../utils/actions';
import { PromiseProvider } from 'mongoose';



export default function SideNavBar (){

  // const{username}=useStoreContext()
  // const [state, dispatch] = useStoreContext();

  // const getUsername = () => {
  //   dispatch({ type: GET_USERNAME });
    
  // };

  // const [username, setUsername] = useState();

  // useEffect(() => {
  //   const user=getUsername();
  //   setUsername(user)
  // }, []);
  // console.log(username)
  // const Message = () => {
  //   return (
  //     <div>
  //       <PenList pens={pensList} />
  //     </div>
  //   );
  // }


  document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
      });

  
  
    return (
      <div>
        <nav className="grey darken-2"> More Than Just A Note ...Beyond Notes!</nav>
          <ul id="slide-out" className="sidenav">
            <li>
              <div className="user-view">
                <div className="background">
                  <img src="assets/beautiful-sea.jpg" />
                  
                </div>
                <a href="/upload"><ImageUpload></ImageUpload></a>
                <a href="#name"><span className="green-text name">John Doe</span></a>
                <a href="#email"><span className="member-name green-text email">Welcome <WelcomeMessage></WelcomeMessage></span></a>                
              </div>
            </li>
            
            <li><div className="divider" /></li>
            <li><p className="lead center align"><NavTime></NavTime></p></li>
            <li><div className="divider" /></li>
            <li><a href="/Home" className="active"><i class="material-icons">home</i>Home</a></li>
            <li><a href="/upload" className="active">Upload</a> </li>        
            <li><a href="/gallery" className="active">Gallery</a></li>
            <li><a href="/login"><i class="material-icons">rotate_left</i>Logout</a></li>
          </ul>
          <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      </div>

    )
  
}