

import { useEffect, useState } from 'react';
import TripsFilter from '../trips-filter/trips-filter';
import TripsItem from '../trips-item/trips-item';
import './trips.css'

const Trips = ({ tripsList }) => {
    const [arrayOfTrips,] = useState(tripsList);
    const [filteredArrayOfTrips, setFilteredArrayOftrips] = useState(tripsList);
    const [searchFilterValue, setSearchFilterValue] = useState('');
    const [filterDuration, setFilterDuration] = useState('');
    const [filterLevel, setFilterLevel] = useState('');

    const filterTrips = (trip) => {
        let isMatched = true;

        if (searchFilterValue) {
            isMatched = trip.title.toLowerCase().includes(searchFilterValue.toLowerCase().trim());
        }

        if (filterDuration) {
            switch (filterDuration) {
                case '0_x_5':
                    isMatched = isMatched && trip.duration < 5;
                    break;
                case '5_x_10':
                    isMatched = isMatched && trip.duration < 10;
                    break;
                case '10_x':
                    isMatched = isMatched && trip.duration >= 10;
                    break;
                default:
                    break;
            }
        }

        if (filterLevel) {
            isMatched = isMatched && trip.level === filterLevel;
        }

        return isMatched;
    }

    const filteredTrips = arrayOfTrips.filter(item => filterTrips(item))


    useEffect(() => {
        setFilteredArrayOftrips(filteredTrips)

    }, [searchFilterValue, filterDuration, filterLevel])



    return (
        <>
            <TripsFilter
                setSearchFilterValue={setSearchFilterValue}
                setFilterDuration={setFilterDuration}
                setFilterLevel={setFilterLevel} />
            <section className="trips">
                <h2 className="visually-hidden">Trips List</h2>
                <ul className="trip-list">
                    {filteredArrayOfTrips.map(item => {
                        return (
                            <TripsItem
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                level={item.level}
                                image={item.image}
                                days={item.duration}
                                id={item.id}
                            />
                        )
                    })}
                </ul>
            </section>
        </>
    )

}

export default Trips