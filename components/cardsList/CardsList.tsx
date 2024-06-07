import React, { useState } from "react";
import TabsSlider from "../tabs/TabsSlider";

import styles from "./cardslist.module.css";
import MusicCards from "../musicCards/MusicCards";
import GigsCards from "../gigsCards/GigsCards";
import ShowCards from "../showCards/ShowCards";
import CrewCards from "../crewCards/CrewCards";
import ShopCards from "../shopCards/ShopCards";

export default function CardsList({ data }) {
  const [selectedTab, setSelectedTab] = useState("MUSIC");

  const filterTabs = data.map(({ type, title }) => {
    return {
      type: type,
      title: title,
    };
  });

  const filteredData = data.filter(({ type }) => type === selectedTab)[0];

  console.log("setSelectedTab", selectedTab);
  console.log("FilterTabs", filterTabs);
  console.log("filteredData", filteredData);

  return (
    <div className={styles.cardsContainer}>
      <TabsSlider filterTabs={filterTabs} setSelectedTab={setSelectedTab} />
      <div className={styles.cardsList} style={{ width: "100%" }}>
        {selectedTab === "MUSIC" && <MusicCards filteredData={filteredData} />}
        {selectedTab === "EVENTS" && <GigsCards filteredData={filteredData} />}
        {selectedTab === "PODCAST" && <ShowCards filteredData={filteredData} />}
        {selectedTab === "ROSTER" && <CrewCards filteredData={filteredData}/>}
        {selectedTab === "SHOP" && <ShopCards filteredData={filteredData}/>}
      </div>
    </div>
  );
}
