import "./src/index.css";
import Index from "./src/routes/index";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { SvgIcon } from "@mui/material";

function Home() {
  return (
    <div className="container">
      <div className="left">
        <div className="breeze">
          <SvgIcon sx={{ fontSize: "400px", marginRight: "10px" }}>
            <BeachAccessIcon sx={{ fill: "#5DBFE6" }} />
          </SvgIcon>
        </div>
      </div>
      <div className="right">
        <Index />
      </div>
    </div>
  );
}

export default Home;
