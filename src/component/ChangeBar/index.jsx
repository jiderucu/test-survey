import React from 'react';
import 'react-ios-switch/build/bundle.css';
import Switch from 'react-ios-switch';
 class ChangeBar extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
      this.state={
      checked:false
    }
     this.change = this.change.bind(this);
  };
 change(){
    const { checked } = this.state;
    this.setState({
      checked: !checked
    })
  }
  render() {
  	  const {checked} =this.state;
     return (
      <div>
      	    <Switch 
              checked={checked}
              onChange={this.change}
              />
      </div>
    );
  }
}
export default ChangeBar;
