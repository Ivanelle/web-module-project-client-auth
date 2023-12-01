import React, { useState } from "react";
import axios from "axios";

const AddFriend = () => {
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    console.log(form)
    return (
        <div>
            <h2>Add Friend</h2>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input onChange={handleChange} name="name" id="name"/>
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input onChange={handleChange} name="age" id="age"/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input onChange={handleChange} name="email" id="email"/>
                </div>
                <button>Submit</button>
                
            </form>
        </div>
    )
  }

  export default AddFriend