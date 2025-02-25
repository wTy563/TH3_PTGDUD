import React from "react";
import Contact from "./Contact";

const ContactList = ({ contacts, deleteContact, deleteAllContacts }) => {
  return (
    <div className="contact-list-container">
      <div className="contact-list">
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} deleteContact={deleteContact} />
        ))}
      </div>
      <button className="delete-all-btn" onClick={deleteAllContacts}>Delete All</button>
    </div>
  );
};

export default ContactList;
