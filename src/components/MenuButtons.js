import React from "react";
import "./MenuButton.css";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AppsIcon from "@mui/icons-material/Apps";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import BarChartIcon from "@mui/icons-material/BarChart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MenuButtons = () => {
  return (
    <div className="btns">
      <div class="c">
        <div class="dd">
          <div class="dd-a">
            <div className="menu_icon">
              <HomeIcon />
            </div>
            <span className="menu_heading">Dashboard</span>
          </div>
          <input type="checkbox"></input>
          <div class="dd-c">
            <ul>
              <li>
                <a href="#">
                  <span>Classic</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Minimal</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="button-2 button">
        <div className="menu_icon">
          <AutoStoriesIcon />
        </div>
        <h3>Pages</h3>
        <KeyboardArrowDownIcon />
      </div>
      <div className="button-3 button">
        <div className="menu_icon">
          <AppsIcon />
        </div>
        <h3>Applications</h3>
        <KeyboardArrowDownIcon />
      </div>
      <div className="button-4 button">
        <div className="menu_icon">
          <ColorLensIcon />
        </div>
        <h3>UI Component</h3>
        <KeyboardArrowDownIcon />
      </div>
      <div className="button-5 button">
        <div className="menu_icon">
          <ColorLensIcon />
        </div>
        <h3>Widgets</h3>
        <KeyboardArrowDownIcon />
      </div>
      <div className="button-6 button">
        <div className="menu_icon">
          <PermIdentityIcon />
        </div>
        <h3>Forms</h3>
        <KeyboardArrowDownIcon />
      </div>
      <div className="button-7 button">
        <div className="menu_icon">
          <BarChartIcon />
        </div>
        <h3>Charts</h3>
        <KeyboardArrowDownIcon />
      </div>
    </div>
  );
};

export default MenuButtons;
