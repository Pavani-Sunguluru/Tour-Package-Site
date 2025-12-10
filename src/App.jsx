// src/App.jsx
import { kuberBali } from "./brochureData";

function SectionTitle({ eyebrow, children }) {
  return (
    <div className="section-header">
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{children}</h2>
    </div>
  );
}

function App() {
  return (
    <div className="page">
      {/* Top nav */}
      <header className="top-nav">
        <div className="top-nav-inner">
       <div className="brand">
              <span className="brand-logo">🚵</span>
              <span className="brand-text">
                <strong>Kuber ATV Ride</strong>
                <span>Adventure • Ubud • Bali</span>
              </span>
            </div>
          <a href="#book" className="nav-cta">
            Book now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-gradient" />
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-chip">ATV • Ubud • Waterfall Track</p>
            <h1 className="hero-title">
              Ride through{" "}
              <span className="hero-highlight">waterfalls & jungle</span> in
              Bali.
            </h1>
            <p className="hero-subtitle">
              1–1.5 hour ATV quad bike adventure in Ubud with waterfall, tunnel,
              rice fields and jungle tracks.
            </p>
            <div className="hero-tags">
              <span>Beginner-friendly</span>
              <span>Age 6–65</span>
              <span>Guided tour</span>
            </div>
            <div className="hero-bottom-row">
              <div className="hero-price">
                <p>From</p>
                <strong>Rp. 1.200.000</strong>
                <span>per ATV single</span>
              </div>

              {/* Button to scroll to form */}
              <a href="#book" className="hero-cta">
                Check slots
              </a>

              {/* WhatsApp quick chat */}
                 <a
                href="https://wa.me/917013484408?text=Hi%20I%20want%20to%20book%20the%20Kuber%20Bali%20ATV%20Adventure"
                target="_blank"
                rel="noopener noreferrer"
                className="wa-icon-only"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  style={{ width: "32px", height: "32px" }}
                />
              </a>
            </div>
          </div>
          <div className="hero-image-card">
            <img
              src="https://images.pexels.com/photos/258547/pexels-photo-258547.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="ATV Adventure in Bali"
            />
            <div className="hero-badge">
              <p>5 daily trips</p>
              <span>Morning to afternoon</span>
            </div>
          </div>
        </div>
      </section>

      <main className="main">
        {/* About */}
        <section className="card card-about">
          <SectionTitle eyebrow="About the trail">
            Why Kuber Bali Adventure?
          </SectionTitle>
          {kuberBali.description.split("\n").map(
            (line, index) =>
              line.trim() && (
                <p className="text" key={index}>
                  {line.trim()}
                </p>
              )
          )}
          <div className="pill-row">
            <span>Ubud location (≈1 hour from Kuta / Seminyak)</span>
            <span>Suitable for experienced & first-time riders</span>
            <span>Age 6–65 years</span>
          </div>
        </section>

        {/* Packages */}
        <section className="card">
          <SectionTitle eyebrow="Choose your ride">
            ATV package options
          </SectionTitle>
          <div className="options-grid">
            {kuberBali.options.map((opt) => (
              <article className="option-card" key={opt.name}>
                <div className="option-header">
                  <span className="option-pill">{opt.name}</span>
                  <p className="option-duration">{opt.duration}</p>
                </div>
                <ul className="bullet-list">
                  {opt.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="price-block">
                  <p className="price-heading">Price {opt.name}</p>
                  {opt.prices.map((pr) => (
                    <div className="price-row" key={pr.label}>
                      <span>{pr.label}</span>
                      <span className="price">{pr.price}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Other activities + schedule */}
        <section className="layout-split">
          {/* Left column */}
          <div className="card">
            <SectionTitle eyebrow="Make it a full day">
              Other activities
            </SectionTitle>
            <ul className="activity-list">
              {kuberBali.otherActivities.map((a) => (
                <li key={a.label} className="activity-row">
                  <div className="activity-info">
                    <span className="activity-name">{a.label}</span>
                    <span className="activity-tag">Add-on experience</span>
                  </div>
                  <span className="price">{a.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column */}
          <div className="card card-schedule">
            <SectionTitle eyebrow="Daily departures">
              Trip schedule
            </SectionTitle>
            <div className="schedule-scroll">
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th>Trip</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {kuberBali.schedule.map((s) => (
                    <tr key={s.trip}>
                      <td>{s.trip}</td>
                      <td>{s.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="schedule-note">
              Please arrive <strong>15–20 minutes</strong> before your selected
              trip time.
            </p>
          </div>
        </section>

        {/* Includes / To bring */}
        <section className="layout-split">
          <div className="card">
            <SectionTitle eyebrow="Included in your tour">
              The program includes
            </SectionTitle>
            <ul className="bullet-list two-column-list">
              {kuberBali.programIncludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="card card-highlight">
            <SectionTitle eyebrow="What to pack">
              To wear & bring
            </SectionTitle>
            <ul className="bullet-list">
              {kuberBali.toBring.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text small">
              Wear comfortable clothes that can get wet and muddy. Lockers and
              shower facilities are available on site.
            </p>
          </div>
        </section>

        {/* Booking section */}
        <section id="book" className="card card-book">
          <SectionTitle eyebrow="Plan your ride">
            Send a quick enquiry
          </SectionTitle>
          <p className="text">
            Share your preferred date, trip time, and number of riders. We’ll
            confirm availability and send you full details.
          </p>
          <form
            className="enquiry-form"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              const name = form.name.value;
              const email = form.email.value;
              const phone = form.phone.value;
              const date = form.date.value;
              const trip = form.trip.value;
              const message = form.message.value;

              const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\nPhone/WhatsApp: ${phone}\nDate: ${date}\nPreferred trip: ${trip}\n\nMessage:\n${message}`
              );
              window.location.href = `mailto:satishvasu7518@gmail.com?subject=Kuber Bali ATV Enquiry&body=${body}`;
            }}
          >
            <div className="form-grid">
              <div className="field">
                <label>Full name</label>
                <input name="name" required />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" name="email" required />
              </div>
              <div className="field">
                <label>Phone / WhatsApp</label>
                <input name="phone" />
              </div>
              <div className="field">
                <label>Preferred date</label>
                <input type="date" name="date" />
              </div>
              <div className="field full">
                <label>Preferred trip time</label>
                <select name="trip">
                  <option value="">Select a trip</option>
                  {kuberBali.schedule.map((s) => (
                    <option key={s.trip} value={s.trip}>
                      {s.trip} — {s.time}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field full">
                <label>Message (optional)</label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Number of riders, Option A/B, add-on activities..."
                />
              </div>
            </div>

            <button type="submit" className="form-submit">
              Open email to send enquiry
            </button>
            <p className="text tiny">
              This will open your email app with all details filled in.
            </p>
              {/* WhatsApp icon only */}
              <a
                href="https://wa.me/917013484408?text=Hi%20I%20want%20to%20book%20the%20Kuber%20Bali%20ATV%20Adventure"
                target="_blank"
                rel="noopener noreferrer"
                className="wa-icon-only"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  style={{ width: "36px", height: "36px" }}
                />
              </a>

          </form>
        </section>
      </main>

      {/* Sticky mobile bar */}
      <div className="sticky-bar">
        <div className="sticky-price">
          <span>From</span>
          <strong>Rp. 1.200.000</strong>
        </div>
        <a
          href="https://wa.me/917013484408?text=Hi%20I%20am%20looking%20for%20Kuber%20Bali%20ATV%20Adventure%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-button"
        >
          WhatsApp us
        </a>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} Kuber Bali Adventure • Demo website
      </footer>

    </div>
  );
}

export default App;
