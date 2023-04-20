import './booking-page.css'

const BookingPage = ({ bookedTrips, cancelBooking }) => {
    const { title, date, price, numberOfGuests } = bookedTrips
    return (
        <main className="bookings-page">
            <h1 className="visually-hidden">Travel App</h1>
            <ul className="bookings__list">
                {bookedTrips.map(item => {
                    return (
                        <li data-test-id="booking" className="booking" key={item.id}>
                            <h3 data-test-id="booking-title" className="booking__title">{item.title}</h3>
                            <span data-test-id="booking-guests" className="booking__guests">
                                2 guests
                            </span>
                            <span data-test-id="booking-date" className="booking__date">
                                {item.date}
                            </span>
                            <span data-test-id="booking-total" className="booking__total">
                                {item.price} $
                            </span>
                            <button
                                onClick={() => cancelBooking(item.id)}
                                data-test-id="booking-cancel"
                                className="booking__cancel"
                                title="Cancel booking"
                            >
                                <span className="visually-hidden">Cancel booking</span>
                                ×
                            </button>
                        </li>
                    )
                })}

            </ul>
        </main>
    )
}

export default BookingPage