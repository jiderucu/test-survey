import React from 'react';
import SubmitPage from"../component/SubmitPage";
export default class SubPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<SubmitPage />
      </div>
    );
  }
}
