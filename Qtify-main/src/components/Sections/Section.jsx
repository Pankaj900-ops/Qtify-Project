import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import Carousal from "../Carousal/Carousal";

const Section = ({ title, data = [], type }) => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <button className={styles.toggleBtn} onClick={handleToggle}>
          {showAll ? "Collapse All" : "Show All"}
        </button>
      </div>

      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {showAll ? (
            <div className={styles.wrapper}>
              {data.map((item) => (
                <Card key={item.id} data={item} type={type} />
              ))}
            </div>
          ) : (
            <Carousal
              data={data}
              renderCardComponent={(item) => (
                <Card key={item.id} data={item} type={type} />
              )}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
