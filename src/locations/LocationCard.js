import React from "react";
import "./Location.css";

export const LocationCard = ({location}) => (
    <section className="location">
        <div className="location__address">{location.address}</div>
    </section>
);