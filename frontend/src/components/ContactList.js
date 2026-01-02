import { useEffect, useState } from "react";
import axios from "axios";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  const loadContacts = async () => {
    const res = await axios.get("http://localhost:5000/api/contacts");
    setContacts(res.data);
  };

  const deleteContact = async (id) => {
    await axios.delete(`http://localhost:5000/api/contacts/${id}`);
    loadContacts();
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <ul>
      {contacts.map(c => (
        <li key={c._id}>
          <strong>{c.name}</strong> - {c.phone}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => deleteContact(c._id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
