import { useState } from "react";
import type { FormEvent } from "react";

function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="contactSuccess">
        Thank you — your message has been received. Our team will get back to
        you within one business day.
      </div>
    );
  }

  return (
    <form className="contactFormCont" onSubmit={handleSubmit}>
      <div className="contactField">
        <label className="contactLabel" htmlFor="contact-name">
          Full name
        </label>
        <input id="contact-name" className="contactInput" name="name" required />
      </div>
      <div className="contactField">
        <label className="contactLabel" htmlFor="contact-email">
          Email address
        </label>
        <input
          id="contact-email"
          className="contactInput"
          type="email"
          name="email"
          required
        />
      </div>
      <div className="contactField">
        <label className="contactLabel" htmlFor="contact-topic">
          I am reaching out as
        </label>
        <select id="contact-topic" className="contactSelect" name="topic">
          <option>A job seeker</option>
          <option>An employer</option>
          <option>Other</option>
        </select>
      </div>
      <div className="contactField">
        <label className="contactLabel" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          className="contactTextarea"
          name="message"
          rows={5}
          required
        />
      </div>
      <button className="contactSubmitBtn" type="submit">
        Send message
      </button>
      <p className="contactNote">
        Note: this form is not connected to an inbox yet — it confirms on
        screen only.
      </p>
    </form>
  );
}

export default ContactForm;
