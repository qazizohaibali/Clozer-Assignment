import React from "react";

import styles from "./musicCards.module.css";
import Image from "next/image";
import Link from "next/link";

export default function MusicCards({ filteredData }) {
  return (
    
      <div className={styles.musicCardsWrapper}>
        <h3>_{filteredData.title}</h3>
        <div className={styles.musicCardsSliderWrapper}>
          {filteredData?.items.map((item:any, index:number) => {
            return (
              <div key={index} className={styles.musicCard}>
                <div className={styles.musicCardContent}>
                  <div style={{ width: "30%", borderRadius: "10px" }}>
                    <img
                      src={item?.details?.CoverURL}
                      height={300}
                      width={300}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div style={{ width: "70%" }}>
                    <h2>{item?.details?.Title}</h2>
                    <h6>{item?.details?.Artists[0]}</h6>
                    <div
                      className={styles.logoContainer}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginTop: "30px",
                      }}
                    >
                      {item?.details?.Links.map((item: any) => {
                        return (
                          <Link href={item.url}>
                            <img
                              src={
                                item?.service === "SPOTIFY"
                                  ? "/images/spotify.png"
                                  : item?.service === "APPLE"
                                  ? "/images/apple.png"
                                  : item?.service === "DEEZER"
                                  ? "/images/deezer.png"
                                  : item?.service === "SOUNDCLOUD"
                                  ? "/images/soundcloud.png"
                                  : item?.service === "TIDAL"
                                  ? "/images/tidal.png"
                                  : "/images/clozer.png"
                              }
                              height={30}
                              width={30}
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


