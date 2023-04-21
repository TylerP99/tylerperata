import {useState} from 'react';

import { useDispatch } from "react-redux";
import { registerAdmin } from "./adminSlice.js";

function AdminRegister() {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    adminSecret: "",
  });

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(registerAdmin(formData));
  }
  

  return (
    <div
    className='bg-black text-white max-w-[750px] mx-auto border-white border-y-2'
    >

      <form
      className='py-8 px-16'
      onSubmit={handleSubmit}
      >

        <h2
        className="text-2xl mx-auto text-center mb-7 w-fit border-b-2 border-white px-2"
        >Register Admin Account</h2>

        <section
        className="flex flex-col mb-5"
        >
          <label 
          htmlFor="username"
          className='text-lg mb-2'
          >Username</label>
          <input
          className="p-2 text-lg text-black"
          id="username"
          name="username"
          type="text"
          onChange={handleChange}
          value={formData.username}
          required
          />
        </section>

        <section
        className="flex flex-col mb-5"
        >
          <label 
          htmlFor="email"
          className='text-lg mb-2'
          >Email</label>
          <input
          className="p-2 text-lg text-black"
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={formData.email}
          required
          />
        </section>

        <section
        className="flex flex-col mb-5"
        >
          <label 
          htmlFor="password"
          className='text-lg mb-2'
          >Password</label>
          <input
          className="p-2 text-lg text-black"
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={formData.password}
          required
          />
        </section>

        <section
        className="flex flex-col mb-5"
        >
          <label 
          htmlFor="password2"
          className='text-lg mb-2'
          >Confirm Password</label>
          <input
          className="p-2 text-lg text-black"
          id="password2"
          name="password2"
          type="password"
          onChange={handleChange}
          value={formData.password2}
          required
          />
        </section>

        <section
        className="flex flex-col mb-10"
        >
          <label 
          htmlFor="adminSecret"
          className='text-lg mb-2'
          >Secret Password</label>
          <input
          className="p-2 text-lg text-black"
          id="adminSecret"
          name="adminSecret"
          type="password"
          onChange={handleChange}
          value={formData.adminSecret}
          required
          />
        </section>

        <button type="submit" className='block mx-auto w-[50%] py-3 text-xl border-2 border-white hover:bg-white/20'>Register</button>

      </form>

    </div>
  )
}

export default AdminRegister;