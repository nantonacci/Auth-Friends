import React from 'react';
// import moment from 'moment';
// import Loader from 'react-loader-spinner';

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
            .then(res  => {this.setState({friends: res.data})})
            .catch(err => console.log(err))
    };

    formatData = () => {
        const formattedData = [];
        console.log(this.state.friends);
        this.state.friends.forEach((person, index, arr) => {
            formattedData.push(person)
        });
        return formattedData;
    };

    render() {
        const friends = this.formatData();
        console.log(friends);
        return (
            <>
            <p>{friends.name}</p>
            </>
        )
    }

}

export default FriendsList;