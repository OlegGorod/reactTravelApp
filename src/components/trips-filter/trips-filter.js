import { Fragment, Component, useState } from 'react'

import './trips-filter.css'

const TripsFilter = ({ setSearchFilterValue, setFilterDuration, setFilterLevel }) => {

    const getSearchInput = (e) => {
        const searchInput = e.target.value;
        setSearchFilterValue(searchInput)
    }

    const getDurationFilter = (e) => {
        const durationFilter = e.target.value;
        setFilterDuration(durationFilter)
    }

    const getLevelFilter = (e) => {
        const levelFilter = e.target.value;
        setFilterLevel(levelFilter)
    }

    return (
        <>
            <section className="trips-filter">
                <h2 className="visually-hidden">Trips filter</h2>
                <form className="trips-filter__form" autoComplete="off">
                    <label className="trips-filter__search input">
                        <span className="visually-hidden">Search by name</span>
                        <input
                            data-test-id="filter-search"
                            name="search"
                            type="search"
                            placeholder="search by title"
                            onChange={getSearchInput}
                        />
                    </label>
                    <label className="select">
                        <span className="visually-hidden">Search by duration</span>
                        <select data-test-id="filter-duration" name="duration" onChange={getDurationFilter}>
                            <option value="">duration</option>
                            <option value="0_x_5">&lt; 5 days</option>
                            <option value="5_x_10">&lt; 10 days</option>
                            <option value="10_x">&ge; 10 days</option>
                        </select>
                    </label>
                    <label className="select">
                        <span className="visually-hidden">Search by level</span>
                        <select data-test-id="filter-level" name="level" onChange={getLevelFilter}>
                            <option value="">level</option>
                            <option value="easy">easy</option>
                            <option value="moderate">moderate</option>
                            <option value="difficult">difficult</option>
                        </select>
                    </label>
                </form>
            </section>
        </>
    )
}

export default TripsFilter