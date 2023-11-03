import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ListIcon from "@mui/icons-material/List";
import MapIcon from "@mui/icons-material/Map";
import TuneIcon from "@mui/icons-material/Tune";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { SvgIcon } from "@mui/material";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ onButtonClick }) {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const navigate = useNavigate();

  const changeRoute = () => {
    navigate("/");
  };

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
  };

  return (
    <List>
      <Stack direction="column" alignItems="center" gap={2}>
        <SvgIcon
          sx={{
            fontSize: "20px",
            marginTop: "30px",
            marginBottom: "20px",
            cursor: "pointer",
          }}
          onClick={changeRoute}
        >
          <BeachAccessIcon sx={{ fill: "#5DBFE6" }} />
        </SvgIcon>
      </Stack>
      {["Weather", "Cities", "Map", "Settings"].map((text, index) => (
        <ListItem
          key={text}
          sx={{ display: "flex", flexDirection: "column", marginTop: "15px" }}
          disablePadding
        >
          <ListItemIcon>
            {index === 0 ? (
              <IconButton
                sx={{
                  flexDirection: "column",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&.active": {
                    color: "#030303",
                  },
                }}
                onClick={() => {
                  handleButtonClick(index);
                  onButtonClick("weather");
                }}
                className={activeButtonIndex === index ? "active" : ""}
              >
                <WbSunnyIcon
                  sx={{
                    fill: activeButtonIndex === index ? "#030303" : "#9399A2",
                  }}
                />
                <Typography
                  variant="button"
                  sx={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {text}
                </Typography>
              </IconButton>
            ) : index === 1 ? (
              <IconButton
                sx={{
                  flexDirection: "column",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&.active": {
                    color: "#030303",
                  },
                }}
                onClick={() => {
                  handleButtonClick(index);
                  onButtonClick("cities");
                }}
                className={activeButtonIndex === index ? "active" : ""}
              >
                <ListIcon
                  sx={{
                    fill: activeButtonIndex === index ? "#030303" : "#9399A2",
                  }}
                />
                <Typography
                  variant="button"
                  sx={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {text}
                </Typography>
              </IconButton>
            ) : index === 2 ? (
              <IconButton
                sx={{
                  flexDirection: "column",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&.active": {
                    color: "#030303",
                  },
                }}
                onClick={() => {
                  handleButtonClick(index);
                  onButtonClick("map");
                }}
                className={activeButtonIndex === index ? "active" : ""}
              >
                <MapIcon
                  sx={{
                    fill: activeButtonIndex === index ? "#030303" : "#9399A2",
                  }}
                />
                <Typography
                  variant="button"
                  sx={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {text}
                </Typography>
              </IconButton>
            ) : (
              <IconButton
                sx={{
                  flexDirection: "column",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&.active": {
                    color: "#030303",
                  },
                }}
                onClick={() => {
                  handleButtonClick(index);
                  onButtonClick("settings");
                }}
                className={activeButtonIndex === index ? "active" : ""}
              >
                <TuneIcon
                  sx={{
                    fill: activeButtonIndex === index ? "#030303" : "#9399A2",
                  }}
                />
                <Typography
                  variant="button"
                  sx={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {text}
                </Typography>
              </IconButton>
            )}
          </ListItemIcon>
          <ListItemText />
        </ListItem>
      ))}
    </List>
  );
}
