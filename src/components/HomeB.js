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

      /*  在渲染前调用,在客户端也在服务端。  */
      componentWillMount() {
        console.log("Component will mount");
      }
       /* 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。 */
      componentDidMount() {
        console.log("Component did mount");
      }
    /* 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。 */
      componentWillReceiveProps(nextProps) {
        console.log('Component will receive props', nextProps);
      }
    /* 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。  */
      shouldComponentUpdate(nextProps, nextState) {
        console.log('Component should update', nextProps, nextState);
        if (nextState.status === 1) {
          return false;
        }
        return true;
      }
    /* 在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。 */
      componentWillUpdate(nextProps, nextState) {
        console.log('Component will update', nextProps, nextState);
      }
    /* 在组件完成更新后立即调用。在初始化时不会被调用。 */
      componentDidUpdate(prevProps, prevState) {
        console.log('Component did update', prevProps, prevState);
      }
    /* 在组件从 DOM 中移除的时候立刻被调用。 */
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