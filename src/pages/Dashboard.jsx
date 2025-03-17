import React, { useState, useEffect, useContext } from 'react';
import Add from '../Components/Add';
import Edit from '../Components/Edit';
import { getEmployeeApi, deleteEmployeeApi } from '../services/allApis';
import { AddResponseContext, EditResponseContext } from '../contexts/ContextApi';

function Dashboard() {
    const [employee, setEmployee] = useState([]);
    const { addResponse } = useContext(AddResponseContext);
    const { editResponse } = useContext(EditResponseContext);

    useEffect(() => {
        getData();
    }, [addResponse, editResponse]);

    const getData = async () => {
        try {
            const result = await getEmployeeApi();
            if (result.status === 200) {
                setEmployee(result.data);
            } else {
                alert("Failed to fetch employees");
            }
        } catch (error) {
            console.error('Error fetching employees:', error);
            alert("An error occurred while fetching employees");
        }
    };

    const delEmployee = async (id) => {
        try {
            const result = await deleteEmployeeApi(id);
            if (result.status === 200) {
                getData();
            } else {
                alert("Failed to delete employee");
            }
        } catch (error) {
            console.error('Error deleting employee:', error);
            alert("An error occurred while deleting the employee");
        }
    };

    return (
        <>
            <Add />
            {employee.length > 0 ? (
                <table className="table table-border text-light bg-dark shadow mt-5">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>Phone no</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employee.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.department}</td>
                                <td>{item.salary}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <Edit emps={item} />
                                    <button 
                                        className="btn btn-outline-danger" 
                                        onClick={() => delEmployee(item._id)}
                                    >
                                        Delete <i className="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h1>No added employees</h1>
            )}
        </>
    );
}

export default Dashboard;
