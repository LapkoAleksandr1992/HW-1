import {useState} from "react";


export const [value, setValue] = useState<string>('')
export const saveRestoreState = () => {
    const StateString=JSON.stringify(value)
    localStorage.setItem('taskKey',StateString)
}
export const GetRestoreState = () => {
    const StateString=localStorage.getItem('taskKey')
    if(StateString !==null) {
        setValue(JSON.parse(StateString))
    }
}