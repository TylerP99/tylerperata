import { useState, useEffect } from 'react';

import {FaTimes, FaExclamationCircle} from "react-icons/fa";

import { useAddNewMessageMutation } from "./messageSlice";

import SpinnerButton from '../../components/SpinnerButton';

function ContactForm() {

  const [addNewMessage, {isLoading, isSuccess}] = useAddNewMessageMutation();

  const [formData, setFormData] = useState({name: "", email: "", content: ""});

  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    setErrorMsg(null);
  }, [formData]);

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleDismiss = (e) => {
    e.preventDefault();
    setErrorMsg(null);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
      await addNewMessage(formData).unwrap();
      console.log("Done")
    }
    catch(e) {
      console.log("Caught");
      console.error(e);
      if(!Number(e.status)) setErrorMsg("No server response");
      else setErrorMsg(e.data.error);
    }
  }

  return (
    <div className='max-w-[1000px] w-[90%] mx-auto py-20'>

      <form
      className='px-5 py-10 bg-black  border-2 border-white rounded-md'
      onSubmit={handleSubmit}
      >

        <h2
        className='text-2xl bold border-b-2 mx-auto text-center w-[50%] mb-5'
        >Contact Me</h2>

        {
          errorMsg !== null ?
            <section className='flex justify-between items-center p-1 mb-5 border border-white' >
              <p className="flex items-center gap-1" ><FaExclamationCircle color="rgb(239 68 68)" />{errorMsg}</p>
              <button type='button' onClick={handleDismiss}><FaTimes/></button>
            </section>
          : undefined
        }

        {
          isSuccess ?
          <p className='p-1 mb-5 border border-white' >Message Sent!</p>
          : undefined
        }

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
          <label htmlFor="content">Message</label>
          <textarea
          className='text-lg p-2 text-black mb-5 min-h-[300px]'
          id='content'
          name='content'
          required
          onChange={handleChange}
          value={formData.content}
          />
        </section>

        <SpinnerButton 
          type="submit"
          text="Send" 
          isLoading={isLoading} 
        /> 

      </form>

    </div>
  )
}

export default ContactForm