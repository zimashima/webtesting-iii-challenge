// Test away!
import React from 'react'
import {render} from '@testing-library/react'
import {toBeInTheDocument, toHaveClass} from '@testing-library/jest-dom'
import Display from './Display'

test('Display is rendered correctly', ()=> {
    const {getByText, rerender} = render(<Display locked closed/>)
    rerender(<Display locked={false} />)
    getByText('Unlocked')

    rerender(<Display closed={false} />)
    getByText('Open')
})