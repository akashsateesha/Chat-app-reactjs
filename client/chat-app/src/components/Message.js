import React from 'react'
import "../styles/Message.css"

const Message = (props) => {
  return (
    // NOTE: without to class content will be right side 
    <div className='message-wrapper to'>
      <div className='message-content-wrapper '>
          <img src={props.profileImg} alt="" className='chat-profile-img'/>
        <div className='message-content '>
          <div className="username-received ">{props.name} <span className='msg-meta-info'>{props.time}</span></div>
          <div className="message-posted">{props.message}</div>
        </div>
      </div>
    </div>
  )
}

export default Message