// Test away!
import React from 'react'
import {render} from '@testing-library/react'
import {toBeInTheDocument, toHaveClass} from '@testing-library/jest-dom'
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

// displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise - CHECKED
// displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise CHECKED

// - displays if gate is open/closed and if it is locked/unlocked
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class