import React from 'react';
import SingleBar from "../component/SingleBar";
export default class ChoicePage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<SingleBar/>
      </div>
    );
  }
}