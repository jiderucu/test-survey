import React from 'react';
import TopBar from "../TopBar";
import CountBar from "../CountBar"
import SubmitPage from "../SubmitPage";
export default class StatisticBar extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <TopBar/>
         <CountBar/>
           <SubmitPage/>
      </div>
    );
  }
}

