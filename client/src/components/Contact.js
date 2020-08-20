import React, { Fragment } from "react";
import styled from "styled-components";
import { Consumer } from "./ContactsContext";
import { Link } from "react-router-dom";
import Toggle from "./elements/Toggle";
import Modal from "./elements/Modal";
import { Button } from "./Contacts";
import PropTypes from "prop-types";
import Icon from "./elements/Icon";

const Contact = ({ name, img, email, number, id, location }) => (

  <Consumer>
    {({ remove }) => (
      <ContactContainer className="drop-shadow">
        <ContactImageContainer>
          <img src={img} alt="" />
        </ContactImageContainer>
        <div id="details">
          <h3>{name}</h3>
          <Icon name="email" color="red" />
          <small>{email}</small>
          <br />
          <Icon name="phone" color="blue" />
          <small>{number}</small>
          <br />
          {location && (
            <Fragment>
              <Icon name="globe" color="green" />
              <small>
                <em>{location}</em>
              </small>
            </Fragment>
          )}
        </div>
        <div className="button-group">
          <Link to={`/${id}`}>
            <button id="edit">Edit</button>
          </Link>
          <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                <Link to="#">
                  <button id="remove" onClick={toggle}>
                    Remove
                  </button>
                </Link>
                <Modal on={on} toggle={toggle}>
                  <h3>Are you sure you want to delete {name}'s contact?</h3>
                  <div className="button-group" style={{ textAlign: "center" }}>
                    <Button
                      style={{
                        background: "transparent",
                        display: "inline-block",
                        margin: "1em"
                      }}
                      onClick={() => {
                        remove(id);
                        toggle();
                      }}
                    >
                      <Icon name="check" color="green" />
                    </Button>
                    <Button
                      style={{
                        background: "transparent",
                        display: "inline-block",
                        margin: "1em"
                      }}
                      onClick={toggle}
                    >
                      <Icon name="remove" color="red" />
                    </Button>
                  </div>
                </Modal>
              </Fragment>
            )}
          </Toggle>
        </div>
      </ContactContainer>
    )}
  </Consumer>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired
};

export default Contact;

const ContactContainer = styled.div`
  margin: 1em auto;
  padding: 0.5em;
  background: whitesmoke;
  width: 80%;
  border-radius: 5px;
  color: black;
  div#details {
    text-align: center;
    padding: 0.3em;
  }

  .button-group {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;

    button {
      padding: 0.1em;
      color: white;
      width: 60px;
      margin: 0 1em;
      border: none;
      border-radius: 0px;
      &:hover {
        transform: scale(1.2);
        transition-duration: 300ms;
        cursor: pointer;
      }
    }

    #remove {
      background: #eb8334;
      font-size: 16px;
    }

    #edit {
      background: #eb349b;
      font-size: 16px;
    }
  }
`;

export const ContactImageContainer = styled.div`
  width: 100px;
  height: 100px;
  // clip-path: circle(50% at 50% 50%);
  margin: 0 auto;
  img {
    width: 100px;
    min-height: 100px;
    object-fit: cover;
  }
`;
