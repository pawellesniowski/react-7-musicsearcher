import React, { Component } from 'react';
import './App.css';

class Profile extends Component {


    render(){

        let artist ={
            name: '',
            followers: {total: ''}
        };

        if(this.props.artist !== null){
            artist = this.props.artist;
            console.log('artist: ', artist);
        }

        return(
                <div>

                    <div>{artist.name}</div>
                    <div>Artist followers: {artist.followers.total}</div>
                </div>
        );
    }
}

export default Profile;