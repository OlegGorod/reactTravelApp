
import tripsListData from "../../helpers/trips.json";
import Trips from "../trips/trips";
import Header from "../header/header";
import Footer from "../footer/footer";

import './app.css';
import { useEffect, useState } from "react";
import TripPage from "../trip-page/trip-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingPage from "../booking-page/booking-page";
import SignIn from "../sign-in/sign-in";
import SignUp from "../sign-up/sign-up";

const App = () => {
    
    const [tripsList,] = useState(tripsListData)
    const [bookedTrips, setBookedTrips] = useState([])
    const booking = (tripId, { date, numberOfGuests }) => {
        const bookedId = tripsList.find(item => item.id === tripId)
        setBookedTrips([...bookedTrips, { ...bookedId, date, numberOfGuests }])
    }
    const cancelBooking = (id) => {
        const newBookedTrips = bookedTrips.filter(item => item.id !== id);
        setBookedTrips(newBookedTrips)
    }

    bookedTrips.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))

    return (
        <div className="app">
            <Router>
                <Header />
                <main className="page-container">
                    <Routes>
                        <Route path="/bookings" element={<BookingPage
                            bookedTrips={bookedTrips}
                            cancelBooking={cancelBooking} />} />
                        <Route path="/" element={<Trips tripsList={tripsList} />} />
                        <Route path="/trip/:id" element={<TripPage
                            bookedTrips={bookedTrips}
                            booking={booking}
                            tripsList={tripsList} />} />
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        
                    </Routes>
                    <Footer />
                </main>
            </Router>
        </div>
    );
}

export default App;