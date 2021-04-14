import React from 'react'
import {render, fireEvent} from 'calculator-test-utils'
import Calculator from '../calculator'
import {dark} from 'themes'

test('the clear button switches from AC to C when there is an entry', () => {
  const {getByText} = render(<Calculator />, {theme: dark})
  const clearButton = getByText('AC')

  fireEvent.click(getByText(/3/))
  expect(clearButton).toHaveTextContent('C')

  fireEvent.click(clearButton)
  expect(clearButton).toHaveTextContent('AC')
})
