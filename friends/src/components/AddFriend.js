import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth.js';

class AddFriend extends React.Component {
    state = {
        name: '',
        age: '',
        email: ''
    };

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };


    addFriend = () => {
        axiosWithAuth()
            .post('/friends', this.state)
            .then(res => {
                console.log('new friend res: ' + res);
                
            })
            .catch(err => console.log('new friend err: ' + err))
    };

    render() {
        return (
            <>
                <form onSubmit={this.addFriend}>
                    <input
                    type="text"
                    placeholder="name"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                    />

                    <input
                    type="text"
                    placeholder="age"
                    name="age"
                    onChange={this.handleChange}
                    value={this.state.age}
                    />

                    <input
                    type="text"
                    placeholder="email"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    />
                    <button>Add Friend</button>
                </form>
            </>
        )
    }
}

export default AddFriend;