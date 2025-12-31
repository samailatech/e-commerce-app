import { useEffect, useState } from "react";


import slide1 from "../assets/slides/bench-accounting-MGaFENpDCsw-unsplash.jpg";
import slide2 from "../assets/slides/brooke-lark-W1B2LpQOBxA-unsplash.jpg";
import slide3 from "../assets/slides/shoper-af5Oi0kOByE-unsplash.jpg";

const slides = [slide1, slide2, slide3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔁 Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // ⬅️ Previous slide
  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1
    );
  };

  // ➡️ Next slide
  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === slides.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="container-fluid d-flex justify-content-center my-4">
      <div style={{ width: "90%" }}>
        <div className="row g-3 align-items-stretch">

          {/* LEFT */}
          <div className="col-lg-2">
            <div className="border rounded p-3 bg-white h-100">
              <h6 className="fw-bold mb-3">Categories</h6>
              <ul className="list-unstyled small">
                <li>📱 Phones & Tablets</li>
                <li>💻 Computers</li>
                <li>👕 Fashion</li>
                <li>🏠 Home & Kitchen</li>
                <li>📺 Electronics</li>
                <li>🧴 Health & Beauty</li>
                <li>🛒 Groceries</li>
                <li>⚽ Sports</li>
              </ul>
            </div>
          </div>

          {/* MIDDLE – REACT SLIDESHOW */}
          <div className="col-lg-8 position-relative">
            <div className="rounded overflow-hidden h-100 position-relative">

              {/* IMAGE */}
              <img
                src={slides[currentIndex]}
                alt="Hero Slide"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />

              {/* PREV */}
              <button
                onClick={prevSlide}
                className="btn btn-dark position-absolute top-50 start-0 translate-middle-y"
              >
                ‹
              </button>

              {/* NEXT */}
              <button
                onClick={nextSlide}
                className="btn btn-dark position-absolute top-50 end-0 translate-middle-y"
              >
                ›
              </button>

              {/* DOTS */}
              <div className="position-absolute bottom-0 start-50 translate-middle-x mb-2 d-flex gap-2">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background:
                        index === currentIndex ? "#fff" : "rgba(255,255,255,0.5)",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-2 d-flex flex-column gap-3">
            <div className="border rounded p-3 bg-white flex-fill">
              <h6 className="fw-bold">📞 Call to Order</h6>
              <p className="small mb-1">0809 062 7817</p>
              <p className="small mb-1">0916 081 4441</p>
              <hr />
              <p className="small mb-1">🛒 Sell on SamMarket</p>
              <p className="small">📦 Send your packages</p>
            </div>

            <div className="border rounded p-3 bg-primary text-white text-center flex-fill">
              <h6 className="fw-bold">⚡ SamMarket Force</h6>
              <p className="small">Join our delivery & sales team</p>
              <button className="btn btn-light btn-sm fw-bold">
                Join Now
              </button>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
