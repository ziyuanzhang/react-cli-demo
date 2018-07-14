import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';

class HomeB extends Component {
    render() {
        return (
            <div className="HomeB">
                <h1>HomeB</h1>
                <Prompt message="残忍离开？"/>
            </div>
        )}
}
export default HomeB;