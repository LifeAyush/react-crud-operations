import React, { useEffect, useRef, useState } from "react";
import axios from 'axios'
import Swal from 'sweetalert2'

const Add = () => {
  const[name, setName] = useState('');
  const[contact, setContact] = useState('');
  const[email, setEmail] = useState('');

  const sendDataToAPI = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
        return Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'All fields are required.',
            showConfirmButton: true
        });}
        else{
    axios.post(`https://api.thomso.in/apiV1/assignment`, {
        name,
        email,
        contact
    })}
    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${name}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500
  });

}

  const textInput = useRef(null);
  useEffect(() => {
      textInput.current.focus();
  }, [])

  

  return (
    <div className="small-container">
      <form onSubmit={sendDataToAPI}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          ref={textInput}
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="contact">Contact</label>
        <input
          id="contact"
          type="number"
          name="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <a href="/"><input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
          /></a>
          <a href="/"><input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="GoBack"
          /></a>

        </div>
      </form>
    </div>
  );
};

export default Add;
