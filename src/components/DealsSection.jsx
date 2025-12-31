import earbuds from "../assets/deals/mockup-free-B8fzajTW5YE-unsplash.jpg"
import smartwatch from "../assets/deals/simon-daoudi-2wFoa040m8g-unsplash.jpg"
import sneakers from "../assets/deals/linda-xu-fUEP0djb1hA-unsplash.jpg"
const flashProducts = [
  {
    id: 1,
    name: "Wireless Earbuds",
    desc: "Noise cancelling",
    price: 12000,
    oldPrice: 20000,
    discount: 40,
    stock: 70,
    img: earbuds,
  },
  {
    id: 2,
    name: "Smart Watch",
    desc: "Fitness tracking",
    price: 18000,
    oldPrice: 30000,
    discount: 40,
    stock: 45,
    img: smartwatch,
  },
  {
    id: 3,
    name: "Sneakers",
    desc: "Comfort fit",
    price: 25000,
    oldPrice: 40000,
    discount: 38,
    stock: 25,
    img: sneakers,
  },
];

const categories = [
  "📱 Devices",
  "🎧 Gadgets",
  "👕 Clothes",
  "👟 Sneakers",
  "💻 Computers",
  "🔌 Utilities",
];

const DealsSection = () => {
  return (
    <div className="container my-5">

      {/* ================= FLASH SALES ================= */}
      <div className="card mb-4 shadow-sm">

        {/* Header */}
        <div className="card-body border-bottom">
          <div className="d-flex justify-content-between align-items-center">

            <div className="fw-bold text-danger">
              ⚡ Flash Sales
            </div>

            <div className="text-muted small">
              ⏰ Time Left: <span className="fw-bold">02h : 15m : 30s</span>
            </div>

            <button className="btn btn-outline-danger btn-sm">
              More →
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="card-body">
          <div className="row g-3">

            {flashProducts.map((item) => (
              <div className="col-md-4" key={item.id}>
                <div className="card position-relative h-100">

                  {/* Discount Badge */}
                  <span
                    className="badge bg-danger position-absolute top-0 end-0 m-2"
                  >
                    -{item.discount}%
                  </span>

                  <img
                    src={item.img}
                    className="card-img-top"
                    alt={item.name}
                  />

                  <div className="card-body small">
                    <h6 className="fw-bold">{item.name}</h6>
                    <p className="text-muted mb-1">{item.desc}</p>

                    <div className="fw-bold text-danger">
                      ₦{item.price.toLocaleString()}
                      <span className="text-muted text-decoration-line-through ms-2">
                        ₦{item.oldPrice.toLocaleString()}
                      </span>
                    </div>

                    {/* Stock */}
                    <div className="mt-2">
                      <div className="progress" style={{ height: "6px" }}>
                        <div
                          className="progress-bar bg-danger"
                          style={{ width: `${item.stock}%` }}
                        />
                      </div>
                      <small className="text-muted">
                        {item.stock}% items left
                      </small>
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ================= SECOND GRID ================= */}
      <div className="row g-4">

        {/* LEFT – Buy Now Pay Small Small */}
        <div className="col-md-6">
          <div className="card h-100 text-center shadow-sm">
            <div className="card-body d-flex flex-column justify-content-center">

              <h4 className="fw-bold text-primary mb-2">
                🛍 Buy Now, Pay Small Small
              </h4>

              <p className="text-muted">
                Flexible payments on selected items
              </p>

              <button className="btn btn-primary fw-bold mt-2">
                Shop Now →
              </button>

              {/* Simple animation */}
              <div className="mt-3">
                <span className="badge bg-success px-3 py-2">
                  No Stress Payments 💳
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT – Categories */}
        <div className="col-md-6">
          <div className="row g-3">

            {categories.map((cat, index) => (
              <div className="col-6" key={index}>
                <div className="card text-center shadow-sm h-100">
                  <div className="card-body fw-bold">
                    {cat}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default DealsSection;
