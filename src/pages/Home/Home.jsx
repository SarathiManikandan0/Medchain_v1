import React from "react";
import MedChainImg from "../../libs/icons/hospital.jpg";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.left}>
        <img src={MedChainImg} alt="hospital.jpg" />
      </div>
      <div className={styles.right}>
        <h2>Welcome to the MedChain</h2>
        <p>
        Experience the future of healthcare at our blockchain-powered platform. Seamlessly connecting patients and doctors, our user-friendly interface ensures secure and transparent health records. It's the ultimate solution for efficient healthcare management, providing users with a revolutionary experience in a secure and accessible environment. Welcome to the next era of well-being and streamlined healthcare services.
        </p>
      </div>
    </div>
  );
};

export default Home;
