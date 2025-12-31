import holidayDeals from "./data/holidayDeals";

const HolidaySales = () => {
  return (
    <div className="container my-5">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold text-danger">
          🎄 Holiday Sales Deals | Up to 60% Off
        </h5>

        <button className="btn btn-outline-danger btn-sm">
          See all →
        </button>
      </div>

      {/* GRID */}
      <div className="row g-3">
        {holidayDeals.map((item) => (
          <div key={item.id} className="col-6 col-md-3">
            <div className="card position-relative h-100">

              {/* DISCOUNT */}
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

                <div className="fw-bold text-danger">
                  ₦{item.price.toLocaleString()}
                </div>

                <div className="text-muted text-decoration-line-through small">
                  ₦{item.oldPrice.toLocaleString()}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HolidaySales;
