import React from 'react';
import './index.css';
import {
	Line
} from 'rc-progress';
class BallotBar extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	       <div className="main_top">
      	       	<span className="main_left">
      	       		提交量
      	       	</span>
      	       	<span className="main_right">
      	       		浏览量
      	       	</span>
      	       </div>
     	       <div className="content_center">
      	       	   <p>选择你最爱吃的荤菜</p>
      	       	   <p>烧鹅</p>
      	       	   <p className="content_width"><Line percent="1" strokeWidth="1" strokeColor="#D3D3D3" /></p>
                   <p>红烧肉</p>
                    <p className="content_width"><Line percent="1" strokeWidth="1" strokeColor="#D3D3D3" /></p>
                   <p>红烧排骨</p>
                    <p className="content_width"><Line percent="1" strokeWidth="1" strokeColor="#D3D3D3" /></p>
                   <p>肉沫蒸蛋</p>
                    <p className="content_width"><Line percent="1" strokeWidth="1" strokeColor="#D3D3D3" /></p>
                   <p>清蒸排骨</p>
                    <p className="content_width"><Line percent="1" strokeWidth="1" strokeColor="#D3D3D3" /></p>
                   <p>盐水鸡</p>
                    <p className="content_width"><Line percent="1" strokeWidth="1" strokeColor="#D3D3D3" /></p>
                   <p>烤鸡翅</p>
                    <p className="content_width"><Line percent="1" strokeWidth="1" strokeColor="#D3D3D3" /></p>
                   <p>咸蛋肉饼</p>
                    <p className="content_width"><Line percent="1" strokeWidth="1" strokeColor="#D3D3D3" /></p>
      	       </div>
      	       <div className="content_center">
      	       	 <p>选择你最爱吃的点心</p>
      	       	 <p>小笼包</p>
      	       	  <p className="content_width"><Line percent="1" strokeWidth="1" strokeColor="#D3D3D3" /></p>
      	       	 <p>面包</p>
      	       	  <p className="content_width"><Line percent="1" strokeWidth="1" strokeColor="#D3D3D3" /></p>
      	       	 <p>煎饼</p>
      	       	  <p className="content_width"><Line percent="1" strokeWidth="1" strokeColor="#D3D3D3" /></p>
      	       	 <p>煎饼</p>
      	       	  <p className="content_width"><Line percent="1" strokeWidth="1" strokeColor="#D3D3D3" /></p>
      	       	 <p>春卷</p>
      	       	  <p className="content_width"><Line percent="1" strokeWidth="1" strokeColor="#D3D3D3" /></p>
      	       	 <p>马蹄糕</p>
      	       	  <p className="content_width"><Line percent="1" strokeWidth="1" strokeColor="#D3D3D3" /></p>
      	       	 <p>玉米饼</p>
      	       	  <p className="content_width"><Line percent="1" strokeWidth="1" strokeColor="#D3D3D3" /></p>
      	       	 <p>汤云吞</p>
      	       	  <p className="content_width"><Line percent="1" strokeWidth="1" strokeColor="#D3D3D3" /></p>
      	       	 <p>油条</p>
      	       	  <p className="content_width"><Line percent="1" strokeWidth="1" strokeColor="#D3D3D3" /></p>
      	       </div>

      </div>
    );
  }
}
export default BallotBar;