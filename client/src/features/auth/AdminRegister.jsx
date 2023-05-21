import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {FaTimes, FaExclamationCircle} from "react-icons/fa";

import { useRegisterMutation } from "./authApiSlice";
import { setCredentials } from "./authSlice";
import SpinnerButton from '../../components/buttons/SpinnerButton';


function AdminRegister() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, {isLoading}] = useRegisterMutation();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    adminSecret: "",
  });

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

    try {
      const data = await register(formData).unwrap();
      console.log(data);
      dispatch(setCredentials(data));
      setFormData({username: "", email: "", password: "", password2: "", adminSecret: ""});
      navigate("/admin");
    }
    catch(e) {
      console.error(e);
      if(!e.status) setErrorMsg( "No server response" );
      else setErrorMsg(e.data.error);
    }
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

        {
          errorMsg !== null ?
            <section className='flex justify-between items-center p-1 mb-5 border border-white' >
              <p className="flex items-center gap-1" ><FaExclamationCircle color="rgb(239 68 68)" />{errorMsg}</p>
              <button type='button' onClick={handleDismiss}><FaTimes/></button>
            </section>
          : undefined
        }

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
          autoComplete="false"
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
          autoComplete="false"
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

        <SpinnerButton
          type="submit"
          text="Register"
          isLoading={isLoading}
        />

      </form>

    </div>
  )
}

export default AdminRegister;