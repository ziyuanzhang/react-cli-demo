import React from 'react';
import "./person.css"
const Person = props => {
    const style ={
        color:"red"
    }
  return (
    <div >
      <p onClick={props.myClick}>
        我是{props.name}, 我今年{props.age}岁了
      </p>
      <p style={style}>{props.children} </p>
      <input type="text" onChange={props.myChangeName} defaultValue={props.name}/>
    </div>
  );
};
export default Person;
