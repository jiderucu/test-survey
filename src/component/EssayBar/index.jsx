import React from 'react';
import './index.css';
import ChangeBar from "../ChangeBar";
class EssayBar extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<div className="top_text">
          标题
         </div> 
      	   <div className="tet_foot">
              <span>设为必答题</span>
               <div className="tet_right"> <ChangeBar /></div>
          </div>
           <div className="footBar">
              确认
             </div>
      </div>
    );
  }
}
export default EssayBar;