import React, { useContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { LocationContext } from "../locations/LocationProvider.js";
import { EmployeeContext } from "./EmployeeProvider.js";
import "./Employee.css";

export const EmployeeForm = () => {
    const { addEmployee } = useContext(EmployeeContext);
    const { locations, getLocations } = useContext(LocationContext);

    const [employee, setEmployee] = useState({
        name: "",
        locationId: 0,
        manager: null,
        fullTime: null,
        hourlyRate: 0
    });

    const history = useHistory();

    useEffect(getLocations,[]);

    const handleControlledInputChange = (event) => {
        const newEmployee = {...employee};
        newEmployee[event.target.id] = event.target.value;
        setEmployee(newEmployee);
    };

    const handleClickSaveEmployee = (event) => {
        event.preventDefault()
        const locationId = parseInt(employee.locationId);

        if(employee.name === "" || locationId === 0 || employee.manager === null || employee.fullTime === null || employee.hourlyRate === 0){
            window.alert("Please fill out all information about the employee")
        } else {
            addEmployee(employee)
            .then(() => history.push("/employees"));
        };
    };

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue={employee.locationId} name="locationId" onChange={handleControlledInputChange} id="locationId" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.address}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager or Staff? </label>
                    <select defaultValue={employee.manager} name="manager" onChange={handleControlledInputChange} id="manager" className="form-control" >
                        <option value="0">Position?</option>
                            <option key={1} value={true}>
                                Manager
                            </option>
                            <option key={2} value={false}>
                                Staff
                            </option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">FullTime or PartTime? </label>
                    <select defaultValue={employee.fullTime} name="fullTime" onChange={handleControlledInputChange} id="fullTime" className="form-control" >
                        <option value="0">Work Classification</option>
                            <option key={1} value={true}>
                                Full Time
                            </option>
                            <option key={2} value={false}>
                                Part Time
                            </option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate:</label>
                    <input type="number" id="hourlyRate" onChange={handleControlledInputChange} required className="form-control" placeholder="Hourly Rate" value={employee.hourlyRate}/>
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={handleClickSaveEmployee}>
                Hire Employee
            </button>
        </form>
    );
};