import { useState } from "react";
import { contactStyles } from "../CustomStyle/CustomStyle.js";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className={contactStyles.contactContainer}>
      <div className={contactStyles.contactContent}>
        <h1 className={contactStyles.contactTitle}>Contact Us</h1>
        <p className={contactStyles.contactIntro}>
          Have questions or feedback? We'd love to hear from you!
        </p>

        <div className={contactStyles.contactGrid}>
          <div className={contactStyles.contactInfo}>
            <h3 className={contactStyles.infoTitle}>📞 Get in Touch</h3>
            <div className={contactStyles.infoItem}>
              <span className={contactStyles.infoIcon}>📍</span>
              <div className={contactStyles.infoDetails}>
                <h4 className={contactStyles.infoSubtitle}>Address</h4>
                <p className={contactStyles.infoText}>
                  123 Food Street, Cuisine City, FC 12345
                </p>
              </div>
            </div>
            <div className={contactStyles.infoItem}>
              <span className={contactStyles.infoIcon}>📧</span>
              <div className={contactStyles.infoDetails}>
                <h4 className={contactStyles.infoSubtitle}>Email</h4>
                <p className={contactStyles.infoText}>hello@foodapp.com</p>
              </div>
            </div>
            <div className={contactStyles.infoItem}>
              <span className={contactStyles.infoIcon}>📱</span>
              <div className={contactStyles.infoDetails}>
                <h4 className={contactStyles.infoSubtitle}>Phone</h4>
                <p className={contactStyles.infoText}>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className={contactStyles.contactForm}>
            <h3 className={contactStyles.formTitle}>✍️ Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className={contactStyles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={contactStyles.formInput}
                  required
                />
              </div>
              <div className={contactStyles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={contactStyles.formInput}
                  required
                />
              </div>
              <div className={contactStyles.formGroup}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={contactStyles.formInput}
                  required
                />
              </div>
              <div className={contactStyles.formGroup}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={contactStyles.formTextarea}
                  required
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className={contactStyles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
