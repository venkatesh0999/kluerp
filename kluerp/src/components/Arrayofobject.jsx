import React, { useState } from 'react';

const Arrayofobjects = () => {
  const [emp, setEmp] = useState([
    { eid: "123", ename: "Shreeram", esalary: "4000" },
    { eid: "456", ename: "Hanuman", esalary: "3200" },
    { eid: "234", ename: "Lakshman", esalary: "4000" },
    { eid: "345", ename: "Seetha", esalary: "6000" },
    { eid: "567", ename: "Garuda", esalary: "9000" },
  ]);

  const [newEmp, setNewEmp] = useState({ eid: "", ename: "", esalary: "" });
  const [deleteId, setDeleteId] = useState(""); // state for delete by ID

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmp((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add new employee
  const handleAdd = () => {
    if (newEmp.eid && newEmp.ename && newEmp.esalary) {
      setEmp((prev) => [...prev, newEmp]);
      setNewEmp({ eid: "", ename: "", esalary: "" }); // clear inputs
    } else {
      alert("Please fill all fields.");
    }
  };

  // Delete employee by ID
  const handleDeleteById = () => {
    const updatedEmp = emp.filter((e) => e.eid !== deleteId);
    if (updatedEmp.length === emp.length) {
      alert("ID not found!");
    } else {
      setEmp(updatedEmp);
      setDeleteId(""); // clear input
    }
  };

  return (
    <div>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>id</th>
            <th>ename</th>
            <th>esalary</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((element, index) => (
            <tr key={index}>
              <td>{element.eid}</td>
              <td>{element.ename}</td>
              <td>{element.esalary}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add New Employee</h3>
      <input
        type="text"
        name="eid"
        placeholder="ID"
        value={newEmp.eid}
        onChange={handleChange}
      />
      <input
        type="text"
        name="ename"
        placeholder="Name"
        value={newEmp.ename}
        onChange={handleChange}
      />
      <input
        type="text"
        name="esalary"
        placeholder="Salary"
        value={newEmp.esalary}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add Employee</button>

      <h3>Delete Employee by ID</h3>
      <input
        type="text"
        placeholder="Enter ID to delete"
        value={deleteId}
        onChange={(e) => setDeleteId(e.target.value)}
      />
      <button onClick={handleDeleteById}>Delete</button>
    </div>
  );
};

export default Arrayofobjects;
