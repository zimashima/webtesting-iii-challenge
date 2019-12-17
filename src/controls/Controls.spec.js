// Test away!
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Controls from './Controls'

test('Gate are defaults at unlock and open', ()=> {
    const {getByText} = render(<Controls locked closed/>)
    getByText('Unlock Gate' && 'Open Gate')
})

//- provide buttons to toggle the `closed` and `locked` states.
test('Buttons to toggle the closed and locked', ()=> {

})

//- buttons' text changes to reflect the state the door will be in if clicked
test('Buttons text changes to reflect the state the door will be in if clicked', ()=>{
    const {getByText, rerender} = render(<Controls closed/>)
    const openButton = getByText(/Open Gate/i)
    fireEvent.click(openButton)
    getByText(/Close Gate/i)
    
})


//- the closed toggle button is disabled if the gate is locked
//- the locked toggle button is disabled if the gate is open
test('Closed button is disabled respectively if the gate is locked', ()=> {
    const {getByText} = render(<Controls locked/>)
    getByText(/Close Gate/i)
})

test('Locked button is disabled respectively if the gate is open', ()=> {
    const {getByText} = render(<Controls closed={false}/>)
    getByText(/Lock Gate/i)
})