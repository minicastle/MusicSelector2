import React from "react";
import "../Contents_CSS/SelectOption.css";

class SelectOption extends React.Component {
  
  render() {
    return (
      <div>
        <span onClick = {function(e){
          e.preventDefault();
          this.props.onclick_options("Add");
        }.bind(this)}>
          <i class="fas fa-plus-circle"></i>
        </span>
      </div>
    );
  }
}

export default SelectOption;
