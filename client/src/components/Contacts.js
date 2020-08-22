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
  background: #de6ce0;
  box-shadow: 10px 10px 5px rgba(78, 46, 31, 0.5);

  #contacts {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContactsHeader = styled.div`
  margin: 1.5em auto;
  text-align: center;
  border: 2px solid border;
`;

export const Button = styled.button`
  background: lightslategray;
  color: whitesmoke;
  padding: 0.7em;
  width: 15%;
  box-shadow: 10px 10px 5px rgba(78, 46, 31, 0.5);
  border:  1px solid black;
  border-radius: 4px;
  display: block;
  margin: 1em auto;
  &:hover {
    background: hsl(0, 100%, 71%);
    color: whitesmoke;
    cursor: pointer;
  }
`;
