import React, { Component } from 'react';
import Person from './person';

class personCon extends  Component {
  state = {
    persons: [
      { name: '张三', age: '12' },
      { name: '李四', age: '32' },
      { name: '王五', age: '21' },
      { name: '赵州桥', age: '300' },
    ],
    otherState: 'anything',
    personShow:'false'
  };
  changeNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: '12' },
        { name: '李四', age: '32' },
        { name: '王五', age: '21' },
        { name: '赵州桥', age: '300' },
      ],
    });
  };
  myChangeName = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: '12' },
        { name: '李四', age: '32' },
        { name: '王五', age: '21' },
        { name: '赵州桥', age: '300' },
      ],
    });
  };
  toggleHandler = () => {
    const doShow = this.state.personShow;
    this.setState({ personShow: !doShow });
  };
  render() {
    let PersonS = null;
    if (this.state.personShow) {
      PersonS = (
        <div>
          <Person
            myChangeName={this.myChangeName}
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            myClick={this.changeNameHandler.bind(this, '张三33')}
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
            我是最后一个
          </Person>
        </div>
      );
    }
    return (
      <div className="personCon">
        <p> 我是personCon</p>
        <button onClick={() => this.changeNameHandler('张三11')}>
          改变person
        </button>
        <button onClick={this.changeNameHandler.bind(this, '张三22')}>
          bind改变person
        </button>
        <button onClick={this.toggleHandler}>切换 person 显示</button>
        {PersonS}
      </div>
    );
  }
}

export default personCon;
