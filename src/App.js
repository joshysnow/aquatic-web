import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';
import Header from './components/header';
import { mapStateToProps, mapDispatchToProps } from './App.redux';

class App extends Component {
  componentDidMount() {
    this.props.fetchWaterTests();
  }

  render() {
    return (
      <div className='App'>
        <Header />
      </div>
    );
  }
}

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  waterTests: PropTypes.array.isRequired
};

export default connect (mapStateToProps, mapDispatchToProps)(App);
