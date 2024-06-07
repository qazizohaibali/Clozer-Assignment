import React from "react";

import styles from "./crewcard.module.css";
import { Button } from "@mui/material";
import Link from "next/link";

export default function CrewCards({ filteredData }) {
  console.log("objectsadasss", filteredData.items);
  //   var item = filteredData.items;
  return (
    <div className={styles.crewCardMainContainer} style={{ color: "white",marginBottom:"100px" }}>
      <h3>_{filteredData.title}</h3>
      <div className={styles.crewCardWrapper}>
        {filteredData?.items?.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className={styles.crewcard}
              style={{
                position: "relative",
                maxWidth: "400px",
                width: "100%",
                color: "white",
              }}
            >
              <img
                src={item.details.image_url}
                height={100}
                width={100}
                alt=""
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div className={styles.crewCardContent}>
                <div className={styles.crewCardContentBackDrop}>
                  <h3>{item.details.name}</h3>
                  {index === 1 ? (
                    <p>
                      "Soulful singer crafting melodies that resonate with the
                      heart."
                    </p>
                  ) : (
                    <p>
                      "Captivating vocalist bringing emotion to every note
                      sung."
                    </p>
                  )}
                  <div
                    className={styles.logoContainer}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginTop: "30px",
                      justifyContent: "center",
                    }}
                  >
                    {item?.details?.links.map((item: any) => {
                      return (
                        <Link href={item.url}>
                          <img
                            src={
                              item?.service === "SPOTIFY"
                                ? "/images/spotify.png"
                                : item?.service === "FACEBOOK"
                                ? "/images/facebook.png"
                                : item?.service === "DEEZER"
                                ? "/images/deezer.png"
                                : item?.service === "INSTAGRAM"
                                ? "/images/instagram.png"
                                : item?.name === "Her Store"
                                ? "/images/google.png"
                                : "/images/clozer.png"
                            }
                            height={25}
                            width={25}
                            alt="asdas"
                          />
                        </Link>
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
