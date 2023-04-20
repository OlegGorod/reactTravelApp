

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import BookingModal from '../booking-modal/booking-modal';
import './trip-page.css'

const TripPage = ({ tripsList, booking, bookedTrips }) => {
    const navigate = useNavigate();
    const [isDisplayModal, setIsDisplayModal] = useState(false)
    const { id } = useParams();
    const currentCard = tripsList.find(item => item.id === id)
    const { title, price, level, image, duration, description } = currentCard;
    const isAlreadyBooked = bookedTrips.find(item => item.id === id)
    return (

        <>
            <main className="trip-page">
                <h1 className="visually-hidden">Travel App</h1>
                <div className="trip">
                    <img
                        data-test-id="trip-details-image"
                        src={image}
                        className="trip__img"
                        alt="trip image"
                    />
                    <div className="trip__content">
                        <div className="trip-info">
                            <h3 data-test-id="trip-details-title" className="trip-info__title">
                                {title}
                            </h3>
                            <div className="trip-info__content">
                                <span
                                    data-test-id="trip-details-duration"
                                    className="trip-info__duration"
                                >
                                    <strong>{duration}</strong> days
                                </span>
                                <span data-test-id="trip-details-level" className="trip-info__level">
                                    {level}
                                </span>
                            </div>
                        </div>
                        <div
                            data-test-id="trip-details-description"
                            className="trip__description"
                        >
                            {description}
                        </div>
                        <div className="trip-price">
                            <span>Price</span>
                            <strong
                                data-test-id="trip-details-price-value"
                                className="trip-price__value"
                            >
                                {price} $
                            </strong>
                        </div>
                        {isAlreadyBooked ?
                            <button
                                onClick={() => navigate('/bookings')}
                                data-test-id="trip-details-button"
                                className="trip__button button"
                            >
                                Already booked
                            </button> :
                            <button
                                onClick={() => setIsDisplayModal(!isDisplayModal)}
                                data-test-id="trip-details-button"
                                className="trip__button button"
                            >
                                Book a trip
                            </button>
                        }

                    </div>
                </div>
            </main>
            {isDisplayModal ? <BookingModal
                booking={booking}
                setIsDisplayModal={setIsDisplayModal}
                currentCard={currentCard} /> : null}

        </>

    )
}

export default TripPage