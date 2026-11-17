
import './Contact.css';

function Contact() {
  const whatsappNumber = '2349049782024';

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const whatsappMessage = `
Hello QuickBite!

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <span>WE'RE HERE TO HELP</span>
        <h1>Contact <span>QuickBite</span></h1>
        <p>
          Questions, feedback or enquiries?
          We'd love to hear from you.
        </p>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We are always happy to hear from you.</p>

          <div className="contact-detail">
            <h3>WhatsApp</h3>
            <p>Chat with us directly on WhatsApp.</p>
          </div>

          <div className="contact-detail">
            <h3>Email</h3>
            <p>hello@quickbite.com</p>
          </div>

          <div className="contact-detail">
            <h3>Location</h3>
            <p>Nigeria</p>
          </div>

          <div className="contact-detail">
            <h3>Working Hours</h3>
            <p>Monday – Saturday</p>
            <p>8:00 AM – 9:00 PM</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label>Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter message subject"
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message here..."
            required
          />

          <button type="submit">
            Send via WhatsApp →
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
