import React from 'react'
import "../styles/Contact.css"

const Contact = (props) => {

  const handleOnClick = () => {
    props.setActiveChat(
      {
        name: props.name,
        profileImg: props.profileImg
      }
    )
  }

  return (
    <div className='contact-container' onClick={handleOnClick}>
      <img src={props.profileImg} alt="" className='chat-profile-img' />
      <div className='conatct-details-container'>
        <div className="contact-name">{props.name} <span className='contact-status' style={{ color: props.status === "Online" ? "var(--green)" : "var(--red)" }}>{props.status}</span></div>
        <div className="last-message">{props.lastMsg.length <= 42 ? props.lastMsg : props.lastMsg.slice(0, 43) + "..."}</div>
        <div className="last-msg-time">{props.lastMsgTime}</div>
      </div>
    </div>
  )
}

export default Contact