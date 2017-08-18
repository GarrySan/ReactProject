import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {BrowserRouter, Route, Link} from "react-router-dom";
import HomeView from "./Pages/HomeView";
import LogosView from "./Pages/LogosView";
import LetterView from "./Pages/LetterView";

import PostersView from "./Pages/Posters";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToggle}/>
          
          
          <Drawer open={this.state.open} docked={false}  onRequestChange={(open) => this.setState({open})}>
              <Link to='/' className="link">
                <MenuItem onClick={this.handleClose}>
                  HomeView
                </MenuItem>
              </Link>

              <Link to='/logos' className="link">
              <MenuItem onClick={this.handleClose}>
                Logos
              </MenuItem>
              </Link>
            
            
              <Link to='/posters' className="link">
              <MenuItem onClick={this.handleClose}>
                Posters
              </MenuItem>
              </Link>
            
            
              <Link to='/letter-head' className="link">
              <MenuItem onClick={this.handleClose}>
                Letter-head
              </MenuItem>
              </Link>
            
          </Drawer>
          <Route exact path="/" component={HomeView}/>
          <Route exact path="/logos" component={LogosView}/>
          <Route exact path="/letter-head" component={LetterView}/>
          <Route exact path="/posters" component={PostersView}/>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
