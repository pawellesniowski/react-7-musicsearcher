//Client ID
// e4275726484a461ab9e02bf0ec7c8242
// Client Secret
// eb4d0dc77d3c470cb5868dc80234e2d5
// http://localhost:8888/#access_token=BQCBPZKdA6l1o3-iSkY3-Ysk0MUAgLZGVEqSG5sC8r4kn5a9ltAWpUeRhdQ_8puDpoLf8tqGUKHCFWSuI6iNYrP4Dh1wHhuGCggA067dz2I5_Ni1fpCL9ogDhDxiDmtNXpxTlwNKFqX5CzqZnPI9L6GW4TnNh0cmo7Ok5Q&refresh_token=AQBt4RJcYrahHvznMYBW2BtwktzCHO4xz4Fw6TH1zH8jH8mUP3Y_Rk9yf4FCellwYH5dU2HAbtKOY-B1zQPQofI76W8xMvaUVMZnHScWCC3ub0JrDDBFi8yla08EheWyaTM

import React, { Component } from 'react';
import './App.css';
import { FormGroup , InputGroup, FormControl, Glyphicon } from 'react-bootstrap'

class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            query: "", // query
            artist: null // answer
        }
    } // end of consttructor

   search(){
       const BASE_URL = 'https://api.spotify.com/v1/search?';
       const FETCH_URL = `${BASE_URL}q=${ this.state.query }&type=artist&limit=1`;
       const accessToken = 'BQAeNtYnvdsUGR5XMJzd-pX9Xnf_mNI0ed-DffaRAC8C29QNKhx1z5gL4CFQgL0pVK6M7o0yUKLEIxzzl0CwIia_IkVTGA4BqqtG9VDV3bv-TzJgJ9uQ_tWqO1l8OBqDZfwmtqG_ulcRR-j4ScMwcsp2kjS2T2oVKIpc-A&refresh_token=AQCatkjhuzJyaWk4PDEUKa9pcFt2jii3HFbfDcqOvibPK8SO7CY36CayBpVaRsjUNacJ_TeirpFeO5BhXstfcwAPsWYwK5s0Qv5j0vmDVFQCZn2h9vLEMdhOebMW2vUdPQA';

       var myOptions = {
            method: 'GET',
            headers: {
            'Authorization': 'Bearer ' + accessToken
            },
            mode: 'cors',
            cache: 'default'
        };

        fetch(FETCH_URL, myOptions)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            const artist = json.artists.items[0];        
            this.setState({ artist });
            console.log("state: ",this.state);
        })


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
                    

                <div className="Profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>

                <div className="Gallery">
                    gallery of songs
                </div>

            </div> // end of opening div
        ); // end of return
    }; // end of render method
}; // end of App class

export default App;