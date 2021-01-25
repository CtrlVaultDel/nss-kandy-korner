import React from "react";

export const LocationCard = ({location}) => (
    <section className="location">
        <div className="location__address">{location.address}</div>
        <div className="location__sqft">Square Footage: {location.sqft}</div>
        <div className="location__handicap">Handicap Accessible:{location.handicap ? "Yes" : "No"}</div>
    </section>
);