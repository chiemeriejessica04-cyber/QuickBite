
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">

        <div className="footer-brand">
          <h2>Quick<span>Bite</span></h2>
          <p>Good Food. Great Mood. Delivered.</p>
          <p>Bringing delicious meals closer to you.</p>
        </div>

        <div className="footer-contact">
          <h3>Contact Information</h3>
          <p>WhatsApp: +234 904 978 2024</p>
          <p>Email: hello@quickbite.com</p>
          <p>Location: Nigeria</p>
        </div>

        <div className="footer-hours">
          <h3>Opening Hours</h3>
          <p>Monday – Saturday</p>
          <p>8:00 AM – 9:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 QuickBite. All rights reserved.</p>
        <p>Made with care for food lovers.</p>
      </div>
    </footer>
  );
}

export default Footer;
