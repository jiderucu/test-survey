import React from 'react';
// import{
//   Link
// }from 'react-router';
import TabBar from '../component/TabBar';
export default class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <TabBar />
      </div>
    );
  }
}
