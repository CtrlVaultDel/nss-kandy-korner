import React from "react";

export const EmployeeCard = ({employee}) => (
    <section className="employee">
        <div className="employee__name">{employee.name}</div>
        <div className="employee__location">Work Address: {employee.location?.address}</div>
        <div className="employee__manager">Manager? {employee.manager ? "Yes" : "No"}</div>
        <div className="employee__fullTime">Full Time? {employee.fullTime ? "Yes" : "No"}</div>
        <div className="employee__hourlyRate">Rate: ${employee.hourlyRate}/hr</div>
    </section>
);