// Doctors.jsx
import React, { useState, useEffect } from 'react';
import styles from "./Doctors.module.scss";
import SearchBar from "../../SearchBar/SearchBar";

const Doctors = () => {
    const [doctors, setDoctors] = useState([
        { id: 1, name: 'Dr. John Smith', qualification: 'MD', speciality: 'Cardiology' },
        { id: 2, name: 'Dr. Jane Doe', qualification: 'DDS', speciality: 'Dentistry' },
        { id: 3, name: 'Dr. Michael Johnson', qualification: 'PhD', speciality: 'Psychiatry' },
        { id: 4, name: 'Dr. Emily White', qualification: 'DO', speciality: 'Orthopedics' },
        { id: 5, name: 'Dr. Robert Miller', qualification: 'MBBS', speciality: 'Internal Medicine' },
        { id: 6, name: 'Dr. Susan Davis', qualification: 'DVM', speciality: 'Veterinary Medicine' },
        { id: 7, name: 'Dr. Andrew Wilson', qualification: 'MS', speciality: 'Neurology' },
        { id: 8, name: 'Dr. Olivia Taylor', qualification: 'MD', speciality: 'Pediatrics' },
        { id: 9, name: 'Dr. William Brown', qualification: 'DMD', speciality: 'Dentistry' },
        { id: 10, name: 'Dr. Jessica Martinez', qualification: 'PhD', speciality: 'Oncology' },
        { id: 11, name: 'Dr. Richard Anderson', qualification: 'DO', speciality: 'Cardiology' },
        { id: 12, name: 'Dr. Linda Harris', qualification: 'MBBS', speciality: 'Family Medicine' },
        { id: 13, name: 'Dr. Charles Clark', qualification: 'MD', speciality: 'Pulmonology' },
        { id: 14, name: 'Dr. Maria Rodriguez', qualification: 'DDS', speciality: 'Dentistry' },
        { id: 15, name: 'Dr. Thomas Turner', qualification: 'MD', speciality: 'Dermatology' },
        { id: 16, name: 'Dr. Jennifer Lee', qualification: 'MS', speciality: 'Ophthalmology' },
        { id: 17, name: 'Dr. Kevin Garcia', qualification: 'PhD', speciality: 'Endocrinology' },
        { id: 18, name: 'Dr. Michelle Allen', qualification: 'MD', speciality: 'Gastroenterology' },
        { id: 19, name: 'Dr. Daniel Smith', qualification: 'DDS', speciality: 'Dentistry' },
        { id: 20, name: 'Dr. Laura Davis', qualification: 'DO', speciality: 'Rheumatology' },
        // Add more doctor data as needed
      ]);
      
      

  const [searchQuery, setSearchQuery] = useState('');
  const [isAddDoctorModalOpen, setAddDoctorModalOpen] = useState(false);

  const openAddDoctorModal = () => {
    setAddDoctorModalOpen(true);
  };

  useEffect(() => {
    // Fetch doctors data or use your data source
    // For example:
    // const data = fetchData();
    // setDoctors(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.doctorsContainer}>
      <div className={styles.leftColumn}>
        <h1>Doctors List</h1>
        <SearchBar setSearchQuery={setSearchQuery} />
        <ul className={styles.doctorsList}>
          {filteredDoctors.map((doctor) => (
            <li key={doctor.id} className={styles.doctorItem}>
              {doctor.name} - {doctor.qualification} - {doctor.speciality}
            </li>
            // Add more doctor details as needed
          ))}
        </ul>
      </div>
      <div className={styles.rightColumn}>
        <hr className={styles.line} />
        <h1>Add Doctor</h1>
        {/* Doctor Form */}
        <form className={styles.doctorForm}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="walletAddress">Wallet Address:</label>
          <input type="text" id="walletAddress" name="walletAddress" />

          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" />

          <label htmlFor="qualification">Qualification:</label>
          <input type="text" id="qualification" name="qualification" />

          <label htmlFor="speciality">Speciality:</label>
          <input type="text" id="speciality" name="speciality" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <button type="button" className={styles.addButton} onClick={openAddDoctorModal}>
            Add Doctor
          </button>
        </form>
      </div>
      {/* Add Doctor Modal or Form */}
      {isAddDoctorModalOpen && (
        <div className={styles.addDoctorModal}>
          {/* Your form or modal content for adding a new doctor */}
          {/* You can use state and form elements to capture doctor details */}
          {/* Close the modal or form when the doctor is added */}
          <button onClick={() => setAddDoctorModalOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Doctors;
