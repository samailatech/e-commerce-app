import {
  FaSearch,
  FaUser,
  FaQuestionCircle,
  FaShoppingCart,
  FaChevronDown,
  FaHeart,
} from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

const Menu = () => {
  return (
    <header>
      {/* Top bar */}
      <div className="bg-light border-bottom py-1 px-4 d-flex justify-content-between align-items-center small">
        <span className="text-primary fw-semibold" style={{ cursor: "pointer" }}>
          ⭐ Sell on SamMarket
        </span>

        <div className="d-flex gap-4 fw-semibold">
          <span className="text-primary">SAMMARKET ⭐</span>
          <span className="text-muted">PAY</span>
          <span className="text-muted">DELIVERY</span>
        </div>
      </div>

      {/* Main navbar (STATIC) */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 fixed-top shadow-sm main-navbar">
        {/* Logo */}
        <a className="navbar-brand fw-bold fs-3" href="/">
          SAM<span className="text-primary">MARKET</span>
        </a>

        {/* Search */}
        <form className="d-flex flex-grow-1 mx-4">
          <div className="input-group">
            <span className="input-group-text bg-white">
              <FaSearch />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search products, brands and categories"
            />
            <button className="btn btn-primary fw-semibold px-4">
              Search
            </button>
          </div>
        </form>

        {/* Right menu */}
        <ul className="navbar-nav ms-auto align-items-center gap-3">
          {/* Account dropdown */}
          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle d-flex align-items-center gap-1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ cursor: "pointer" }}
            >
              <FaUser />
              Account
              <FaChevronDown size={12} />
            </span>

            <ul
              className="dropdown-menu dropdown-menu-end shadow p-3"
              style={{ width: "220px" }}
            >
              <li>
                <button className="btn btn-primary w-100 fw-semibold mb-2">
                  Sign In
                </button>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>

              <li className="dropdown-item d-flex align-items-center gap-2">
                <FaUser />
                My Account
              </li>

              <li className="dropdown-item d-flex align-items-center gap-2">
                <MdOutlineShoppingBag />
                Orders
              </li>

              <li className="dropdown-item d-flex align-items-center gap-2">
                <FaHeart />
                Wishlist
              </li>
            </ul>
          </li>

          <li className="nav-item d-flex align-items-center gap-1" style={{ cursor: "pointer" }}>
            <FaQuestionCircle />
            Help
          </li>

          <li className="nav-item d-flex align-items-center gap-1" style={{ cursor: "pointer" }}>
            <FaShoppingCart />
            Cart
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
