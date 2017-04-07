import React from 'react';
import MultipleChoice from "../component/MultipleChoice";
export default class MultiplePage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <MultipleChoice/>
      </div>
    );
  }
}
