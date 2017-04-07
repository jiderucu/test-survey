import React from 'react';
import{
  Link
}from 'react-router';
import TopBar from '../component/TopBar';
export default class Main extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <TopBar />
      </div>
    );
  }
}
