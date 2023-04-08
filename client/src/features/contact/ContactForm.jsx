import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

import { addContact, selectContactStatus } from "./contactSlice";

function ContactForm() {

  const dispatch = useDispatch();

  let status = useSelector(selectContactStatus);

  const [formData, setFormData] = useState({name: "", email: "", message: ""});

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(addContact(formData));
    
    if(status === "suceeded") {
      setFormData({name: "", email: "", message: ""});
    }
  }

  return (
    <div className='max-w-[1000px] w-[90%] mx-auto py-20'>

      <form
      className='px-5 py-10 bg-black  border-2 border-white rounded-md'
      onSubmit={handleSubmit}
      >

        <h2
        className='text-2xl bold border-b-2 mx-auto text-center w-[50%] mb-2'
        >Contact Me</h2>

        { status === "suceeded" && <p>Message successfully sent! </p> }
        { status === "failed" && <p>Message failed to send...</p> }

        <section className='md:flex md:justify-between' >
          <section
          className='flex flex-col md:w-[48%]'
          >
            <label htmlFor="name">Name</label>
            <input
            className='text-lg p-2 text-black mb-3 max-w-[500px]'
            id='name'
            name='name'
            type="text"
            required
            onChange={handleChange}
            value={formData.name}
            />
          </section>

          <section
          className='flex flex-col md:w-[48%]'
          >
            <label htmlFor="email">Email</label>
            <input
            className='text-lg p-2 text-black mb-3 max-w-[500px]'
            id='email'
            name='email'
            type="email"
            required
            onChange={handleChange}
            value={formData.email}
            />
          </section>
        </section>

        <section
        className='flex flex-col'
        >
          <label htmlFor="message">Message</label>
          <textarea
          className='text-lg p-2 text-black mb-5'
          id='message'
          name='message'
          required
          onChange={handleChange}
          value={formData.message}
          />
        </section>

        <button className='border block text-xl px-20 py-3 mx-auto hover:bg-white/20' type='submit'>Send</button>

      </form>

    </div>
  )
}

export default ContactForm