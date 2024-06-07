import React, { useState } from "react";
import TabsSlider from "../tabs/TabsSlider";

import styles from "./cardslist.module.css";

export default function CardsList({ data }) {
  
  const [selectedTab,setSelectedTab] = useState("MUSIC")

  const filterTabs = data.map(({ type, title }) => {
    return {
      type: type,
      title: title,
    };
  });



  console.log("setSelectedTab", selectedTab);
  console.log("FilterTabs", filterTabs);
  return (
    <div className={styles.cardsContainer}>
      <TabsSlider filterTabs={filterTabs}  setSelectedTab={setSelectedTab} />
        
    </div>
  );
}
