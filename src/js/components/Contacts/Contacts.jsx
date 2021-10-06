import React from 'react';

export const Contacts = () => {

  return (
    <div className="contacts">
      <div className="contacts__content">

        <h2 className="contacts__title">Contact Us</h2>

        <div className="contacts__section">

          <div className="contactInfo">
            <div className="contactInfo__content contactInfo__info--phoneEmail">
              <div className="contactPart phone">
                <p className="contactPart__title">Phone</p>
                <a
                  href="tel: +123 333 66 77"
                  className="contactPart__info"
                >
                  +0123 333 6677
                </a>
              </div>
              <div className="contactPart email">
                <p className="contactPart__title">Email</p>
                <a
                  href="mailto: request@ere.com"
                  className="contactPart__info"
                >
                  request@ere.com
                </a>
              </div>

            </div>

            <div className="contactInfo__content contactInfo__info--address">
              <div className="contactPart address">
                <p className="contactPart__title">Address</p>
                <p className="contactPart__info">
                  160&nbsp;Central&nbsp;Park&nbsp;South, 
                  New&nbsp;York, NY&nbsp;10019
                </p>
              </div>
            </div>
          </div>

          <form
            className="contactForm"
            method="POST"
            action="./"
          >
            <input 
              type="text"
              name="name"
              placeholder="Name"
              className="contactForm__field contactForm__field--name"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="contactForm__field contactForm__field--email"
            />
            <textarea
              placeholder="Message"
              className="contactForm__field contactForm__field--textarea"
            />
            <button
              type="button"
              className="contactForm__field contactForm__field--btn"
            >
              Consultation
            </button>
          </form>

        </div>

      </div>
    </div>
  )
}
