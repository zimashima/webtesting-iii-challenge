// Test away

import React from 'react';
import {render} from '@testing-library/react'

import Dashboard from './Dashboard'

test('Display and controls are rendered in dashboard', ()=>{
    const {getByText} = render(<Dashboard /> )
})