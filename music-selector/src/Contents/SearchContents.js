import React from "react";
import "../Contents_CSS/SerchContents.css";
import MusicList from "../Data/MusicList.json";
import SearchContentsOutput from "./SearchContentsOutput";

class SearchContents extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Title: [],
      Url: [],
      Status: []
    }
  }
  getSearchData(e){
    let count = 0;
    let search_data_title = [];
    let search_data_url = [];
    let search_data_status = [];
    for(let i = 0;i<MusicList.ArList.Title.length;i++){
      count++;
      if(MusicList.ArList.Title[i]===e){
        search_data_title.push(MusicList.ArList.Title[i]);
        search_data_url.push(MusicList.ArList.src[i]);
        search_data_status.push("AR");
        this.setState({Title :search_data_title,Url:search_data_url,Status:search_data_status});
      }
      if(MusicList.MrList.Title[i]===e){
        search_data_title.push(MusicList.MrList.Title[i]);
        search_data_url.push(MusicList.MrList.src[i]);
        search_data_status.push("MR");
        this.setState({Title :search_data_title,Url:search_data_url,Status:search_data_status});
      }
      if(count === MusicList.ArList.Title.length && search_data_title.length === 0){
        search_data_title = "No Data";
        alert(search_data_title);
      }
    }
  }
  render() {
    return (
        <form
          onSubmit = {function(e){
            e.preventDefault();
            {this.getSearchData(e.target[0].value)}
            //e.target[0].value
          }.bind(this)}
        >
          <input
          className="Serch"
          name = "Search"
          placeholder="Serch Contents"
          id="Search_item"
          type="search"
          ></input>
          <SearchContentsOutput
            status = {this.state.Status}
            title = {this.state.Title}
            url = {this.state.Url}>
            </SearchContentsOutput>
        </form>
  );
  }
}

export default SearchContents;
