import {useState} from 'react'

function ContactForm() {

  const [formData, setFormData] = useState({email: "", message: ""});

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submit");
  }

  return (
    <div className='max-w-[1000px] w-[90%] mx-auto'>

      <h2
      className='text-2xl bold border-b-2 mx-auto text-center w-[50%] mb-4'
      >Contact Me</h2>

      <form
      className='border px-5'
      onSubmit={handleSubmit}
      >

        <section
        className='flex flex-col'
        >
          <label htmlFor="email">Email</label>
          <input
          className='text-lg p-2 text-black'
          id='email'
          name='email'
          type="email"
          required
          onChange={handleChange}
          value={formData.email}
          />
        </section>

        <section
        className='flex flex-col'
        >
          <label htmlFor="message">Message</label>
          <textarea
          className='text-lg p-2 text-black'
          id='message'
          name='message'
          required
          onChange={handleChange}
          value={formData.message}
          />
        </section>

        <button type='submit'>Send</button>

      </form>

    </div>
  )
}

export default ContactForm