import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'


type GreetingContainerPropsType = {
    users: UserType[] // need to fix any  ------ MY SOLUSION!!!!!!!!
    addUserCallback: (name: string) => void // need to fix any  ------ MY SOLUSION!!!!!!!!
}

export const pureAddUser = (name: string, setError: (value: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {

    if (name === ''|| name==='    ') {
        return setError('Ошибка! Введите имя!')
    } else {
        addUserCallback(name)
        setName('')
    }
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
} //----- MY SOLUSION!!!!!!!!!!

export const pureOnBlur = (name: string, setError: (value: string) => void) => { if(name===''||name ==='    ') {
    return setError('Ошибка! Введите имя!')
}// если имя пустое - показать ошибку----- MY SOLUSION!!!!!!!!!!
}

export const pureOnEnter = (e: KeyboardEvent, addUser: () => void) => {
    if(e.key==="Enter") {
        addUser()
    }// если нажата кнопка Enter - добавить  ----- MY SOLUSION!!!!!!!!!!
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any ------ MY SOLUSION!!!!!!!!
    const [error, setError] = useState<string>('') // need to fix any ------ MY SOLUSION!!!!!!!!

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any ------ MY SOLUSION!!!!!!!!
        setName(e.currentTarget.value) // need to fix ------ MY SOLUSION!!!!!!!!

        error && setError('')
    }
    const addUser = () => {

        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent) => {
        pureOnEnter(e, addUser)
    }
    const usersLength = users.length
    const totalUsers: number = usersLength // need to fix ------ MY SOLUSION!!!!!!!!
    let lastUserName: string = users[usersLength-1].name// need to fix------ MY SOLUSION!!!!!!!!

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
