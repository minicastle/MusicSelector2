import React from "react";
import "./App.css";
import Select_service from "./Contents/Select_service";
import ArList from "./Contents/ArList";
import MrList from "./Contents/MrList";
import RandomArList from "./Contents/RandomArList";
import RandomMrList from "./Contents/RandomMrList";
import SearchContents from "./Contents/SearchContents";
import ListAdd from "./Contents/ListAdd";
import SelectOption from "./Contents/SelectOption";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Mode: "default",
      Option: "default",
      SearchMode: "default"
    };
  }
  getContents() {
    let _mode = this.state.Mode; 
    let _contents;
    if (_mode === "default") {
      _contents = (
        <Select_service
          onclick_selected_page={function (_mode) {
            this.setState({ Mode: _mode });
          }.bind(this)}
        ></Select_service>
      );
    } else if (_mode === "ArList") {
      _contents = <ArList></ArList>;
    } else if (_mode === "MrList") {
      _contents = <MrList></MrList>;
    } else if (_mode === "RArList") {
      _contents = <RandomArList onclick_selected_page = {function(_mode){
        this.setState({Mode:_mode});
      }.bind(this)}></RandomArList>;
    } else if (_mode === "RMrList") {
      _contents = <RandomMrList onclick_selected_page = {function(_mode){
        this.setState({Mode:_mode});
      }.bind(this)}></RandomMrList>;
    }

    return _contents;
  }
  getOption(){
    let Options;
    let _Option = this.state.Option;
    if(_Option === "default"){
    }
    else if( _Option === "Add"){
      Options =  <ListAdd onclick_options = {function(){
        this.setState({Option:"default"});
      }.bind(this)}></ListAdd>;
    }
    return (Options);
  }
  

  render() {
    return (
      <div className="Music-selector">
        <header className="Music-selector-title">
          <span onClick = {function(e){
            e.preventDefault();
            window.location.reload();
          }}>Music-Selector</span>
        </header>
        <SelectOption onclick_options = {function(Selected_option){
        this.setState({Option : Selected_option});
      }.bind(this)}></SelectOption>
        {this.getOption()}
        <div className="Serch-contents">
          <SearchContents></SearchContents>
        </div>
        {this.getContents()}
      </div>
    );
  }
}

export default App;
