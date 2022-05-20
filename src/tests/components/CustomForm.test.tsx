import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CustomForm from '../../components/CustomForm'
import { act } from 'react-dom/test-utils';

test('should render message when do not have itens', () => {
  render(<CustomForm />);
  const pElementFromCustomFormEdit = screen.getByText(/Customise your form by adding/i);
  
  expect(pElementFromCustomFormEdit).toBeInTheDocument();
})

test('should add a item empty when click on ADD button', () => {
    render(<CustomForm />);
    const btnAddElementFromCustomForm = screen.getByText("ADD")
    const pBeforeActElementFromCustomForm = screen.queryAllByText(/Customise your form by adding/i);
    
    act(() => {
        btnAddElementFromCustomForm.dispatchEvent(new MouseEvent('click', {bubbles: true}))
    })
    const pElementFromCustomForm = screen.queryAllByText(/Customise your form by adding/i);
    const labelElementFromCustomItem = screen.getByText(/Item 1/i);
        
    expect(pBeforeActElementFromCustomForm).toHaveLength(1);
    expect(pElementFromCustomForm).toHaveLength(0);
    expect(labelElementFromCustomItem).toBeInTheDocument();
})

test('should remove a item when click on remove button', () => {
  render(<CustomForm />);
  // add item
  const btnAddElementFromCustomForm = screen.getByText("ADD")
  
  act(() => {
      btnAddElementFromCustomForm.dispatchEvent(new MouseEvent('click', {bubbles: true}))
  })
  const labelElementFromCustomItem = screen.getByText(/Item 1/i)
  expect(labelElementFromCustomItem).toBeInTheDocument()
  // remove item  
  const btnRemoveElementFromCustomForm = screen.getByTitle("remove")

  act(() => {
    btnRemoveElementFromCustomForm.dispatchEvent(new MouseEvent('click', {bubbles: true}))
  })
  const labelAfterElementFromCustomItem = screen.queryAllByText(/Item 1/i);
  expect(labelAfterElementFromCustomItem).toHaveLength(0);
})


test('should add a item with values when input is filled and click on ADD button', () => {
  render(<CustomForm />);
  const btnAddElementFromCustomForm = screen.getByText("ADD")
  const inputLabelElementFromCustomItem = screen.getByPlaceholderText(/Enter the label name/i);
  const inputValueElementFromCustomItem = screen.getByPlaceholderText(/Initial value/i);
  
  fireEvent.change(inputLabelElementFromCustomItem, {target: {value:"label"}})
  fireEvent.change(inputValueElementFromCustomItem, {target: {value:"value"}})
  act(() => {
      btnAddElementFromCustomForm.dispatchEvent(new MouseEvent('click', {bubbles: true}))
  })
  const labelElementFromCustomItem = screen.getByText(/label/i);
  const inputElementFromCustomItem = screen.getByText(/value/i);
      
  expect(labelElementFromCustomItem).toBeInTheDocument();
  expect(inputElementFromCustomItem).toBeInTheDocument();
})
