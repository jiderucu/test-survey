import React from 'react';
import QuestionBar from "../component/QuestionBar";
export default class QuestionPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<QuestionBar/>
      </div>
    );
  }
}
