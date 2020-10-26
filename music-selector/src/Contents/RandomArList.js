import React from "react";
import MusicList from "../Data/MusicList.json";
import "../Contents_CSS/RandomArList.css"
class RandomArList extends React.Component {
  getCode(_base) {
    let words1 = _base.split("https://www.youtube.com/watch?v=");
    let words2 = _base.split("https://youtu.be/");
    let words3 = _base.split("https://www.youtube.com/embed/");

    if (words1[1] !== undefined) {
      return "https://www.youtube.com/embed/" + words1[1];
    } else if (words2[1] !== undefined) {
      return "https://www.youtube.com/embed/" + words2[1];
    } else if (words3[1] !== undefined) {
      return "https://www.youtube.com/embed/" + words3[1];
    }
  }
  getRandomint() {
    let i = Math.floor(Math.random() * MusicList.ArList.Title.length);
    return (
      <div>
        <h2>{MusicList.ArList.Title[i]}</h2>
        <iframe
          width="760"
          height="515"
          src={this.getCode(MusicList.ArList.src[i])}
          frameborder="12"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    );
  }
  render() {
    return (
    <div>
      {this.getRandomint()}
      <div className = "nextButton">
        <span onClick = {function(e){
          e.preventDefault();
          this.props.onclick_selected_page("RArList");
        }.bind(this)}><i class="fas fa-angle-double-right"></i></span>
      </div>
    </div>
    );
  }
}

export default RandomArList;
