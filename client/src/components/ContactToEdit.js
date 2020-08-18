import React, { Component } from "react";
import { ContactForm } from "./AddContact";
import { ContactImageContainer } from "./Contact";
import { Button } from "./Contacts";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Icon from "../components/Icon";

export default class ContactToEdit extends Component {
  state = {
    name: "",
    email: "",
    phone_number: "",
    image_url: "",
    location: "",
    editing: true
  };

  componentDidMount = () => {
    const { name, email, phone_number, image_url, id, location } = this.props;
    this.setState({ id, name, email, phone_number, image_url, location });
  };

  handleEdit = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ editing: false }, () => this.props.update(this.state));
  };

  render() {
    const { name, email, phone_number, image_url, location } = this.state;
    return (
      <ContactForm role="form" onSubmit={this.handleSubmit}>
        <h4>Editting {name}'s contact</h4>
        <ContactImageContainer>
          <img src={image_url} alt="contact" />
        </ContactImageContainer>
        <Icon name="edit" color="teal" />

        <div id="form-edit">
        <input
            type="text"
            name="name"
            defaultValue={name}
            autoFocus
            onBlur={this.handleEdit}
          />
         <input
            type="email"
            name="email"
            defaultValue={email}
            onChange={this.handleEdit}
          />
        <input
            type="text"
            name="phone_number"
            defaultValue={phone_number}
            onChange={this.handleEdit}
          />
          <input
            type="text"
            name="image_url"
            defaultValue={image_url}
            onChange={this.handleEdit}
          />
                    <input
            type="text"
            name="location"
            defaultValue={location}
            onChange={this.handleEdit}
          />
       </div>
        {this.state.editing ? (
           <Button style={{ width: "auto" }} type="submit">
             Finish editing
           </Button>
         ) : (
           <Redirect to="/" />
         )}
       </ContactForm>
     );
   }
 }

ContactToEdit.propTypes = {
  name: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone_number: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
