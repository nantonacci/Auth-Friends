import React from 'react';
import Friend from './Friend.js';

import { axiosWithAuth } from '../utils/axiosWithAuth.js';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res  => {
                console.log('response:' + res)
                this.setState({friends: res})
            })
            .catch(err => console.log(err))
    };


    render() {

        return (
            <>
            <h3>Friends List</h3>
            {this.state.friends.map(friend => (
             <Friend
                key={friend.id}
                name={friend.name}
                age={friend.age}
                email={friend.email}
                />
        ))}
            </>
        )
    }

}

export default FriendsList;