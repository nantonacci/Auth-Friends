import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth.js';

class AddFriend extends React.Component {
    state = {
        newFriends: []
    };

    componentDidMount(){
        this.addFriend();
    }

    addFriend = () => {
        axiosWithAuth()
            .post('/friends', newFriends)
            .then(res => {
                console.log('new friend res: ' + res);
                this.setState({newFriends: res})
            })
            .catch(err => console.log('new friend err: ' + err))
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
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