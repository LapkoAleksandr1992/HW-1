import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any

    switch (action.type) {
        case 'sort': { // by name
            const copyState = [...state]
            return copyState.sort((a,b)=> {
                if (action.payload ==='down')  {
                  return   a.name<b.name?1:-1
                }   return   a.name>b.name?1:-1
            })
            // need to fix
        }
        case 'check': {

            return state.filter(el=>el.age>=18) // need to fix
        }
        default:
            return state
    }
}
