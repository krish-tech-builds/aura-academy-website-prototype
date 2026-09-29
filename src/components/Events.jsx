function Events() {
  return (
    <section className="events">
      <div className="section-heading">
        <p>WHAT'S HAPPENING</p>
        <h2>Upcoming Events</h2>
      </div>

      <div className="event-grid">
        <div className="event-card">
          <span>SEP 27, 2026</span>
          <h3>Weekend Dance Showcase</h3>
          <p>A special student performance celebrating creativity and confidence.</p>
        </div>

        <div className="event-card">
          <span>OCT 03, 2026</span>
          <h3>Junior Chess Championship</h3>
          <p>An exciting chess competition for young learners.</p>
        </div>

        <div className="event-card">
          <span>OCT 10, 2026</span>
          <h3>Creative Art Workshop</h3>
          <p>A hands-on session exploring imagination, colours and creativity.</p>
        </div>
      </div>
    </section>
  )
}

export default Events