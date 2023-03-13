const initState = {
    isLoading: false,
}
type LoadingACType =ReturnType<typeof loadingAC>
type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}
export const loadingReducer = (state = initState, action: LoadingACType): any => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING' :
   return        {
       ...state,isLoading : action.isLoading
        }
        // пишет студент  // need to fix
        default:
            return state
    }
}
export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
} as const)
