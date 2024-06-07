import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
export default function TabsSlider({ filterTabs, setSelectedTab }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  console.log("asdasd filterTabs", filterTabs);
  return (
    <Box
      sx={{
        maxWidth: { xs: 290, sm: 480, lg: 700 },
        mt: "50px",
        padding: "10px 0px",
        bgcolor: "transparent",
        color: "white",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#fff",
          },
        }}
        style={{ color: "white" }}
      >
        {filterTabs.map((item: any) => {
          return (
            <Tab
              color="white"
              onClick={() => setSelectedTab(item.type)}
              style={{ color: "white" }}
              label={item.title}
            />
          );
        })}
      </Tabs>
    </Box>
  );
}
