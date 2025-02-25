import React from "react";
import Contact from "./Contact";

const ContactList = ({ contacts, deleteContact, deleteAllContacts }) => {
  return (
    <div className="container">
      <div
        className={`row g-3 align-items-stretch ${
          contacts.length === 1 ? "justify-content-center" : ""
        }`}
      >
        {contacts.map((contact) => (
          <div key={contact.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Contact contact={contact} deleteContact={deleteContact} />
          </div>
        ))}
      </div>

      {/* Nút Delete All */}
      {contacts.length > 0 && (
        <div className="text-end mt-3">
          <button className="btn btn-danger btn-lg" onClick={deleteAllContacts}>
            Delete All
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactList;
