import React from "react";
import "./nav1.css"
const Nav1 = () => {
  return (
    <div className="navOne">
      <div className="left-content">
        <div className="patient-image">
          <img src="./images/icons8-user-50.png" alt="" />
        </div>
        <div className="patient-list">
          <span>Patient List</span>
        </div>
        <div className="list">
          <span>List</span>
        </div>
        <div className="thumbnail">
          <span>Thumbnail</span>
        </div>
      </div>
          <div className="right-content">
              <div className="search-input">
                  <input type="text" placeholder="Search" />
              </div>
              <div className="add-patient">
                  <img src="./images/icons8-add-50.png" alt="" />
              </div>
              <div className="bell">
                  <img src="./images/icons8-bell-50.png" alt="" />
              </div>
      </div>
    </div>
  );
};

export default Nav1;
