import React, { Component } from 'react';

export default class PlayListItem extends Component {
    render() {
        return (
            <div>
                {this.props.songs.map(song => (
                    < div key={song._id}  >
                        <div className="card">
                            <div className="card-block">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">User: {song.userName}</li>
                                    <li className="list-group-item">Artist/Band: {song.songArtist}</li>
                                    <li className="list-group-item">Title: {song.songTitle}</li>
                                    <li className="list-group-item">Notes: {song.songNotes}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}