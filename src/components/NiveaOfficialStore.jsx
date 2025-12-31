import { useRef } from "react";
import niveaProducts from "./data/niveaProducts";

const NiveaOfficialStore = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -1200, // width of 6 cards
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 1200,
      behavior: "smooth",
    });
  };

  return (
    <div className="container my-5">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold text-primary">
          🧴 Nivea Official Store | Holiday Sales Deals
        </h5>

        <button className="btn btn-outline-primary btn-sm">
          See all →
        </button>
      </div>

      {/* SLIDER */}
      <div className="position-relative">

        {/* PREV */}
        <button
          onClick={scrollLeft}
          className="btn btn-light shadow position-absolute top-50 start-0 translate-middle-y"
          style={{ zIndex: 10 }}
        >
          ‹
        </button>

        {/* PRODUCTS */}
        <div
          ref={sliderRef}
          className="d-flex gap-3 overflow-hidden"
        >
          {niveaProducts.map((item) => (
            <div
              key={item.id}
              className="card position-relative"
              style={{ minWidth: "180px" }}
            >
              {/* DISCOUNT */}
              <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                -{item.discount}%
              </span>

              <img
                src={item.img}
                alt={item.name}
                className="card-img-top"
                style={{ height: "150px", objectFit: "cover" }}
              />

              <div className="card-body p-2 small">
                <div className="fw-bold text-truncate">
                  {item.name}
                </div>

                <div className="text-danger fw-bold">
                  ₦{item.price.toLocaleString()}
                </div>

                <div className="text-muted text-decoration-line-through">
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

export default NiveaOfficialStore;
