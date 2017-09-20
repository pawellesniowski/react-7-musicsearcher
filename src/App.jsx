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
       const accessToken = "BQAJfYUDzY06wHu7CJHUfzkt-LLGNPQRxvAEKnC34kpGpTDqAl0hcIOUSJkaGZPmN2MyCNRDOFAlctoTYQK7hqqavtOr_SLcPVxH2p__SAtr8d0mfeh5O8RU78OVGTGfqrBrT48pAfM68r7tMjJZLaky02irlfvYpKxkCA&refresh_token=AQBVYlML4x7fV0cMcH5Z__Cwn91_C_bAg1jzn3j5SWQBuL9tnoi1Ocj2z-V4nrHqfVJfjxGLPIF7-AufoMjG3I1zXq8BY-pfwD6fsVCfP0N6v9ocraOKU6aBCIk0uScWj4U";
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
                console.log("this.state from App.jsx: ", this.state);
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