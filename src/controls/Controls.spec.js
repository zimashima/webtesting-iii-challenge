// Test away!
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Controls from './Controls'

test('Gate are defaults at unlock and open', ()=> {
    const {getByText} = render(<Controls locked closed/>)
    getByText('Unlock Gate' && 'Open Gate')
})


// test('Buttons text changes to reflect the state the door will be in if clicked', ()=>{
//     const {getByText, rerender} = render(<Dashboard />)
//     const openButton = getByText(/Close Gate/i)
//     const lockedGate = getByText(/Lock Gate/i)
//     fireEvent.click(openButton)
//     getByText(/Open Gate/i)
//     fireEvent.click(lockedGate)
//     getByText(/Unlock Gate/i)
    
// })


test('Closed button is disabled if the gate is locked', ()=> {
    const {getByText} = render(<Controls locked/>)
    getByText(/Close Gate/i)
})

test('Locked button is disabled if the gate is open', ()=> {
    const {getByText} = render(<Controls closed={false}/>)
    getByText(/Lock Gate/i)
})