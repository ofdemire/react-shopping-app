import React, { Component } from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import GithubCorner from '../github/Corner';
import FloatCart from '../FloatCart';
import Header from '../Header'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <GithubCorner />
        <main>
          <Filter />
          <Shelf />
        </main>
        <FloatCart />
      </React.Fragment>
    );
  }
}

export default App;
