import { useState } from "react";
import kidsBabyDeals from "../data/kidsBabyDeals";

const ITEMS_PER_VIEW = 6;

const KidsBabyDeals = () => {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    if (startIndex + ITEMS_PER_VIEW < kidsBabyDeals.length) {
      setStartIndex(startIndex + ITEMS_PER_VIEW);
    }
  };

  const prev = () => {
    if (startIndex - ITEMS_PER_VIEW >= 0) {
      setStartIndex(startIndex - ITEMS_PER_VIEW);
    }
  };

  const visibleItems = kidsBabyDeals.slice(
    startIndex,
    startIndex + ITEMS_PER_VIEW
  );

  return (
    <div className="container my-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold mb-0">
          Kids & Baby |{" "}
          <span className="text-danger">Holiday Sales Deals</span>
        </h5>
        <button className="btn btn-sm btn-outline-primary">
          See All
        </button>
      </div>

      {/* Grid */}
      <div className="position-relative">
        <div className="row g-3">
          {visibleItems.map((item) => (
            <div className="col-6 col-md-4 col-lg-2" key={item.id}>
              <div className="card border-0 shadow-sm h-100">
                <div className="position-relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top"
                    style={{ height: "160px", objectFit: "cover" }}
                  />
                  <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                    -{item.discount}%
                  </span>
                </div>

                <div className="card-body p-2">
                  <p className="small fw-semibold mb-1 text-truncate">
                    {item.name}
                  </p>
                  <p className="fw-bold text-danger mb-0">
                    ₦{item.newPrice.toLocaleString()}
                  </p>
                  <small className="text-muted text-decoration-line-through">
                    ₦{item.oldPrice.toLocaleString()}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <button
          onClick={prev}
          className="btn btn-light shadow position-absolute top-50 start-0 translate-middle-y"
        >
          ❮
        </button>
        <button
          onClick={next}
          className="btn btn-light shadow position-absolute top-50 end-0 translate-middle-y"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default KidsBabyDeals;