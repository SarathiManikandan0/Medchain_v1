import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./HospitalDashboard.module.scss";
import { Web3Context } from "../../context/Web3Context";
import { ReactComponent as EmptyState } from "../../libs/icons/empty_state.svg";
import patientsImage from "../../libs/icons/patients.png";
import doctorsImage from "../../libs/icons/doctors.jpg";

const HospitalDashboard = () => {
  const [isCreateModal, setIsCreateModal] = useState(false);
  const { user } = useContext(Web3Context);
  const navigate = useNavigate();

  useEffect(() => {
    // Your existing useEffect logic here

    // Additional logic for navigating when the "Patients" card is clicked
    const patientsCard = document.querySelector("#patientsCard");

    const handlePatientsCardClick = () => {
      navigate("/patients"); // Navigate to the "/patients" route
    };

    // Add a click event listener to the "Patients" card
    patientsCard.addEventListener("click", handlePatientsCardClick);

    // Cleanup function
    return () => {
      patientsCard.removeEventListener("click", handlePatientsCardClick);
    };
  }, [navigate]);

  useEffect(() => {
    // Additional logic for navigating when the "Doctors" card is clicked
    const doctorsCard = document.querySelector("#doctorsCard");

    const handleDoctorsCardClick = () => {
      navigate("/doctors"); // Navigate to the "/doctors" route
    };

    // Add a click event listener to the "Doctors" card
    doctorsCard.addEventListener("click", handleDoctorsCardClick);

    // Cleanup function
    return () => {
      doctorsCard.removeEventListener("click", handleDoctorsCardClick);
    };
  }, [navigate]);

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <p className={styles.title}>
          <p>Hospital Dashboard</p>
        </p>
        <SearchBar />
      </div>

      <div className={styles.cards}>
        <Card title="PATIENTS" id="patientsCard"  imageUrl={patientsImage} />
        <Card title="DOCTORS" id="doctorsCard"  imageUrl={doctorsImage}/>
      </div>
    </div>
  );
};
const Card = ({ title, id, imageUrl }) => {
  return (
    <div className={styles.card} id={id}>
      <div className={styles.cardHeader}>
        <p>{title}</p>
      </div>
      <div className={styles.cardBody}>
        <EmptyState />
        {/* Only render the image without additional text */}
        <img
          src={imageUrl}
          alt={title}
          className={styles.cardImage}
          onError={(e) => {
            console.error(`Error loading image: ${imageUrl}`, e);
          }}
        />
      </div>
    </div>
  );
};



export default HospitalDashboard;
