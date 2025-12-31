import { Link } from "react-router-dom";

const SellOnSamMarket = () => {
  return (
    <div className="container my-4">

      {/* 🔶 HERO SECTION */}
      <div className="row align-items-center rounded overflow-hidden mb-4" style={{ background: "#f7931e" }}>
        <div className="col-md-7 text-white p-5">
          <h1 className="fw-bold">Sell on SamMarket</h1>
        </div>

        <div className="col-md-5 bg-light text-center p-4">
          <img
            src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8"
            alt="Sell Online"
            className="img-fluid"
          />
          <Link to="/sell/start" className="btn btn-warning fw-bold mt-3">
            START SELLING
          </Link>
        </div>
      </div>

      {/* 🔴 WHY SELL */}
      <h6 className="text-center fw-bold mb-3">Why sell on SamMarket?</h6>

      <div className="row g-2 text-center mb-5">
        {[
          "Connect with more buyers",
          "Sell more products",
          "Top notch seller support",
          "Expert product delivery",
          "Improve revenue",
          "Free online/offline training",
        ].map((item, i) => (
          <div key={i} className="col-md-2 col-6">
            <div className="bg-danger text-white p-2 rounded small">
              {item}
            </div>
          </div>
        ))}
      </div>

      {/* 🎥 TESTIMONIALS */}
      <h6 className="fw-bold mb-3">Testimonials</h6>

      <div className="ratio ratio-16x9 mb-5">
        <iframe
          src="https://www.youtube.com/embed/5gY8k9yE6WQ"
          title="Vendor Success Story"
          allowFullScreen
        ></iframe>
      </div>

      {/* ⚙️ HOW IT WORKS */}
      <h6 className="text-center fw-bold mb-4">How it works</h6>

      <div className="row text-center mb-4">
        <div className="col-md-3">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
            className="rounded-circle mb-3"
            width="100"
            height="100"
            alt=""
          />
          <h6>Step 1: Register under 5 minutes</h6>
          <p className="small text-muted">
            Fill the registration form, submit business registration and bank details
          </p>
        </div>

        <div className="col-md-3">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            className="rounded-circle mb-3"
            width="100"
            height="100"
            alt=""
          />
          <h6>Step 2: Become an ecommerce expert</h6>
          <p className="small text-muted">
            Complete seller training and activate your seller center
          </p>
        </div>

        <div className="col-md-3">
          <img
            src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc"
            className="rounded-circle mb-3"
            width="100"
            height="100"
            alt=""
          />
          <h6>Step 3: List your products</h6>
          <p className="small text-muted">
            Upload your best-selling products and start selling
          </p>
        </div>

        <div className="col-md-3">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
            className="rounded-circle mb-3"
            width="100"
            height="100"
            alt=""
          />
          <h6>Step 4: Benefit from promotions</h6>
          <p className="small text-muted">
            Get visibility from campaigns and marketing insights
          </p>
        </div>
      </div>

      {/* 🔘 CTA BUTTONS */}
      <div className="text-center mb-5">
        <button className="btn btn-outline-warning fw-bold me-2">
          VENDOR HUB
        </button>
        <Link to="/sell/start" className="btn btn-warning fw-bold">
          START SELLING
        </Link>
      </div>
    </div>
  );
};

export default SellOnSamMarket;
