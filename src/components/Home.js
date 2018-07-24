import React, { Component } from 'react';
import ParentToChildren from './Communication/ParentToChildren'

class Home extends Component {
    render() {
        const user={
            Hobbies:['sports','reading']
        }
        return (
            <div className="Home">
            <h1>Home</h1>
                <ParentToChildren age={16} name={"lisi"} user={user} >
                  <p>hahahha</p> 
                </ParentToChildren>
            </div>
        )}
}
export default Home;