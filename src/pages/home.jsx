//? Libraries
import React from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  //? Private Components
  function Header() {
    return (
      <header className="home-section-header">
        <nav className="home-section-header-main-nav">
          <img
            className="home-section-header-main-nav-logo"
            src=""
            alt="Logo"
          />
          <a className="home-section-header-main-nav-link" href="#">
            home
          </a>
          <a className="home-section-header-main-nav-link" href="#">
            about
          </a>
        </nav>
        <button className="home-section-header-contact-btn">contact us</button>
      </header>
    )
  }

  function Hero() {
    return (
      <article className="home-section-hero">
        <h1 className="home-section-hero-title">
          Find the best <span>talent</span>
        </h1>
        <p className="home-section-hero-description">
          Finding the right people and building high performing teams can be
          hard. Most companies aren't tapping into the abundance of global
          talent. We're about to change that.
        </p>
      </article>
    )
  }

  function Description() {
    return (
      <article className="home-section-description">
        <h1 className="home-section-description-title">
          Build & manage distributed teams like no one else.
        </h1>
        <section className="home-section-description-skills-container">
          {/* // TODO: *3 */}
          <article className="home-section-description-skills-container-skill">
            <img
              className="home-section-description-skills-container-skill-img"
              src=""
              alt="Experienced Individuals"
            />
            <h2 className="home-section-description-skills-container-skill-title">
              Experienced Individuals
            </h2>
            <h3 className="home-section-description-skills-container-skill-description">
              Our network is made up of highly experienced professionals who are
              passionate about what they do.
            </h3>
          </article>
          <article className="home-section-description-skills-container-skill">
            <img
              className="home-section-description-skills-container-skill-img"
              src=""
              alt="Experienced Individuals"
            />
            <h2 className="home-section-description-skills-container-skill-title">
              Experienced Individuals
            </h2>
            <h3 className="home-section-description-skills-container-skill-description">
              Our network is made up of highly experienced professionals who are
              passionate about what they do.
            </h3>
          </article>
          <article className="home-section-description-skills-container-skill">
            <img
              className="home-section-description-skills-container-skill-img"
              src=""
              alt="Experienced Individuals"
            />
            <h2 className="home-section-description-skills-container-skill-title">
              Experienced Individuals
            </h2>
            <h3 className="home-section-description-skills-container-skill-description">
              Our network is made up of highly experienced professionals who are
              passionate about what they do.
            </h3>
          </article>
        </section>
      </article>
    )
  }

  function Reviews() {
    return (
      <article className="home-section-reviews">
        <h1 className="home-section-reviews-title">
          Delivering real results for top companies. Some of our
          <span> success stories.</span>
        </h1>
        <section className="home-section-reviews-container">
          {/* // TODO: *3 */}
          <article className="home-section-reviews-container-review">
            <img
              className="home-section-reviews-container-review-quotation-img"
              src=""
              alt="Quotation"
            />
            <h3 className="home-section-reviews-container-review-description">
              “The team perfectly fit the specialized skill set required. They
              focused on the most essential features helping us launch the
              platform eight months faster than planned.”
            </h3>
            <h2 className="home-section-reviews-container-review-client-title">
              Kady Baker
            </h2>
            <img
              className="home-section-reviews-container-review-client-img"
              src=""
              alt="Kady Baker"
            />
          </article>
          <article className="home-section-reviews-container-review">
            <img
              className="home-section-reviews-container-review-quotation-img"
              src=""
              alt="Quotation"
            />
            <h3 className="home-section-reviews-container-review-description">
              “The team perfectly fit the specialized skill set required. They
              focused on the most essential features helping us launch the
              platform eight months faster than planned.”
            </h3>
            <h2 className="home-section-reviews-container-review-client-title">
              Kady Baker
            </h2>
            <img
              className="home-section-reviews-container-review-client-img"
              src=""
              alt="Kady Baker"
            />
          </article>
          <article className="home-section-reviews-container-review">
            <img
              className="home-section-reviews-container-review-quotation-img"
              src=""
              alt="Quotation"
            />
            <h3 className="home-section-reviews-container-review-description">
              “The team perfectly fit the specialized skill set required. They
              focused on the most essential features helping us launch the
              platform eight months faster than planned.”
            </h3>
            <h2 className="home-section-reviews-container-review-client-title">
              Kady Baker
            </h2>
            <img
              className="home-section-reviews-container-review-client-img"
              src=""
              alt="Kady Baker"
            />
          </article>
        </section>
      </article>
    )
  }

  function Contact() {
    return (
      <article className="home-section-contact">
        <h1 className="home-section-contact-title">Ready to get started?</h1>
        <button className="home-section-contact-btn">contact us</button>
      </article>
    )
  }

  function Footer() {
    return <footer className="home-section-footer">Footer Section</footer>
  }

  return (
    <section className="home-section">
      <Header />
      <Hero />
      <Description />
      <Reviews />
      <Contact />
      <Footer />
    </section>
  )
}
