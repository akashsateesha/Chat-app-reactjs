import React, { useState } from 'react'
import "../styles/Login.css"

const Login = (props) => {
    const [username, setUserName] = useState(null)

    const handleOnChange = (e) => {
        // console.log(e)
        setUserName(e.target.value)

    }

    const connect = ()=>{
        if (username) {
            props.socket.auth = { username: username }
            props.socket.connect()
        }
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            props.setUserName(username)
            connect()
        }
    }

    const handleOnClick = () => {
        props.setUserName(username)
    }

    return (
        <div className='login-wrapper'>
            <input
                type="text"
                autoComplete='off'
                name="message"
                className='message-input username-holder'
                placeholder='Message...'
                onChange={handleOnChange}
                onKeyDown={handleEnter}
            />

            <button className='message-send-button' onClick={handleOnClick}><i className="material-icons">send</i>Enter</button>
        </div>
    )
}

export default Login