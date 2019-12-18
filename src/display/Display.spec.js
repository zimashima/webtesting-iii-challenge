
import React from 'react'

import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Display from './Display'

test('Displayed Rendered Correctly', ()=> {
    
    const {getByText, rerender} = render(<Display locked closed/>)
    getByText('Locked')
    getByText('Closed')

    rerender(<Display locked={false} />)
    getByText('Unlocked')

    rerender(<Display closed={false} />)
    getByText('Open')

})



test('Displayed classes contain "green-led" when "Unlocked" or "Open"', ()=> {

    const {getByText} = render(<Display locked={false} closed={false}/>)

    const displayUnLocked = getByText(/unlocked/i)
    const displayOpen = getByText(/open/i)

    expect(displayUnLocked.classList.contains('green-led')).toBe(true)
    expect(displayOpen.classList.contains('green-led')).toBe(true)
})

test('Display classes contain "red-led" when "Locked" or "Closed"', ()=> {

    const {getByText} = render(<Display locked={true} closed={true}/>)

    const displayLocked = getByText(/locked/i)
    const displayClosed = getByText(/closed/i)

    expect(displayLocked.classList.contains('red-led')).toBe(true)
    expect(displayClosed.classList.contains('red-led')).toBe(true)
})

