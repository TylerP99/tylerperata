import {useEffect, useState} from 'react';
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";

import {FaTimes, FaExclamationCircle} from "react-icons/fa";

import { useLoginMutation } from "./authApiSlice";
import { setCredentials } from "./authSlice";
import usePersist from "../../hooks/usePersist";

import SpinnerButton from '../../components/SpinnerButton';


function AdminLogin() { // TODO: Add error display

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, {isLoading, isSuccess, isError, error}] = useLoginMutation();

  const [persist, setPersist] = usePersist();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState(null);


  useEffect(() => {
    setErrorMsg(null);
  }, [formData.email, formData.password]);


  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleToggle = () => setPersist(prev => !prev);

  const handleDismiss = (e) => {
    e.preventDefault();
    setErrorMsg(null);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(formData).unwrap();
      dispatch(setCredentials(data));
      setFormData({email: "", password: ""});
      navigate("/admin");
    }
    catch(e) {
      console.error(e);
      if(!e.status) setErrorMsg("No server response");
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
        >Login Admin Account</h2>

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
          className="flex flex-row-reverse"
        >
          <label 
            htmlFor="persist"
          >Remember this device?</label>
          <input
            type="checkbox"
            id="persist"
            onChange={handleToggle}
            checked={persist}
          />
        </section>

        <SpinnerButton
          type="submit"
          text="Log In"
          isLoading={isLoading}
        />

      </form>

    </div>
  )
}

export default AdminLogin;