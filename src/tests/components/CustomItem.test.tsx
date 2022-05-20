import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CustomApp from '../../components/CustomApp'
import { act } from 'react-dom/test-utils';

test('should update the value', () => {
  render(<CustomApp />);
  // fill the input label and add new item
  const inputValueElementFromCustomItem = screen.getByPlaceholderText(/Initial value/i);
  fireEvent.change(inputValueElementFromCustomItem, {target: {value:"value0"}})
  const btnAddElement = screen.getByText("ADD")
  const btnSave = screen.getByText("Save")
  act(() => {
    btnAddElement.dispatchEvent(new MouseEvent('click', {bubbles: true}))
    btnSave.dispatchEvent(new MouseEvent('click', {bubbles: true}))
  })
  // toggle the edit mode  
  const btnEditModeElement = screen.getByTitle("Edit values")
  act(() => {
    btnEditModeElement.dispatchEvent(new MouseEvent('click', {bubbles: true}))
  })
  //  edit and save the values
  const btnSaveEdit = screen.getByText("Save")
  const inputEdit = screen.getByPlaceholderText(/Initial value/i);
  fireEvent.change(inputEdit, {target: {value:"value1"}})
  act(() => {
    btnSaveEdit.dispatchEvent(new MouseEvent('click', {bubbles: true}))
  })
  
  const inputUpdated = screen.getByPlaceholderText(/Initial value/i) as HTMLInputElement
  expect(inputUpdated.value).toBe("value1");
})
