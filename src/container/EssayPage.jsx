import React from 'react';
import EssayBar from "../component/EssayBar";
export default class EssayPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<EssayBar/>
      </div>
    );
  }
}
