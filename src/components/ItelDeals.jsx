import { useState } from "react";
import itelDeals from "../data/itelDeals";

const ITEMS_PER_PAGE = 6;

const ItelDeals = () => {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    if (startIndex + ITEMS_PER_PAGE < itelDeals.length) {
      setStartIndex(startIndex + ITEMS_PER_PAGE);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - ITEMS_PER_PAGE);
    }
  };

  const visibleItems = itelDeals.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">
          Itel Official Store{" "}
          <span className="text-danger">| Holiday Sales</span>
        </h5>
        <button className="btn btn-outline-danger btn-sm">
          See All
        </button>
      </div>

      {/* Products */}
      <div className="position-relative">
        {/* Prev */}
        <button
          className="btn btn-light shadow position-absolute start-0 top-50 translate-middle-y"
          onClick={prev}
        >
          ‹
        </button>

        <div className="row g-3">
          {visibleItems.map((item) => (
            <div className="col-md-2 col-sm-4 col-6" key={item.id}>
              <div className="card h-100">
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
                  <p className="mb-0 fw-bold text-danger">
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

        {/* Next */}
        <button
          className="btn btn-light shadow position-absolute end-0 top-50 translate-middle-y"
          onClick={next}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default ItelDeals;
