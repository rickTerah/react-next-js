import React, { Component } from 'react';

class User extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2>Name: {this.props.name}</h2>
                <p>Age: {this.props.age}</p>
            </div>
         );
    }
}
 
export default User;