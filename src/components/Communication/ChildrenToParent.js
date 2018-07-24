import React, { Component } from 'react';
class ChildrenToParent extends Component {
  handleClick() {
    this.props.events("aa");
  }


  render() {
    return (
      <div>
        <h3>i am ChildrenToParent</h3>
        <button onClick={this.handleClick.bind(this)}>childrenToParent</button>
        
      </div>
    );
  }
}
export default ChildrenToParent;
