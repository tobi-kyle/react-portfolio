import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    contact: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for reaching out!');
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input name="fname" placeholder="First Name" onChange={handleChange} required />
        <input name="lname" placeholder="Last Name" onChange={handleChange} required />
        <input name="contact" placeholder="Phone Number" onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Your message" onChange={handleChange}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
