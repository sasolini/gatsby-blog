import React from "react"

import cn from "./Contact-form.module.scss"

const ContactForm = () => (
  <form className={cn.contactForm} action="" method="post">
    <ul>
      <li>
        <label htmlFor="name">Name*:</label>
        <input type="text" id="name" name="user_name" required />
      </li>
      <li>
        <label htmlFor="mail">E-mail*:</label>
        <input type="email" id="mail" name="user_email" required />
      </li>
      <li>
        <label htmlFor="msg">Message*:</label>
        <textarea id="msg" name="user_message" required></textarea>
      </li>
      <li className={cn.button}>
        <button type="submit">Send</button>
      </li>
    </ul>
  </form>
)

export default ContactForm
