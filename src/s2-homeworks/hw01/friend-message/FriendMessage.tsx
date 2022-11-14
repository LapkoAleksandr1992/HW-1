import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

//my decision!!!!
//TASK:
// создать тип вместо any и отобразить приходящие данные
export type FriendMessageType = {
    message: MessageType
}
const FriendMessage = (props: FriendMessageType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}


                    // !!!!!!my dicision
                    src={props.message.user.avatar}
                    alt="imgAvatar2"
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*!!!!!!my dicision*/props.message.user.name}


                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                                         >
                        {/*создаёт студент*/props.message.message.text}

                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/props.message.message.time}

                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
