import React from 'react';
import './index.css';
import{
  Link
}from 'react-router';
class TabBar extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	    <ul>
            <li>

            <Link to="/myActivity">
               <img src=""/>
               <span>我的活动</span>
            </Link>
              
            </li>
             <li>
            <Link to="/creatPage">
                <img src=""/>
                <span>创建</span>
            </Link>
            
            </li>
           
            </ul>   
      </div>
    );
  }
}
export default TabBar;