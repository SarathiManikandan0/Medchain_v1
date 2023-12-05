// Patients.jsx
import React, { useState, useEffect } from 'react';
import styles from "./Patients.module.scss";
import SearchBar from "../../SearchBar/SearchBar"; // Adjust the import path as needed

const Patients = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'alex' },
    { id: 4, name: 'rani' },
    { id: 5, name: 'rohan' },
    { id: 6, name: 'logan' },
    { id: 7, name: 'sathish' },
    { id: 8, name: 'max' },
    { id: 9, name: 'alexander' },
    { id: 10, name: 'janani' },
    { id: 11, name: 'pandey' },
    { id: 12, name: 'raji' },
    { id: 13, name: 'lokesh' },
    { id: 14, name: 'ram' },
    // Add more patient data as needed
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [isAddPatientModalOpen, setAddPatientModalOpen] = useState(false);

  const openAddPatientModal = () => {
    setAddPatientModalOpen(true);
  };

  useEffect(() => {
    // Fetch patients data or use your data source
    // For example:
    // const data = fetchData();
    // setPatients(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.patientsContainer}>
      <div className={styles.leftColumn}>
        <h1>Patients History</h1>
        <SearchBar setSearchQuery={setSearchQuery} />
        <ul className={styles.patientsList}>
          {filteredPatients.map((patient) => (
            <li key={patient.id} className={styles.patientItem}>
              {patient.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.rightColumn}>
        <hr className={styles.line} />
        <h1>Add Patient</h1>
        {/* Patient Form */}
        <form className={styles.patientForm}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="walletAddress">Wallet Address:</label>
          <input type="text" id="walletAddress" name="walletAddress" />

          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" />

          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" />

          <label htmlFor="bloodGroup">Blood Group:</label>
          <input type="text" id="bloodGroup" name="bloodGroup" />

          <button type="button" className={styles.addButton} onClick={openAddPatientModal}>
            Add Patient
          </button>
        </form>
      </div>
      {/* Add Patient Modal or Form */}
      {isAddPatientModalOpen && (
        <div className={styles.addPatientModal}>
          {/* Your form or modal content for adding a new patient */}
          {/* You can use state and form elements to capture patient details */}
          {/* Close the modal or form when the patient is added */}
          <button onClick={() => setAddPatientModalOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Patients;
