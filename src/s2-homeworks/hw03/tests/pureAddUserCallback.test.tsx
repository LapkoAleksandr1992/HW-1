import React from 'react'
import {pureAddUserCallback, UserType} from '../HW3'

let initialState: UserType[]
const setName = (a: UserType[]) => {
    initialState = a
}

beforeEach(() => {
    initialState = []
})

test('name 1', () => {
    pureAddUserCallback('name', setName, initialState)
    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name')
    expect(!!initialState[0]._id).toBe(true)
})
