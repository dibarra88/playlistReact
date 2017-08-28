import React, { Component } from 'react';

export default class PlayListForm extends Component {
    constructor(props) {
        super(props)
        console.log('constructor')
        this.state = {
            userName: '',
            songArtist: '',
            songTitle: '',
            songNotes: ''
        }
    }
    handleUserNameChange = (e) => {
        this.setState({ userName: e.target.value })
    }
    handleSongArtistChange = (e) => {
        this.setState({ songArtist: e.target.value })
    }
    handleSongTitleChange = (e) => {
        this.setState({ songTitle: e.target.value })
    }
    handleSongNotesChange = (e) => {
        this.setState({ songNotes: e.target.value })
    }

    addToList = (e) => {
        e.preventDefault();
        this.setState({ userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value });
        let listItem = JSON.stringify(this.state);
        fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
            method: "POST",
            body: listItem,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        ).then(response => {
            console.log(response, "yay");

        }).catch(err => {
            console.log(err, "boo!");
        });
        this.setState({ userName: '', songNotes: '', songArtist: '', songTitle: '' });
    }

    render() {
        return (
            <div className="card form">
                <div className="card-block">
                    <h2>Create your own playlist</h2>
                    <form onSubmit={this.addToList}>
                        <div className="form-group">
                            <label htmlFor="userName">User Name</label>
                            <input type="text" className="form-control" id="userName" name="userName" placeholder="Name or User Name" value={this.state.userName} onChange={this.handleUserNameChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="songArtist">Artist/Band</label>
                            <input type="text" className="form-control" id="songArtist" name="songArtist" placeholder="Artist or Band Name" value={this.state.songArtist} onChange={this.handleSongArtistChange} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="songTitle">Song Title</label>
                            <input type="text" className="form-control" id="songTitle" name="songTitle" placeholder="Song Title" value={this.state.songTitle} onChange={this.handleSongTitleChange} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="songNotes">Notes about Song</label>

                            <textarea className="form-control" rows='5' id="songNotes" name="songNotes" placeholder="Song Notes" value={this.state.songNotes} onChange={this.handleSongNotesChange} ></textarea>
                        </div>
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }

}
