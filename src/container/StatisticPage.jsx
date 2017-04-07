import React from 'react';
import StatisticBar from '../component/StatisticBar';
export default class StatisticPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
         <StatisticBar/>
      </div>
    );
  }
}
