import React from 'react'
import './card.css'
function Card({Message, Name}) {

    const isUser = Name === Message.Name;
    return (
            <div>
                <div className={isUser ? "Message_user" : "Message_guest"}> <p><strong>{isUser ? !Message.Name : Message.Name+":"} </strong>{Message.Message}</p> </div>
            </div>        
    )
}

export default Card