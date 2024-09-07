import React, { useEffect, useState, } from 'react'
import "../styles/Chat.css"
import contactDefault from "../images/contactDefault.png"
import Contact from '../components/Contact'
import Message from '../components/Message'
import { io } from "socket.io-client"
import URLS from '../components/Urls'
import Login from './Login'

const Chat = () => {
    // const [privateUser, setPrivateUser] = useState(null)
    const [activeChat, setActiveChat] = useState(null)
    const [userName, setUserName] = useState(null)
    const [message, setMessage] = useState('')
    const [socket, setSocket] = useState(null)
    const [receivedMsg, setReceivedMsg] = useState(null)

    useEffect(() => {

        const newsocket = io(
            URLS.HOST,
            {
                autoConnect: false
            }
        )

        setSocket(newsocket)

        newsocket.on('message', (params)=>{
            // console.log(params)
            setReceivedMsg(
                <Message
                    name="Ram"
                    message= {params.message}
                    time="7:30 AM"
                    profileImg={contactDefault} 
                />
            )
        })

        return () => {
            newsocket.off('connect')
            newsocket.off('disconnect')
        }
        // eslint-disable-next-line
    }, [])

    const sendMessage = () => {
        if (message) {
            // console.log(message)
            socket.emit('message', { 'message': message })
            setMessage('')
        }
    }
    const handleMessage = (e) => {
        if (e.key === 'Enter') {
            sendMessage()
        }
    }

    return (
        <>
            {!userName ?
                <div>
                    {<Login
                        socket = {socket}
                        setUserName={setUserName}
                    />}
                </div>

                :

                <div className='chat-container'>
                    <div className='contacts-pannel'>

                        <div className="header">
                            <img src={contactDefault} alt="" className='chat-profile-img' />
                            <p className="active-contact">Welcome, {userName}</p>
                        </div>
                        <div className="search">
                            <input type="text" className='search-input' placeholder='Search chats here...' />
                        </div>
                        <div className="contacts">
                            <Contact
                                name="Ram"
                                profileImg={contactDefault}
                                lastMsg="This is the sent message sent by this user"
                                lastMsgTime="7:30 AM"
                                status="Offline"
                                setActiveChat={setActiveChat}
                            />
                            {/* <Contact
                                name="Suresh"
                                profileImg={contactDefault}
                                lastMsg="This is the sent message sent by this user This is the sent message sent by this userThis is the sent message sent by this userThis is the sent message sent by this user"
                                lastMsgTime="7:30 AM"
                                status="Online"
                                setActiveChat={setActiveChat}
                            />
                            <Contact
                                name="Ramesh"
                                profileImg={contactDefault}
                                lastMsg="This is the sent message sent by this user"
                                lastMsgTime="7:30 AM"
                                status="Offline"
                                setActiveChat={setActiveChat}
                            />
                            <Contact
                                name="Shashi"
                                profileImg={contactDefault}
                                lastMsg="This is the sent message sent by this user"
                                lastMsgTime="7:30 AM"
                                status="Online"
                                setActiveChat={setActiveChat}
                            /> */}

                        </div>
                    </div>
                    <div className='message-container'>
                        {!activeChat ? <h1>Select chat</h1> :
                            <div className='wrapper'>
                                <div className="header message-header">
                                    <img src={activeChat.profileImg} className='chat-profile-img' alt='' />
                                    {activeChat.name}
                                </div>
                                <div className="message-input-container">
                                    <input
                                        type="text"
                                        autoComplete='off'
                                        name="message"
                                        className='message-input'
                                        placeholder='Message...'
                                        onChange={(e) => { setMessage(e.target.value) }}
                                        onKeyDown={handleMessage}
                                        value={message}
                                    />
                                    <button
                                        className='message-send-button'
                                        onClick={sendMessage}

                                    ><i className="material-icons">send</i>Send</button>
                                </div>

                                <Message
                                    name="Ram"
                                    message="Hello srinu"
                                    time="7:30 AM"
                                    profileImg={contactDefault} />

                                {receivedMsg && receivedMsg}
                            </div>
                        }
                    </div>
                </div>


            }
        </>

    )
}

export default Chat