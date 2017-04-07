import React from 'react';
import TabRight from '../component/TabRight';
export default class MyActivity extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
         <TabRight/>
      </div>
    );
  }
}
