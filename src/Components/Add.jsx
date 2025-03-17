import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addEmployeeApi } from '../services/allApis';
import { AddResponseContext } from '../contexts/ContextApi';

function Add() {
    const [show, setShow] = useState(false);
    const [emp, setEmp] = useState({ name: "", department: "", salary: "", phone: "" });
    const { setAddResponse } = useContext(AddResponseContext);

    const handleAdd = async () => {
        const { name, department, salary, phone } = emp;
        if (!name || !department || !salary || !phone) {
            alert("Please fill in all fields");
            return;
        }

        try {
            const result = await addEmployeeApi(emp);
            if (result.status === 200) {
                alert("Employee added successfully");
                setEmp({ name: "", department: "", salary: "", phone: "" });
                setAddResponse(result.data); // Set just the data instead of full response
                handleClose();
            } else {
                alert("Failed to add employee");
            }
        } catch (error) {
            console.error('Error adding employee:', error);
            alert("An error occurred while adding the employee");
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="mb-4">
            <button className="btn btn-success" onClick={handleShow}>
                Add Employee
            </button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            value={emp.name}
                            onChange={(e) => setEmp({ ...emp, name: e.target.value })}
                            className="form-control mb-3"
                        />
                        <input
                            type="number"
                            placeholder="Enter Salary"
                            value={emp.salary}
                            onChange={(e) => setEmp({ ...emp, salary: e.target.value })}
                            className="form-control mb-3"
                            min="0"
                        />
                        <input
                            type="tel"
                            placeholder="Enter Phone Number"
                            value={emp.phone}
                            onChange={(e) => setEmp({ ...emp, phone: e.target.value })}
                            className="form-control mb-3"
                            pattern="[0-9]{10}"
                        />
                        <select
                            value={emp.department}
                            onChange={(e) => setEmp({ ...emp, department: e.target.value })}
                            className="form-control mb-3"
                        >
                            <option value="" disabled>Select a department</option>
                            <option value="Accounts">Accounts</option>
                            <option value="IT">IT</option>
                            <option value="Business Development">Business Development</option>
                            <option value="HR">HR</option>
                        </select>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Add;