import React, { useState, useRef } from "react";

// Styles
import "./contact.css";

// Email Js
import emailjs from "@emailjs/browser";

// image
import shakeImage from "../../images/shake.svg";

// Components
import { Heading } from "../Heading/Heading";
import Button from "components/Button/Button";

const Contact = () => {
  const INITIAL_VALUES = { user_name: "", user_email: "", message: "" };
  const [notification, setNotification] = useState(false);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [loading, setLoading] = useState(false);

  // Email-js
  const form = useRef();

  const sendEmail = async () => {
    try {
      const result = await emailjs.sendForm(
        "service_pght2jb",
        "template_v37psev",
        form.current,
        "SktmA0ScYGlWhcLD4"
      );
      console.log("success", result.text);
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  // Email-js

  const clearForm = () => {
    setValues(INITIAL_VALUES);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("form submitted !", values);
    // TODO : Send data to your email
    setLoading(true);
    await sendEmail();
    setLoading(false);
    clearForm();
    setNotification(true);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className="contact" name="contact" id="contact">
      <Heading text="Contact" style={{ marginBottom: "3rem" }} />
      <div className="content">
        <div className="left">
          <img src={shakeImage} alt="shake hands" />
        </div>
        <div className="right">
          <form onSubmit={handleSubmit} ref={form}>
            <input
              type="text"
              name="user_name"
              value={values.user_name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              value={values.user_email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              required
              value={values.message}
              onChange={handleChange}
              placeholder="Message"
            ></textarea>
            <Button
              text={loading ? "Sending..." : "Send"}
              loading={loading}
              type="submit"
            />
            {notification && (
              <span style={{ color: "green", marginTop: "1rem" }}>
                Thanks, I will reply ASAP :)
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
