import React from 'react';
import CountBar from "../component/CountBar";
export default class CountPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<CountBar/>
      </div>
    );
  }
}
