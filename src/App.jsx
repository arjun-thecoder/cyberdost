import { useState } from "react";
import {
  Check,
  ChevronDown,
  Download,
  Instagram,
  MessageCircle,
  Play,
  ShieldCheck,
  Star,
  Zap,
  Copy,
  X
} from "lucide-react";

const CONFIG = {
  productName: "10,000+ Instagram Reels Bundle",

  price: "199",
  originalPrice: "999",

  upiId: "arjuns6060-1@okhdfcbank",

  whatsappNumber: "919056690652",

  supportText:
    "Hi CyberDost, I have purchased the 10,000+ Instagram Reels Bundle. I am sending my payment screenshot. Please send me the bundle.",

  qrImage: "/qr-code.png"
};

const categories = [
  {
    icon: "🔥",
    title: "Trending",
    count: "1,000+ Reels"
  },
  {
    icon: "💪",
    title: "Motivation",
    count: "1,000+ Reels"
  },
  {
    icon: "😎",
    title: "Attitude",
    count: "800+ Reels"
  },
  {
    icon: "❤️",
    title: "Love",
    count: "800+ Reels"
  },
  {
    icon: "💔",
    title: "Sad",
    count: "700+ Reels"
  },
  {
    icon: "😂",
    title: "Comedy",
    count: "800+ Reels"
  },
  {
    icon: "💰",
    title: "Business",
    count: "700+ Reels"
  },
  {
    icon: "🧠",
    title: "Facts",
    count: "700+ Reels"
  },
  {
    icon: "🏋️",
    title: "Fitness",
    count: "600+ Reels"
  },
  {
    icon: "✈️",
    title: "Travel",
    count: "500+ Reels"
  },
  {
    icon: "📝",
    title: "Shayari",
    count: "700+ Reels"
  },
  {
    icon: "🎵",
    title: "Trending Audio",
    count: "700+ Reels"
  }
];

const features = [
  "10,000+ Instagram Reels",
  "Multiple Viral Categories",
  "Ready-to-Post Content",
  "Organized Content Bundle",
  "Download & Use on Your Device",
  "One-Time Payment"
];

const faqs = [
  {
    question: "Bundle me kya milega?",
    answer:
      "Aapko 10,000+ Instagram Reels ka digital bundle milega, jisme multiple categories ka content included hai."
  },
  {
    question: "Payment kaise karna hai?",
    answer:
      "Neeche diye gaye QR code ko scan karke displayed amount ka payment karein."
  },
  {
    question: "Payment ke baad bundle kaise milega?",
    answer:
      "Payment complete hone ke baad WhatsApp button par click karke payment screenshot send karein. Verification ke baad bundle delivery ki jayegi."
  },
  {
    question: "Kya mobile se download kar sakte hain?",
    answer:
      "Haan, bundle ko mobile, tablet ya computer par download kiya ja sakta hai."
  },
  {
    question: "Kya payment refundable hai?",
    answer:
      "Digital products ke liye refund policy purchase se pehle carefully check karein."
  }
];

