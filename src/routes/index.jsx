import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { SvgIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  const changeRoute = () => {
    navigate("/current");
  };

  return (
    <div className="breeze">
      <SvgIcon
        sx={{ fontSize: "48px", marginRight: "10px", marginTop: "80px" }}
      >
        <BeachAccessIcon sx={{ fill: "#5DBFE6" }} />
      </SvgIcon>
      <div className="breezetext">
        <Typography variant="h3" component="h3" sx={{ color: "#202B3B" }}>
          Breeze
        </Typography>
        <Typography variant="caption" sx={{ marginLeft: "40px" }}>
          Weather App
        </Typography>
      </div>
      <Stack spacing={2} mt={4} direction="row">
        <Button
          variant="contained"
          sx={{ background: "#0095FF", borderRadius: "10px" }}
          onClick={changeRoute}
        >
          Get Started
        </Button>
      </Stack>
    </div>
  );
}
