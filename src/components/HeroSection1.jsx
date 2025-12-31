import { useRef } from "react";
import { Link } from 'react-router-dom';
import offer1 from "../assets/slides/carlos-muza-hpjSkU2UYSU-unsplash.jpg";
import offer2 from "../assets/slides/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg";
import offer3 from "../assets/slides/emiliano-vittoriosi-jovi7gRQjOs-unsplash.jpg";
import offer4 from "../assets/slides/growtika-5hp2g8Aem08-unsplash.jpg";
import offer5 from "../assets/slides/hookle-app-6Pa7l0unTAY-unsplash.jpg";


const offers = [
  { img: offer1, title: "🔥 Awoof Offers", link: "/awoof-offers" },
  { img: offer2, title: "💸 80% OFF Deals", link: "/80-off-deals" },
  { img: offer3, title: "🛒 Groceries Bonanza", link: "/groceries-bonanza" },
  { img: offer4, title: "📱 Phone Deals", link: "/phone-deals" },
  { img: offer5, title: "🏠 Home Essentials", link: "/home-essentials" },
];

const HeroSection1 = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  const handleKeyNav = (e, link) => {
  
    if (e.key === 'Enter') {
      //keyboard "click" - navigate programmatically would require useNavigate from react-router-dom
      // With Link wrapping the card Enter will work by default when focused,
      //but this handler can be used for custom analytics or other side effects.
      console.log(`Navigating to ${link}`);
    }
  }
  return (
    <>
      {/* 🔼 EXISTING HERO CONTENT HERE */}

      {/* 🔽 Awoof Offers Slider */}
      <div className="container-fluid d-flex justify-content-center mt-4">
        <div style={{ width: "90%" }} className="position-relative">

        { /* <h5 className="fw-bold mb-3">🔥 Awoof Offers & Hot Deals</h5>*/}

          {/* PREV BUTTON */}
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
            {offers.map((offer, index) => (
              <Link 
              key={index}
              to={offer.link}
              className="text-decoration-none
              text-dark"
              style={{minWidth:"250px"}}
              onClick={()=>{ console.log("offer clicked:", offer.title)}}
              aria-label={offer.title}
              >
              <div
                key={index}
                className="border rounded overflow-hidden"
                style={{ minWidth: "250px" }}
              >
                <img
                  src={offer.img}
                  alt={offer.title}
                  className="w-100"
                  style={{ height: "140px", objectFit: "cover" }}
                  loading="lazy"
                />
                <div className="p-2 text-center fw-bold small">
                  {offer.title}
                </div>
              </div>
              </Link>
            ))}
          </div>

          {/* NEXT BUTTON */}
          <button
            onClick={scrollRight}
            className="btn btn-light shadow position-absolute top-50 end-0 translate-middle-y"
            style={{ zIndex: 10 }}
          >
            ›
          </button>

        </div>
      </div>
      <style>{`
        .offer-card{
        transition: transform 0.25s ease; box-shadow: 0.25s ease;
        cursor: pointer;
        background: #fff;
        }
        .offer-card:hover,
        .offer-card:focus {
          transform: translateY(-6px); box-shadow: 0 12px 28px rgba(0,0,0,0.12);
          outline: none;
        }
      `}</style>
    </>
  );
};
export default HeroSection1;
