import React, { Component } from 'react';
import './App.css';
import { FormGroup , InputGroup, FormControl, Glyphicon } from 'react-bootstrap'

class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            searchTerm: ""
        }
    } // end of consttructor

   search(){
       console.log("this.state: ", this.state);
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
                                value = {this.state.searchTerm}
                                onChange = {event => {this.setState({searchTerm: event.target.value})}}
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