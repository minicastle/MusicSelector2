import React from "react";
import "./../Contents_CSS/Select_service.css";

class Select_service extends React.Component {
  render() {
    return (
      <div className="Select-service">
        <ul className="Select-service-list">
          <p>Service List</p>
          <li>
            <span
              onClick={function (e) {
                e.preventDefault();
                this.props.onclick_selected_page("ArList");
              }.bind(this)}
            >
              1. AR List
            </span>
          </li>
          <li>
            <span
              onClick={function (e) {
                e.preventDefault();
                this.props.onclick_selected_page("MrList");
              }.bind(this)}
            >
              2. MR List
            </span>
          </li>
          <li>
            <span
              onClick={function (e) {
                e.preventDefault();
                this.props.onclick_selected_page("RArList");
              }.bind(this)}
            >
              3. Random AR Select
            </span>
          </li>
          <li>
            <span
              onClick={function (e) {
                e.preventDefault();
                this.props.onclick_selected_page("RMrList");
              }.bind(this)}
            >
              4. Random MR Select
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Select_service;
