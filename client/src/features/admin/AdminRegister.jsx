import {useState} from 'react'

function AdminRegister() {

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

    console.log("Submit");
  }
  

  return (
    <div
    className='bg-black text-white'
    >

      <form
      onSubmit={handleSubmit}
      >

        <h2>Register Admin Account</h2>

        <section
        className="flex flex-col mb-5"
        >
          <label htmlFor="username">Username</label>
          <input
          className=""
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
          <label htmlFor="email">Email</label>
          <input
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
          <label htmlFor="password">Password</label>
          <input
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
          <label htmlFor="password2">Confirm Password</label>
          <input
          id="password2"
          name="password2"
          type="password"
          onChange={handleChange}
          value={formData.password2}
          required
          />
        </section>

        <section
        className="flex flex-col mb-5"
        >
          <label htmlFor="adminSecret">Secret Password</label>
          <input
          id="adminSecret"
          name="adminSecret"
          type="password"
          onChange={handleChange}
          value={formData.adminSecret}
          required
          />
        </section>

        <button type="submit">Register</button>

      </form>

    </div>
  )
}

export default AdminRegister;