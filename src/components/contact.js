import React, { Component } from 'react';
import axios from 'axios';
import '../scss/contact.scss';

export class Contact extends Component {



  //Take data from API
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users?_limit=1')
      .then(res => this.setState({ person: res.data }))
  }

  state = {
    person: []
  }

  render() {
    return this.state.person.map((person) => (
      <div className="contact-cnt flex">
        <h2>Data from JSON API</h2>
        <p><span>Name</span>: { person.name }</p>
        <p><span>Address</span>: { person.address.street + " " +  person.address.suite}</p>
        <p><span>City</span>: { person.address.city }</p>
        <p><span>ZIP</span>: { person.address.zipcode }</p>
        <p><span>Phone</span>: { person.phone }</p>
        <p><span>Email</span>: { person.email }</p>
      </div>
    ));
    
  }
}

export default Contact;