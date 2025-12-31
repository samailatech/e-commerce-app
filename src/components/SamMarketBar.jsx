// src/components/SamMarketBar.jsx

import sammarketBar from "../data/sammarketBar";

const SamMarketBar = () => {
  return (
    <div className="container my-4">
      
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold mb-0">
          SamMarket Bar | Holiday Sales Deals
        </h5>
        <button className="btn btn-sm btn-outline-danger">
          See All
        </button>
      </div>

      {/* Products Grid */}
      <div className="row g-3">
        {sammarketBar.map((item) => (
          <div key={item.id} className="col-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm position-relative">

              {/* Discount badge */}
              <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                -{item.discount}%
              </span>

              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ height: "180px", objectFit: "cover" }}
              />

              <div className="card-body p-2">
                <h6 className="card-title small fw-bold mb-1">
                  {item.name}
                </h6>

                <p className="text-muted small mb-1">
                  {item.description}
                </p>

                <div>
                  <span className="fw-bold text-danger">
                    ₦{item.newPrice.toLocaleString()}
                  </span>
                  <small className="text-muted text-decoration-line-through ms-2">
                    ₦{item.oldPrice.toLocaleString()}
                  </small>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SamMarketBar;
