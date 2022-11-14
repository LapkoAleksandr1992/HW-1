import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";




export type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {



    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}

                    // !!!!!!my dicision
                    src={props.message.user.avatar}
                    alt="imgAvatar"
                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*!!!!!!my dicision*/props.message.user.name}

                        {/*!!!!!!my dicision*/ }
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*!!!!!!my dicision*/props.message.message.text}

                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*!!!!!!my dicision*/props.message.message.time}


            </div>
        </div>
    )
}

export default Message
