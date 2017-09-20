import React, { Component } from 'react';
import './App.css';

class Profile extends Component {


    render(){
        // initial object
        let artist ={
            name: '',
            followers: {total: ''}, 
            images: [{url: ""}],
            genres: []
        };

        artist = this.props.artist !== null? this.props.artist : artist;

        return(
                <div className="profile">
                    <img 
                        className="profile-img"
                        src={artist.images[0].url} 
                        alt="imageee"
                    />

                    <div className="profile-info">
                        <div className="profile-name">{artist.name}</div>
                        <div className="profile-followers">Artist followers: {artist.followers.total}</div>
                        <div className="profile-genres">
                            {artist.genres.map(((genres, index) =>{
                                genres = genres !== artist.genres[artist.genres.length-1]? ` ${genres},` : ` && ${genres}.`
                                return <span key={index}>{genres}</span>;
                            }))}
                        </div>
                    </div>

                    
                </div>
        );
    }
}

export default Profile;