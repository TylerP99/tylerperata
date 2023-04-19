import {useState} from 'react'

function AdminLogin() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submit");
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

        <button type="submit" className='block mx-auto w-[50%] py-3 text-xl border-2 border-white hover:bg-white/20'>Login</button>

      </form>

    </div>
  )
}

export default AdminLogin;