import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import searchResults from './components/searchResults/searchResults';
import searchHistory from './components/searchHistory/searchHistory';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container mt-5 text-center">
          <div className="row">
            <div className="col-6">
              <searchResults />
            </div>
            <div className="col-6">
              <searchHistory />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;