


export const saveRestoreState = (value:string) => {
    const StateString=JSON.stringify(value)
    localStorage.setItem('taskKey',StateString)
}
export const getRestoreState = (setValue:(value:string)=>void) => {
    const StateString=localStorage.getItem('taskKey')
    if(StateString !==null) {
        setValue(JSON.parse(StateString))
    }
}
