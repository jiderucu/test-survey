import React from 'react';
import TabBar from '../component/TabBar';
import CounterBar from '../component/TabRight';
export default class index extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<TabBar/>
      	<TabRight/>
      </div>
    );
  }
}

