import { useEffect, useState } from "react";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("/api/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <div>
      <h3>Contacts</h3>
      {contacts.map((c) => (
        <p key={c._id}>{c.name} - {c.phone}</p>
      ))}
    </div>
  );
}

export default ContactList;

