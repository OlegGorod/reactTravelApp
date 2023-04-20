

import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './booking-modal.css';

const BookingModal = ({ setIsDisplayModal, currentCard, booking }) => {
  const { title, price, level, image, duration, description, id } = currentCard;
  const [guestValue, setGuestValue] = useState('1')
  const [date, setDate] = useState('')
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  const handleBooking = (e) => {
    e.preventDefault()
    if (date && guestValue) {
      booking(id, { date, guestValue })
      navigate('/bookings')
    }
  }

  const handleGuests = (event) => {
    const inputRegex = /^[1-9]$|^10$/;
    const inputValue = event.target.value;
    if (inputValue === '' || inputRegex.test(inputValue)) {
      return setGuestValue(inputValue);
    }
  }

  const handleDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().slice(0, 10)
  }

  return (
    <div className="modal">
      <div data-test-id="book-trip-popup" className="book-trip-popup">
        <button
          onClick={() => setIsDisplayModal(false)}
          data-test-id="book-trip-popup-close"
          className="book-trip-popup__close"
        >
          ×
        </button>
        <form className="book-trip-popup__form" autoComplete="off" onSubmit={handleBooking}
        >
          <div className="trip-info">
            <h3 data-test-id="book-trip-popup-title" className="trip-info__title">
              {title}
            </h3>
            <div className="trip-info__content">
              <span
                data-test-id="book-trip-popup-duration"
                className="trip-info__duration"
              >
                <strong>{duration}</strong> days
              </span>
              <span
                data-test-id="book-trip-popup-level"
                className="trip-info__level"
              >
                {level}
              </span>
            </div>
          </div>
          <label className="input">
            <span className="input__heading">Date</span>
            <input
              data-test-id="book-trip-popup-date"
              name="date"
              type="date"
              onChange={handleDateChange}
              required
              min={handleDate()}
            />
          </label>
          <label className="input">
            <span className="input__heading">Number of guests</span>
            <input
              data-test-id="book-trip-popup-guests"
              name="guests"
              type="number"
              min="1"
              max="10"
              required
              value={guestValue}
              onChange={handleGuests}
            />
          </label>
          <span className="book-trip-popup__total">
            Total:
            <output
              data-test-id="book-trip-popup-total-value"
              className="book-trip-popup__total-value"
            >
              {price * guestValue}$
            </output>
          </span>
          <button
            data-test-id="book-trip-popup-submit"
            className="button"
            type="submit"
          >
            Book a trip
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookingModal