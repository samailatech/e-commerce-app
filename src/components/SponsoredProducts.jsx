import { useRef } from "react";
import sponsoredProducts from "./data/sponsoredProducts";

const SponsoredProducts = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -1000,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 1000,
      behavior: "smooth",
    });
  };

  return (
    <div className="container my-5">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">⭐ Sponsored Products</h5>
      </div>

      <div className="position-relative">

        {/* PREV */}
        <button
          onClick={scrollLeft}
          className="btn btn-light shadow position-absolute top-50 start-0 translate-middle-y"
          style={{ zIndex: 10 }}
        >
          ‹
        </button>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="d-flex gap-3 overflow-hidden"
        >
          {sponsoredProducts.map((item) => (
            <div
              key={item.id}
              className="card position-relative"
              style={{ minWidth: "220px" }}
            >
              <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                -{item.discount}%
              </span>

              <img
                src={item.img}
                alt={item.name}
                className="card-img-top"
                style={{ height: "160px", objectFit: "cover" }}
              />

              <div className="card-body p-2">
                <h6 className="small fw-bold text-truncate">
                  {item.name}
                </h6>

                <p className="small text-muted mb-1">
                  {item.description}
                </p>

                <div className="fw-bold text-danger">
                  ₦{item.price.toLocaleString()}
                </div>

                <div className="text-muted text-decoration-line-through small">
                  ₦{item.oldPrice.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NEXT */}
        <button
          onClick={scrollRight}
          className="btn btn-light shadow position-absolute top-50 end-0 translate-middle-y"
          style={{ zIndex: 10 }}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default SponsoredProducts;
