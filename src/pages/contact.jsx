import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <section className="contact-page">
      <article className="contact-form">
        <h3>get in touch</h3>
        <form action="https://formspree.io/xbjzvbgo" method="POST">
          <div className="form-group">
            <input type="text" placeholder="name" name="name" className="form-control"/>
            <input type="email" placeholder="email" name="email" className="form-control"/>
            <textarea name="message" rows="5" placeholder="message" className="form-control"></textarea>
            <button className="submit-btn btn" type="submit">submit here</button>
          </div>
        </form>
      </article>
    </section>
  )
}

export default contact
