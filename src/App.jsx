import React, { Component } from 'react';
import Profile from './Profile.jsx';
import './App.css';
import { FormGroup , InputGroup, FormControl, Glyphicon } from 'react-bootstrap'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: "", // query
            artist: null // answer
        }
    } // end of consttructor

   search(){
       const BASE_URL = 'https://api.spotify.com/v1/search?';
       const FETCH_URL = `${BASE_URL}q=${ this.state.query }&type=artist&limit=1`;
       const accessToken = "BQCw47GeZgj7Xt5i04X4cxe_mxbtl5ufVoYzCoMgRzA4S1yT92HaWBfR3rHnHCsj3ZsET8VSg--Bx_3CibgK3osFc6Zj7lftUYKi0q1CvHadzV8STpXfx2idesg7UGHDo7S3d6oe2m6EQNtvRTTo02hzSiuUl4vGhN-P7A&refresh_token=AQAYUj6230USDkrqnsjaCl0hTv5ZYe3CKidVeo6oMcyMWT4Swhv7z-hm2JCoWSf43oZMR4EZKEk_hhfuNgzYxPUarOImzgM2qy1JNblHNi1EwNpGuETWQHFiAyOpX3Ovjvw";
       var myOptions = {
            method: 'GET',
            headers: {
            'Authorization': 'Bearer ' + accessToken
            },
            mode: 'cors',
            cache: 'default'
        };

        fetch(FETCH_URL, myOptions)
            .then(response=>response.json())
            .then(json=>{
                this.setState({artist: json.artists.items[0]});
            });

   }

    render(){
        return(
            <div className="App"> 
                <div className="App-title">Music Searcher</div>
                
                <FormGroup>
                    <InputGroup>

                        <FormControl 
                            type="text"
                            placeholder="Search for an Artist"
                            value = {this.state.query}
                            onChange = {event => {this.setState({query: event.target.value})}}
                            onKeyPress={event=> {
                                if(event.key === "Enter") this.search();
                            } }
                        />
                        <InputGroup.Addon onClick={()=>this.search()}> {/* this is button "glued" with input pield*/}
                            Search <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>

                    </InputGroup>
                </FormGroup>
        
                
                <Profile 
                    artist={this.state.artist}
                />
                

                <div className="Gallery">
                    gallery of songs
                </div>

            </div> // end of opening div
        ); // end of return
    }; // end of render method
}; // end of App class

export default App;