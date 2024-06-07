import React from "react";
import styles from "./showcards.module.css";
import { Button } from "@mui/material";
export default function ShowCards({ filteredData }) {
  console.log("Show Cards", filteredData);
  const getDateObject = (ms) => {
    const date = new Date(ms);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return {
      day: date.getDate(),
      month: months[date.getMonth()],
      year: date.getFullYear(),
    };
  };

  return (
    <div className={styles.ShowCardsWrapper}>
      <h3>_{filteredData.title}</h3>
      <div className={styles.ShowCardsContainer}>
        {filteredData?.items.map((item: any, index: number) => {
          const dateObject = getDateObject(item.created_at);
          return (
            <div className={styles.showcard} style={{ color: "white" }}>
              <div className={styles.showCardImage} style={{ maxWidth: "145px", maxHeight: "145px" }}>
              <img
                src={item.details.image_url}
                alt=""
                style={{ width:"100%",height:"100%" , objectFit:"cover"}}
              />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                  width: "100%",
                }}
              >
                <div className={styles.shopCardContent}>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      // opacity: 0.6,

                      color:'green',
                      
                      
                    }}
                  >
                    {dateObject.month} {dateObject.day}, {dateObject.year}
                  </p>
                  <h4>{item.details.artists[0]}</h4>
                  <h6>{item.details.title}</h6>
                   <Button variant="outlined" color="success" href={item.details.links[0].url}>Play on Spotify</Button>  

                </div>
               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
