import React from "react";
import { Link } from "react-router-dom";

const SellOnSamMarketStart = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* LEFT ILLUSTRATION */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
            alt="Seller illustration"
            className="img-fluid"
            style={{ maxHeight: "350px" }}
          />
        </div>

        {/* RIGHT FORM */}
        <div className="col-md-6">
          <h4 className="fw-bold mb-2">Sell on SamMarket</h4>
          <p className="text-muted mb-4">
            Choose the country of your shop
          </p>

          <div className="card p-4 shadow-sm">
            <select className="form-select mb-3">
              <option value="">Select your country *</option>
              <option value="nigeria">Nigeria</option>
              <option value="ghana">Ghana</option>
              <option value="kenya">Kenya</option>
              <option value="egypt">Egypt</option>
            </select>

            <button className="btn btn-warning fw-bold w-100 mb-2">
              NEXT
            </button>

            <small className="text-muted">
              Only for sellers registered & selling in their own country
            </small>
          </div>

          <div className="text-center my-3 text-muted">OR</div>

          <button className="btn btn-outline-primary w-100 fw-bold mb-3">
            🌍 Sell Globally on SamMarket
          </button>

          <p className="text-muted small text-center">
            Register as a SamMarket Global seller and sell across Africa.
          </p>

          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-warning fw-bold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellOnSamMarketStart;
