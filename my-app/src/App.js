import React, { Component } from 'react';
import axios from 'axios'; // for hitting endpoints
import logo from './logo.svg';
import './App.css';
import MikesNavBar from './NavBar.js';
import SideBar from './Sidebar.js';

// routing for navbar
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// landing pages for NavBar
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';

// Can we loop over a list? We Can!
class GitCards extends Component {
    
    render() {
        return (
            <ul>
              {this.props.elems.map((v, i) => {
               return <li key={i}> {v} </li>
              })}
            </ul>
        )
    }
}

// mike Custom Component test
class MikeComp extends Component {

  state = { userName: "",
            userPic:  "",
          }

  // define method to get github information
  getGithubStuff = async () => {
    const resp = await axios.get(`https://api.github.com/users/mpapili`)
    console.log(resp.data)
    this.setState({userName: resp.data.login});
    this.props.addUser(this.state.userName)
  }

  render() {
    
    return (
      <div>
        <button style={{margin: '5 px'}} onClick={this.getGithubStuff}>
            Press Me!
        </button>
        The Username is {this.state.userName}
      </div>
    )
  }

}

class App extends Component {
  state = { elements: [] }

  // append element to elements
  addUser = (newElem) => {
      this.setState({elements: [...this.state.elements, newElem]})
  }

  render() {
    return (
      <div className="App">

        {/* NavBar, sidebar and Routing Logic*/}
        <React.Fragment>
          <Router>

            {/* Navbar and Sidebar */}
            <MikesNavBar/>
            <SideBar/>

            {/* Switch Routing Logic */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route component={NoMatch} />
            </Switch>

          </Router>
        </React.Fragment>

        {/*<MikeComp addUser={this.addUser}/>
        <GitCards elems={this.state.elements}/>*/}

      </div>
    );
  }
}

export default App;
