import React, { useState } from "react";

import styles from "./shopcard.module.css";

import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
export default function ShopCards({ filteredData }) {
    const [favStatus, setFavStatus] = useState(filteredData.items.map(() => false));

    const handleFavClick = (index) => {
      const updatedFavStatus = [...favStatus];
      updatedFavStatus[index] = !updatedFavStatus[index];
      setFavStatus(updatedFavStatus);
    };

//   const favHandler = () => {
//     !fav ? setFav(true) : setFav(false);
//   };

  console.log("objecttt", filteredData);
  return (
    <div className={styles.shopCardsWrapper}>
      <h3>_{filteredData.title}</h3>
      <div className={styles.shopCardsContainer}>
        {filteredData.items.map((item,index) => {
          return (
            <div key={index} className={styles.shopCard}>
              <img src={item?.details?.image_url} alt="" />
              <div className={styles.shopCardContent}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 0px",
                    justifyContent: "space-between",
                  }}
                >   
                  <h3>{item?.details?.title}</h3>
                 
                  <h6>{item?.details?.price}</h6>
                </div>
                <div className={styles.shopcardbtns}>
                  <button className="">ADD TO CART</button>
                  <button onClick={() => handleFavClick(index)}>
                    {favStatus[index] ? <FaHeart color="black" size={30} /> : <FaRegHeart size={30} />}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
