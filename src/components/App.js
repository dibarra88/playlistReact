import React, { Component } from 'react';
//import '../styles/App.css';
import NavBar from './NavBar.js';
import PlayListForm from './PlayListForm.js';
import PlayList from './PlayList.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      update:false
    }

  }
  updatePlayList(){
    this.setState({
      update: !(this.state.update)
    })
  }
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayListForm updatePlayList={this.updatePlayList.bind(this)}  />
        <PlayList updatePlayList={this.updatePlayList.bind(this)} />
      </div>
    );
  }
}

export default App;
