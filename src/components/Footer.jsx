import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="jumia-footer text-light">

      {/* 🔹 TOP NEWSLETTER BAR */}
      <div className="footer-top py-4">
        <div className="container">
          <div className="row align-items-center g-3">

            <div className="col-md-4 fw-bold">
              <span className="fs-5">JUMIA</span>
            </div>

            <div className="col-md-5">
              <small className="fw-bold">NEW TO SAMMARKET?</small>
              <p className="mb-2 small">
                Subscribe to our newsletter to get updates on our latest offers!
              </p>

              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter E-mail Address"
                />
                <button className="btn btn-outline-light">
                  Subscribe
                </button>
              </div>

              <div className="form-check mt-2 small">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">
                  I agree to the Privacy & Cookie Policy
                </label>
              </div>
            </div>

            <div className="col-md-3 text-md-end">
              <small className="fw-bold">DOWNLOAD FREE APP</small>
              <div className="d-flex gap-2 justify-content-md-end mt-2">
                <img src="/images/appstore.png" alt="App Store" height="35" />
                <img src="/images/playstore.png" alt="Google Play" height="35" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 🔹 MAIN FOOTER */}
      <div className="container py-5">
        <div className="row gy-4">

          <FooterColumn title="NEED HELP?" links={[
            "Chat with us",
            "Help Center",
            "Contact Us"
          ]} />

          <FooterColumn title="ABOUT SAMMARKET" links={[
            "About us",
            "Careers",
            "Terms & Conditions",
            "Privacy Notice",
            "Official Stores",
            "Flash Sales"
          ]} />

          <FooterColumn title="MAKE MONEY WITH US" links={[
            "Sell on SamMarket",
            "Vendor Hub",
            "Become a Sales Consultant"
          ]} />

          <FooterColumn title="INTERNATIONAL" links={[
            "Nigeria",
            "Ghana",
            "Kenya",
            "Uganda",
            "Senegal"
          ]} />

        </div>

        {/* 🔹 SOCIAL + PAYMENTS */}
        <div className="row mt-5">

          <div className="col-md-6">
            <h6 className="fw-bold">JOIN US ON</h6>
            <div className="d-flex gap-3 fs-4">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-tiktok"></i>
            </div>
          </div>

          <div className="col-md-6 text-md-end">
            <h6 className="fw-bold">PAYMENT METHODS</h6>
            <div className="d-flex gap-3 justify-content-md-end">
              <img src="/images/visa.png" alt="Visa" height="30" />
              <img src="/images/mastercard.png" alt="Mastercard" height="30" />
              <img src="/images/verve.png" alt="Verve" height="30" />
            </div>
          </div>

        </div>

        {/* 🔹 BRANDS */}
        <div className="mt-4 small text-muted">
          ADIDAS | NIKE | SAMSUNG | APPLE | INFINIX | TECNO
        </div>

      </div>

      {/* 🔹 BOTTOM STRIP */}
      <div className="footer-bottom text-center py-3 small">
        © {new Date().getFullYear()} SamMarket. All rights reserved.
      </div>

    </footer>
  );
};

/* 🔹 Reusable Column */
const FooterColumn = ({ title, links }) => (
  <div className="col-md-3 col-sm-6">
    <h6 className="fw-bold">{title}</h6>
    <ul className="list-unstyled small">
      {links.map((link, i) => (
        <li key={i} className="mb-1">
          <a href="#" className="footer-link">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
