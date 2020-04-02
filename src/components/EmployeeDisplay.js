import React from 'react'

const employeeDisplay = (props) => {
    return (
        <table className="table">
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Role</th>
                <th>Salary</th>
            </tr>
            {props.employee.map(employee => (
                <tr>
                    <th scope="row">{employee.id}</th>
                    <td>{employee.name}</td>
                    <td>{employee.role}</td>
                    <td>{employee.salary}</td>
                </tr>
            ))}
        </table>
    )
}
export default employeeDisplay