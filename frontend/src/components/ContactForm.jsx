import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await fetch("/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Contact saved");
  } catch (err) {
    alert("Error saving contact");
  }
};


  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Contact</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" required onChange={handleChange} />
        <br /><br />

        <input name="email" placeholder="Email" onChange={handleChange} />
        <br /><br />

        <input name="phone" placeholder="Phone" required onChange={handleChange} />
        <br /><br />

        <textarea name="message" placeholder="Message" onChange={handleChange} />
        <br /><br />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default ContactForm;
