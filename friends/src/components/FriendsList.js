import React from 'react';
import Friend from './Friend.js';
import AddFriend from './AddFriend.js';

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
                console.log('response: ', res.data)
                this.setState({friends: res.data})
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
            <h4>Add a new friend</h4>
                <AddFriend />
            </>
        )
    }

}

export default FriendsList;