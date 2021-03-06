import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
// createContext() makes an object with properties
export const EmployeeContext = createContext();

// This component establishes what data can be used.
export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_expand=location")
        .then(res => res.json())
        .then(setEmployees);
    };

    const addEmployee = employeeObj => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(getEmployees);
    };

    // Subcomponent that renders a subset of itself called a Provider
    // Provider = Interface that other components can use in order to gain access
    // to what the provider holds.
    return (
        <EmployeeContext.Provider value={{employees, getEmployees, addEmployee}}>
            {props.children}
        </EmployeeContext.Provider>
    );
};