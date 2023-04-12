import React from 'react'

export default function Journal(props) {
    return (
        <section className="journal">
            <img src={props.imageUrl} className="journal-img" alt={`A Picture of ${props.title}`} />
            <div className="journal-content">
                <i className="fa-solid fa-location-dot location-icon"></i>
                <span className="journal-location">{props.location}</span>
                <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                <h2>{props.title}</h2>
                <p className="journal-date">{`${props.startDate} - ${props.endDate}`}</p>
                <p className="journal-description">{props.description}</p>
            </div>
        </section>
    )
}