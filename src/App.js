import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/Menu'
import Content from './components/content/Content'
import { Redirect, Route, HashRouter } from "react-router-dom";
import jsonFolders from './folders.json';

const Folders = jsonFolders;

class App extends Component {
  render() {

    const pathFolder = Folders.map((folder) => 
      <Route key={folder.name} path={'/' + folder.name} render={() => <Content folder={folder} />} />
    )

    return (
      <div className="App">
        <div className="App-header">
          <h1>NicolasR.</h1>
        </div>
        <HashRouter>
          <div>
            <div className="App-menu">
              <Menu folders={Folders}/>
            </div>
            <div className="App-content">
              <div className="content">
                  <Redirect from="/" to={Folders[0].name}/>
                  {pathFolder}
              </div>
            </div> 
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
