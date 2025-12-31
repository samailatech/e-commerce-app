import { useState } from "react";
import beautyDeals from "../data/beautyDeals";

const ITEMS_PER_PAGE = 6;

const BeautyDeals = () => {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    if (startIndex + ITEMS_PER_PAGE < beautyDeals.length) {
      setStartIndex(startIndex + ITEMS_PER_PAGE);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - ITEMS_PER_PAGE);
    }
  };

  const visibleItems = beautyDeals.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">
          Beauty Deals <span className="text-danger">| Holiday Sales</span>
        </h5>
        <button className="btn btn-outline-danger btn-sm">See All</button>
      </div>

      {/* Products */}
      <div className="position-relative">
        <button
          className="btn btn-light position-absolute start-0 top-50 translate-middle-y shadow"
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
                    className="card-img-top"
                    alt={item.name}
                  />
                  <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                    -{item.discount}%
                  </span>
                </div>
                <div className="card-body p-2">
                  <p className="small fw-semibold mb-1">{item.name}</p>
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

        <button
          className="btn btn-light position-absolute end-0 top-50 translate-middle-y shadow"
          onClick={next}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default BeautyDeals;
