import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';

class HomeB extends Component {
    constructor(){
        super()
        this.state={
            enter:"请输入内容!"
        }
    }
    onHandleChange(event){
       this.setState({
         enter : event.target.value
       })
       console.log("dd:",event.target.value)
    }
    onHandleClick(){
        this.setState({
            enter : "请输入内容"
          })
    }



    componentWillMount() {
        console.log("Component will mount");
      }
    
      componentDidMount() {
        console.log("Component did mount");
      }
    
      componentWillReceiveProps(nextProps) {
        console.log('Component will receive props', nextProps);
      }
    
      shouldComponentUpdate(nextProps, nextState) {
        console.log('Component should update', nextProps, nextState);
        if (nextState.status === 1) {
          return false;
        }
        return true;
      }
    
      componentWillUpdate(nextProps, nextState) {
        console.log('Component will update', nextProps, nextState);
      }
    
      componentDidUpdate(prevProps, prevState) {
        console.log('Component did update', prevProps, prevState);
      }
    
      componentWillUnmount() {
        console.log('Component will unmount');
      }
    render() {
        return (
            <div className="HomeB">
                <h1>HomeB</h1>
                <Prompt message="残忍离开？"/>
                <label>
                   <input type="text" value={this.state.enter} onChange={(event)=>this.onHandleChange(event)}/>
                   <button onClick={()=>this.onHandleClick()}>重置</button>
                </label>
                
                <p>{this.state.enter}</p>
            </div>
        )}
}
export default HomeB;