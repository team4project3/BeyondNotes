import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { Consumer } from "./ContactsContext";
import Icon from "./Icon";

export default class AddContact extends Component {
  state = {
    id: Math.round(Math.random() * 100000000),
    name: "",
    email: "",
    phone_number: "",
    image_url: "",
    location: "",
    contactAdded: false
  };

  isValidEmail = email => {
    if (!/^[^@]+@[^@.]+\.[a-z]+$/i.test(email)) {
      alert("please enter a valid email");
    }
  };

  formatNumber = number => {
    const formattedNumber = number.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "($1) $2-$3"
    );
    this.number.value = formattedNumber;
  };

  addContact = () =>
    !this.state.contactAdded ? this.setState({ contactAdded: true }) : null;

  useDefaultImg = e => {
    e.preventDefault();
    this.setState(
      {
        image_url:
          "https://starsunfolded.com/wp-content/uploads/2016/12/Mahatma-Gandhi-2.jpg"
      },
      () => (this.image.defaultValue = this.state.image_url)
    );
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = (e, action) => {
    e.preventDefault();
    this.contactForm.reset();
    action(this.state);
  };

  render() {
     return (
      <Consumer>
        {({ add }) => (
          <ContactForm
            onSubmit={e => this.handleSubmit(e, add)}
            ref={contactForm => (this.contactForm = contactForm)}
          >
            <h1>New Contact</h1>
            <Link to="/" style={{ position: "absolute", top: 40 }}>
              <Icon name="back" color="black" className="back-icon" />
            </Link>
            <div id="form-add">
              <label htmlFor="name">Contact Name</label>
              <input
                type="text"
                name="name"
                placeholder="name"
                onChange={this.handleInput}
              />
              <label htmlFor="email">Contact Email</label>
              <input
                type="email"
                placeholder="email"
                name="email"
                onChange={this.handleInput}
                onBlur={() => this.isValidEmail(this.state.email)}
              />
              <label htmlFor="number">Contact Number</label>
              <input
                type="text"
                name="phone_number"
                placeholder="number"
                onChange={this.handleInput}
                ref={number => (this.number = number)}
                onBlur={() => this.formatNumber(this.number.value)}
              />
              <label htmlFor="image">Contact Image</label>
              <button id="default-img" onClick={this.useDefaultImg}>
                use default image
              </button>
              <input
                type="text"
                placeholder="image"
                name="image_url"
                onChange={this.handleInput}
                ref={image => (this.image = image)}
              />
            </div>
            <div className="button-group" style={{ textAlign: "center" }}>
              <ContactButton
                type="submit"
                color="lightblue"
                onClick={() => {
                  this.addContact();
                }}
              >
                Add
              </ContactButton>
              {this.state.contactAdded && (
                <ContactButton color="lightgreen">
                  <Link to="/">Return to contacts</Link>
                </ContactButton>
              )}
            </div>
          </ContactForm>
        )}
      </Consumer>
      
    );
  }
}

export const ContactForm = styled.form`
  margin: 1.5em auto;
  padding: 1em;
  border: 2px solid black;
  border-radius: 5px;
  background: whitesmoke;
  color: black;
  width: 50%;
  justify-content: center;

  svg {
    margin-top: 10px;
    &:hover {
      cursor: pointer;
    }
  }

  h1 {
    text-align: center;
  }

  #form-add,
  #form-edit {
    margin: 0 auto;
    justify-content: center;
    padding: 0 1em;
  }

  #form-add label {
    margin-left: 1.8em;
  }

  input {
    display: block;
    margin: 1.5em auto;
    padding: 0.5em;
    width: 80%;
  }

  #default-img {
    width: auto;
    padding: 0.4em;
    background: lightgreen;
    border-radius: 4px;
    margin-left: 6px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const ContactButton = styled.button`
  width: 120px;
  display: inline-block;
  margin: 0 1em;
  background: ${props => props.color};
  padding: 0.5em;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
  a {
    color: black;
  }
`;
