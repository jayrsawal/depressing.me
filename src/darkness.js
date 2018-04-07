import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'whatwg-fetch';
import {ToastContainer, toast} from 'react-toastify';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

class Darkness extends Component {
  constructor(props) {
    super(props);
    let path = this.props.location.pathname;
    var song = "hellodarkness.mp3";
    switch(path.substr(path.length - 1)) {
        case "1":
            song = "sadviolin.mp3";
            break;
        case "2":
            song = "lovestory.mp3";
            break;
        default:
        case "0":
            song = "hellodarkness.mp3";
            break;
    }
    this.state = {
        url: "http://tinyurl.com" + path.substr(0, path.length-1),
        song: song
    }
    this.notify = this.notify.bind(this);
  }
  notify = () => toast("Link copied to clipboard!");
  render() {
    return (
        <div className="darkness">
            <audio src={this.state.song} autoPlay loop id="audio"></audio>
            <iframe title="hellodarkness" 
                src={this.state.url}
                scrolling="no"/>
            <Link to={"/"}><div className="dark-btn" id="home"></div></Link>
            <CopyToClipboard text={"https://depressing.me"+this.props.location.pathname}
                onCopy={this.notify}>
                <div className="dark-btn" id="clipboard"></div>
            </CopyToClipboard>
            <ToastContainer />
        </div>
    );
  }
}

export default Darkness;