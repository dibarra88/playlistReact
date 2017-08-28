import React, { Component } from 'react';
import PlayListItem from './PlayListItem.js';

export default class PlayList extends Component {
    constructor(props) {
        super(props)
        this.state ={
            songs:[]
        }
    }
    fetchData = (e) => {
        e.preventDefault();
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
        })
      }
    componentDidMount() {
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
            return results.json();
        }).then(data => {
            this.setState({ songs: data });
            console.log("state", this.state.songs);
        })
    }
    componentWillReceiveProps(props){
        console.log("auto fetch got props", props)
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
            return results.json();
          }).then(data => {
            this.setState({songs: data});
          })
    }
    render() {
        return (
            <div id="playList">
                <button className="btn btn-secondary" onClick = {this.fetchData}>Update List</button>
            <PlayListItem songs={this.state.songs}/>
            </div>
        )
    }
}