function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
    CONFIG.supportText
  )}`;

  const copyUPI = async () => {
    try {
      await navigator.clipboard.writeText(CONFIG.upiId);
      alert("UPI ID copied!");
    } catch {
      alert(`UPI ID: ${CONFIG.upiId}`);
    }
  };

  return (
    <div className="app">

      {/* NAVBAR */}

      <nav className="navbar">
        <div className="nav-container">

          <div className="logo">
            <div className="logo-icon">
              <Instagram size={22} />
            </div>

            <span>
              Cyber<span>Dost</span>
            </span>
          </div>

          <a
            href="#payment"
            className="nav-button"
          >
            Get Bundle
          </a>

        </div>
      </nav>


      {/* HERO */}

      <section className="hero">

        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <div className="hero-content">

          <div className="badge">
            <span className="pulse-dot"></span>
            LIMITED TIME OFFER
          </div>

          <h1>
            10,000+
            <span> Instagram Reels</span>
          </h1>

          <p className="hero-subtitle">
            The ultimate content bundle for creators.
            Get thousands of ready-to-use reels across
            multiple categories.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={() => setShowPayment(true)}
            >
              <Zap size={20} />
              Get 10,000+ Reels
            </button>

            <a
              href="#categories"
              className="secondary-button"
            >
              Explore Bundle
            </a>

          </div>

          <div className="trust-row">

            <div>
              <Check size={17} />
              Instant Access
            </div>

            <div>
              <Check size={17} />
              Multiple Categories
            </div>

            <div>
              <Check size={17} />
              Creator Friendly
            </div>

          </div>

        </div>

        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <ChevronDown size={18} />
        </div>

      </section>


      {/* STATS */}

      <section className="stats">

        <div className="stat">
          <strong>10K+</strong>
          <span>Reels</span>
        </div>

        <div className="stat">
          <strong>12+</strong>
          <span>Categories</span>
        </div>

        <div className="stat">
          <strong>HD</strong>
          <span>Quality Content</span>
        </div>

        <div className="stat">
          <strong>24/7</strong>
          <span>Access</span>
        </div>

      </section>


      {/* WHAT YOU GET */}

      <section className="section">

        <div className="section-heading">

          <div className="small-label">
            WHAT'S INSIDE
          </div>

          <h2>
            Everything you need to
            <span> grow your content</span>
          </h2>

          <p>
            Stop spending hours searching for content.
            Get a massive collection of reels ready for your
            content workflow.
          </p>

        </div>


        <div className="feature-grid">

          {features.map((feature, index) => (

            <div
              className="feature-card"
              key={index}
            >

              <div className="feature-icon">
                <Check size={20} />
              </div>

              <div>
                <h3>{feature}</h3>
                <p>
                  Included in your reels bundle
                </p>
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* CATEGORIES */}

      <section
        className="section categories-section"
        id="categories"
      >

        <div className="section-heading">

          <div className="small-label">
            CONTENT CATEGORIES
          </div>

          <h2>
            Reels for
            <span> every niche</span>
          </h2>

          <p>
            Explore content across popular Instagram
            categories.
          </p>

        </div>


        <div className="category-grid">

          {categories.map((category, index) => (

            <div
              className="category-card"
              key={index}
            >

              <div className="category-emoji">
                {category.icon}
              </div>

              <div>
                <h3>{category.title}</h3>
                <span>{category.count}</span>
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* OFFER */}

      <section className="offer-section">

        <div className="offer-card">

          <div className="offer-content">

            <div className="small-label">
              SPECIAL LAUNCH OFFER
            </div>

            <h2>
              10,000+ Reels.
              <br />
              One Powerful Bundle.
            </h2>

            <p>
              Get access to the complete collection
              at a special launch price.
            </p>

            <div className="price">

              <span className="old-price">
                ₹{CONFIG.originalPrice}
              </span>

              <strong>
                ₹{CONFIG.price}
              </strong>

              <span className="save">
                SAVE 80%
              </span>

            </div>

            <button
              className="primary-button large"
              onClick={() => setShowPayment(true)}
            >
              Get The Bundle
              <Download size={20} />
            </button>

          </div>


          <div className="offer-visual">

            <div className="visual-card">

              <Instagram size={55} />

              <strong>
                10K+
              </strong>

              <span>
                REELS BUNDLE
              </span>

              <div className="mini-bars">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* PAYMENT */}

      <section
        className="payment-section"
        id="payment"
      >

        <div className="section-heading">

          <div className="small-label">
            SECURE PAYMENT
          </div>

          <h2>
            Get your bundle
            <span> in 3 simple steps</span>
          </h2>

        </div>


        <div className="steps">

          <div className="step">

            <div className="step-number">
              01
            </div>

            <div>
              <h3>Scan QR</h3>
              <p>
                Scan the QR code and complete
                the payment.
              </p>
            </div>

          </div>


          <div className="step">

            <div className="step-number">
              02
            </div>

            <div>
              <h3>Send Screenshot</h3>
              <p>
                Send your payment screenshot
                on WhatsApp.
              </p>
            </div>

          </div>


          <div className="step">

            <div className="step-number">
              03
            </div>

            <div>
              <h3>Receive Bundle</h3>
              <p>
                After verification, receive
                your complete bundle.
              </p>
            </div>

          </div>

        </div>


        <div className="payment-box">

          <div className="payment-left">

            <div className="secure-badge">
              <ShieldCheck size={18} />
              Secure UPI Payment
            </div>

            <h3>
              Pay only ₹{CONFIG.price}
            </h3>

            <p>
              Scan the QR code using any
              supported UPI app.
            </p>

            <div className="upi-box">

              <span>
                {CONFIG.upiId}
              </span>

              <button onClick={copyUPI}>
                <Copy size={17} />
              </button>

            </div>

          </div>


          <div className="qr-wrapper">

            <img
              src={CONFIG.qrImage}
              alt="UPI Payment QR Code"
            />

            <span>
              Scan & Pay ₹{CONFIG.price}
            </span>

          </div>

        </div>


        <div className="whatsapp-box">

          <div className="whatsapp-icon">
            <MessageCircle size={30} />
          </div>

          <div className="whatsapp-content">

            <h3>
              Payment done?
            </h3>

            <p>
              Send your payment screenshot
              on WhatsApp to receive your bundle.
            </p>

          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <MessageCircle size={19} />
            Send on WhatsApp
          </a>

        </div>

      </section>


      {/* REVIEWS */}

      <section className="reviews-section">

        <div className="section-heading">

          <div className="small-label">
            CREATOR LOVE
          </div>

          <h2>
            Made for
            <span> creators</span>
          </h2>

        </div>


        <div className="review-grid">

          <Review
            text="A huge collection of content in one place. Makes finding reels much easier."
            name="Creator"
          />

          <Review
            text="The category-wise organization is really useful for content planning."
            name="Content Creator"
          />

          <Review
            text="Perfect if you need a large content library for your social media workflow."
            name="Instagram Creator"
          />

        </div>

      </section>


      {/* FAQ */}

      <section className="faq-section">

        <div className="section-heading">

          <div className="small-label">
            FAQ
          </div>

          <h2>
            Frequently asked
            <span> questions</span>
          </h2>

        </div>


        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div
              className={`faq-item ${
                openFaq === index ? "active" : ""
              }`}
              key={index}
            >

              <button
                onClick={() =>
                  setOpenFaq(
                    openFaq === index ? null : index
                  )
                }
              >

                <span>
                  {faq.question}
                </span>

                <ChevronDown size={20} />

              </button>


              {openFaq === index && (

                <div className="faq-answer">
                  {faq.answer}
                </div>

              )}

            </div>

          ))}

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="final-cta">

        <div className="cta-glow"></div>

        <Instagram size={45} />

        <h2>
          Ready to level up
          <br />
          your content?
        </h2>

        <p>
          Get 10,000+ reels and start creating
          more content today.
        </p>

        <button
          className="primary-button large"
          onClick={() => setShowPayment(true)}
        >
          Get 10,000+ Reels
          <Zap size={20} />
        </button>

      </section>


      {/* FOOTER */}

      <footer>

        <div className="footer-logo">
          <Instagram size={20} />
          CyberDost
        </div>

        <p>
          © {new Date().getFullYear()} CyberDost.
          All rights reserved.
        </p>

        <div className="footer-links">
          <a href="#payment">Payment</a>
          <a href="#categories">Categories</a>
          <a href="#faq">FAQ</a>
        </div>

      </footer>


      {/* PAYMENT MODAL */}

      {showPayment && (

        <div
          className="modal-overlay"
          onClick={() => setShowPayment(false)}
        >

          <div
            className="payment-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-modal"
              onClick={() => setShowPayment(false)}
            >
              <X size={22} />
            </button>

            <div className="modal-icon">
              <Zap size={27} />
            </div>

            <h2>
              Get 10,000+ Reels
            </h2>

            <p>
              Pay ₹{CONFIG.price} using UPI
              and send the screenshot on WhatsApp.
            </p>

            <img
              className="modal-qr"
              src={CONFIG.qrImage}
              alt="Payment QR"
            />

            <strong className="modal-price">
              ₹{CONFIG.price}
            </strong>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button full"
            >
              <MessageCircle size={20} />
              Send Payment Screenshot
            </a>

          </div>

        </div>

      )}

    </div>
  );
}


function Review({ text, name }) {
  return (
    <div className="review-card">

      <div className="stars">
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
      </div>

      <p>
        "{text}"
      </p>

      <strong>
        {name}
      </strong>

    </div>
  );
}

export default App;
