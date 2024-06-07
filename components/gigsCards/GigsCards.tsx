import React from "react";
import styles from "./gigsCards.module.css";
import { Button, ButtonProps, Chip } from "@mui/material";
import Link from "next/link";
import styled from "@emotion/styled";
export default function GigsCards({ filteredData }) {
  console.log("GIGs", filteredData);
  console.log("DATE", filteredData.created_at);
  var time = filteredData.created_at;
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


  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "white",
    opacity:0.6,
    backgroundColor: "#3c4043",
    '&:hover': {
      backgroundColor: "#343333",
    },
    borderRadius:"50px"
  }));

  return (
    <div className={styles.gigsCardsWrapper}>
      <h3>_{filteredData?.title}</h3>
      <div>
        {filteredData?.items.map((item, index) => {
          const dateObject = getDateObject(item.details.event_date);
          return (
            <div
              key={index}
              className={styles.gigsCardsContainer}
              style={{ alignItems: index % 2 === 0 ? "end" : "start" }}
            >
              <div
                className={styles.gigCard}
                style={{
                  flexDirection: index % 2 === 0 ? "row-reverse" : "row",
                }}
              >
                <div className={styles.gigCardImage}>
                  <img
                    src="/images/date-square.svg"
                    // style={{ flexDirection: index % 2 === 0 ? 'row-reverse' : 'row' }}
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "0",
                      width: "110px",
                      height: "120px",
                      rotate: index % 2 === 0 ? "180deg" : "0deg",
                    }}
                    alt=""
                  />
                  <div style={{ width: index % 2 === 0 ? "110px" : "" }}>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        opacity: 0.6,
                      }}
                    >
                      {dateObject.month}
                    </p>
                    <p
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        margin: "5px 0px",
                      }}
                    >
                      {dateObject.day}
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        opacity: 0.6,
                      }}
                    >
                      {dateObject.year}
                    </p>
                  </div>
                </div>
                <div className={styles.gigCardContent}>
                  <h5>{item.details.event_name}</h5>
                  <p>{item.details.location.venue_formatted_address}</p>
                  <div className={styles.buttondiv}>{item.details.links.map((item) => {
                    return (
                      <ColorButton  variant="text" href={item.url}>{item.name}</ColorButton>
                    );
                  })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
