import React from 'react';
import{
  Link
} from'react-router';
import './index.css';
 class TabRight extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          
           <div>
                <div className="head">头像</div>
                <div className="sup">
           	     <span className="left">问卷</span>
           	     <span className="right">参与人数</span>
                </div>
           </div>
      

        <div className="center_box">
           <div className="center">
                   <div className="pic">
      	              <span><img src="" alt=""/></span>
                   </div>
      	           <div className= "center_top">
      	            	<span>在线课程课后质量调查</span>
      	           </div>
      	           <div className="center_content">
      	            	<span>
      	        	   	2017-03-21
      	            	</span>
                      <span>16:07:28</span>
                      <span>已暂停</span>
      	           </div>
      	           <div className="center_bar">
      	              <button>提交(0)</button>
      	              <button>浏览(0)</button>
      	           </div> 
                </div> 
                <div className="counter">
                    <span>发布</span>
                    <Link to="/buildPage"><span>生成页</span></Link>
                    <Link to="/statisticPage"><span>统计</span></Link>
                </div>
          </div>  





      </div>
    );
  }
}
export default TabRight;