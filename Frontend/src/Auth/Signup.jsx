import React, { useState } from 'react'

const Signup = () => {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {

        setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name :</label>
                <input type="name"
                    value={userData.username}
                    name="username"
                    onChange={handleChange}
                    placeholder='Enter the name' />
                    <br /><br />
                <label>Email :</label>
                <input type="email"
                    value={userData.email}
                    name="email"
                    onChange={handleChange}
                    placeholder='Enter the email' />
                    <br /><br />
                <label>Password :</label>
                <input type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    placeholder='Enter the password' />
                    <br /><br />
                <button type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default Signup