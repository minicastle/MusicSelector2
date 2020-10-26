import React from "react";
import MusicList from "../Data/MusicList.json";
import "../Contents_CSS/ListAdd.css";
class ListAdd extends React.Component {
  render() {
    return (
      <div className="ListAdd">
        <h2>ListADD</h2>
        <form
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            //event.target[0].value === Group e.target[1].value === Title e.target[2].value === Url
            if (e.target[0].value === "ArList") {
              MusicList.ArList.Title.push(e.target[1].value);
              MusicList.ArList.src.push(e.target[2].value);
              alert("Submit new Contents, on ARList");
              this.props.onclick_options();
            } else if (e.target[0].value === "MrList") {
              MusicList.MrList.Title.push(e.target[1].value);
              MusicList.MrList.src.push(e.target[2].value);
              alert("Submit new Contents, on MRList");
              this.props.onclick_options();
            }
          }.bind(this)}
        >
          <p className="Group-selecter">
            <select name="pets" id="pet-select">
              <option value="">--choose an LIst--</option>
              <option value="ArList">ArList</option>
              <option value="MrList">MrList</option>
            </select>
          </p>
          <p className="inner-Title">
            <input name="title" type="text" placeholder="Title"></input>
          </p>
          <p className="inner-Url">
            <input name="Url" type="text" placeholder="Url"></input>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </div>
    );
  }
}

export default ListAdd;
