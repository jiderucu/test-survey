import React from 'react';
import BallotBar from "../component/BallotBar";
export default class BallotPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<BallotBar/>
      </div>
    );
  }
}
