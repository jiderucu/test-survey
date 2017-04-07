import React from 'react';
import './index.css';
import {
	Link
}from "react-router";
 class TopBar extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div> 	
            <ul className="top">
      	    <li className="top1">
      	    <Link to='/countPage'>
                    <span className="tab">统计结果</span> 
      	    </Link>
      	    </li>
      	    <li>
      	    <Link to='/submitPage'>
                      <span>提交明细</span>
      	    </Link>
      	    </li>
      	    </ul>
      </div>
    );
  }
}
export default TopBar;