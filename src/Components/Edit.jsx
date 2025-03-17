import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateEmployeeApi } from '../services/allApis';
import { EditResponseContext } from '../contexts/ContextApi';

function Edit({ emps }) {
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState({
        name: emps.name,
        department: emps.department,
        salary: emps.salary,
        phone: emps.phone
    });

    const { setEditResponse } = useContext(EditResponseContext);

    const handleEdit = async () => {
      
        try {
            const result = await updateEmployeeApi(emps._id, edit);
            if (result.status === 200) {
                alert("Employee updated successfully");
                setEditResponse(result.data);
                handleClose();
            } else {
                alert("Failed to update employee");
            }
        } catch (error) {
            console.error('Error updating employee:', error);
            alert("An error occurred while updating the employee");
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="btn btn-outline-warning mx-3" onClick={handleShow}>
                Edit <i className="fa-solid fa-user-pen"></i>
            </button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            value={edit.name}
                            onChange={(e) => setEdit({ ...edit, name: e.target.value })}
                            className="form-control mb-3"
                        />
                        <input
                            type="number"
                            placeholder="Enter Salary"
                            value={edit.salary}
                            onChange={(e) => setEdit({ ...edit, salary: e.target.value })}
                            className="form-control mb-3"
                            min="0"
                        />
                        <input
                            type="tel"
                            placeholder="Enter Phone Number"
                            value={edit.phone}
                            onChange={(e) => setEdit({ ...edit, phone: e.target.value })}
                            className="form-control mb-3"
                            pattern="[0-9]{10}"
                        />
                        <select
                            value={edit.department}
                            onChange={(e) => setEdit({ ...edit, department: e.target.value })}
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
                    <Button variant="primary" onClick={handleEdit}>
                        Edit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Edit;
