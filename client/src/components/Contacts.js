import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Contact from "./Contact";
import { Consumer } from "./ContactsContext"
import Nav from "./Nav"

class Contacts extends Component {
  render() {
     return (
       
      <Consumer>
        
        {({ contacts }) => (
          <ContactsContainer>
            <Nav />
            <ContactsHeader>
              <h1>Contacts</h1>
            </ContactsHeader>
            

            <Link to="/add">
              <Button className="add-btn">Add contact</Button>
            </Link>

            <div id="contacts">
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  name={contact.name}
                  email={contact.email}
                  img={contact.image_url}
                  number={contact.phone_number}
                  id={contact.id}
                  location={contact.location}
                />
              ))}
            </div>
          </ContactsContainer>
       )} 
      </Consumer>
    );
  }
}

export default Contacts;

const ContactsContainer = styled.div`
  margin: 0 auto;
  color: whitesmoke;
  padding: 1.5em;
  background: #5da7e3;
  box-shadow: 10px 10px 5px rgba(78, 46, 31, 0.85);

  #contacts {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContactsHeader = styled.div`
  margin: 1.5em auto;
  text-align: center;
  border: 2px solid border;
  font-family: 'Permanent Marker', cursive;
`;

export const Button = styled.button`
  background: #f58e07;
  color: whitesmoke;
  padding: 0.7em;
  width: 15%;
  font-family: 'Permanent Marker', cursive;
  font-size: 20px;
  color: black;
  box-shadow: 10px 10px 5px rgba(78, 46, 31, 0.71);
  border: 1px solid black;
  border-radius: 4px;
  display: block;
  margin: 1em auto;
  &:hover {
    background: #c70a74;
    color: whitesmoke;
    cursor: pointer;
  }
`;
