import React, { Component } from 'react';
import logo from './favicon.ico';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, withRouter } from 'react-router-dom';
import 'whatwg-fetch';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      song: "0",
      height: "",
      redirect: false,
      hash: ""
    };
    this.handleUrl = this.handleUrl.bind(this);
    this.handleSong = this.handleSong.bind(this);
    this.handleHeight = this.handleHeight.bind(this);
    this.hashState = this.hashState.bind(this);
  }
  handleUrl = (event) => {
    this.setState({url: event.target.value});
  }
  handleSong = (event) => {
    this.setState({song: event.target.value});
  }
  handleHeight = (event) => {
    this.setState({height: event.target.value});
  }
  hashState() {
        fetch("https://api.sawal.ca/helper/tinyurl?url=" + this.state.url)
            .then( response => {
                return response.json();
            })
            .then( data => {
                this.props.history.push("/");
                this.setState({
                    hash:data.hash,
                    redirect: true
                });
            });
  }
  render() {
    if(this.state.redirect) {
        return (
            <Redirect to={{
                pathname: '/'+this.state.hash+this.state.song
            }}/>
        );
    }
    return ( 
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title py-2">Hello Darkness, my old friend.</h1>
            </header>
            <div className="App-selection">
            <div className="row">
                <div className="col-sm-12 py-4">
                Enter a url. Choose your song. Share the feels.
                </div>
                <div className="col-sm-8 py-2">
                <input className="form-control" placeholder="Enter URL Here" 
                    value={this.state.url} onChange={this.handleUrl.bind(this)}/>
                </div>
                <div className="col-sm-4 py-2">
                <select className="form-control" onChange={this.handleSong.bind(this)}>
                    <option value="0">Sound of Silence</option>
                    <option value="1">Sad Violin</option>
                    <option value="2">Love Story</option>
                </select>
                </div>
                <div className="col-sm-12 py-4">
                <button className="btn" onClick={this.hashState}>DEPRESS HERE</button>
                </div>            
            </div>
            </div>
        </div>
    );
  }
}

export default withRouter(Home);