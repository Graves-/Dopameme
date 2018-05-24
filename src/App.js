import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import LandingHeader from './components/headers/LandingHeader';
import MainGrid from './components/grid/MainGrid';

import Media from 'react-media';

class App extends Component {
  render() {
    return (
      <div>
        <LandingHeader />
        <Media query="(max-width: 767px)">
            {matches =>
                matches ? (
                    <div style={{marginTop: '30rem'}}>
                      <MainGrid />
                    </div>
                ) : (
                    <div style={{marginTop: '10rem'}}>
                      <MainGrid />
                    </div>

                )
            }
        </Media>
      </div>
    );
  }
}

export default App;
