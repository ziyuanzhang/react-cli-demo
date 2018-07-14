import React, { Component } from 'react';
class routeParam extends Component {
    componentWillMount(){
        console.log(this.props);
    }
    render() {
        return (
            <div className="routeParam">
                <h1>routeParam</h1>
                <p>{this.props.match.params.id}</p>
            </div>
        )}
}
export default routeParam;