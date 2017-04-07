import React from 'react';
import BuildBar from "../component/BuildBar";
export default class BuildPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<BuildBar/>
      </div>
    );
  }
}
