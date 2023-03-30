
const SET_THEME_ID='SET_THEME_ID'

type ActionType = ReturnType<typeof changeThemeId>
type StateType = {
    themeId: number
}
type ChangeThemeIdType = {
    type: 'SET_THEME_ID'
    id:number
}
const initState:StateType = {
    themeId: 1,
}
export const themeReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        // дописать
            case SET_THEME_ID :
                return {
                    ...state,themeId:action.id
                }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id } as const) // fix any
