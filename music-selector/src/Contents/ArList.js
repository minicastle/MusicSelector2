import React from "react";
import MusicList from "../Data/MusicList.json";

class ArList extends React.Component {
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
  getLength() {
    let _contents = [];
    for (let i = 0; i < MusicList.ArList.Title.length; i++) {
      _contents.push(
        <div>
          <h2>
            {i + 1}. {MusicList.ArList.Title[i]}
          </h2>
          <iframe
            title = {MusicList.ArList.Title[i]}
            width="560"
            height="315"
            src={this.getCode(MusicList.ArList.src[i])}
            frameborder="12"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      );
    }
    return _contents;
  }
  render() {
    return <div>{this.getLength()}</div>;
  }
}

export default ArList;
