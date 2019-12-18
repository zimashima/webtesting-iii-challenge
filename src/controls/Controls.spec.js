// Test away!
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Controls from './Controls'

test('Gate are defaults at unlock and open', ()=> {
    const {getByText} = render(<Controls locked closed/>)
    getByText('Unlock Gate' && 'Open Gate')
})


test('Buttons text changes to reflect the state the door will be in if clicked', ()=>{
    const {getByText, rerender} = render(<Controls locked={false} closed={false}/>)
    const buttons = document.querySelectorAll(".toggle-btn")

    expect(buttons).toHaveLength(2);

    const controlLockUnlock = buttons[0];
    
    expect(controlLockUnlock.textContent).toBe("Lock Gate")
    rerender(<Controls locked={true}/>)
    expect(controlLockUnlock.textContent).toBe("Unlock Gate")

    const controlOpenClose = buttons[1];
    expect(controlOpenClose.textContent).toBe("Close Gate");
    rerender(<Controls closed={true}/>)
    expect(controlOpenClose.textContent).toBe("Open Gate")

})


test('Closed button is disabled if the gate is locked', ()=> {
    const {getByText} = render(<Controls locked/>)
    getByText(/Close Gate/i)
})

test('Locked button is disabled if the gate is open', ()=> {
    const {getByText} = render(<Controls closed={false}/>)
    getByText(/Lock Gate/i)
})