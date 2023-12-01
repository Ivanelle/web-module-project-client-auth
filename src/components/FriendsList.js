import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate('/login')
        } else {
            navigate('/friends')
        }
    }, [])
    
    useEffect(() => {
        const token = localStorage.getItem("token")

        axios.get('http://localhost:9000/api/friends', {
            headers: {
                authorization: token
            }
        })
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])


    return (
        <div>
            <h2>FriendsList</h2>
            <ul>
                {
                    friends.map(friend => {
                        return <li>{friend.name} - {friend.age} - {friend.email}</li>
                    })
                }
            </ul>
        </div>);
  }

  export default FriendsList