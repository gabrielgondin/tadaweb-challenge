import React from 'react'
import { render, screen } from '@testing-library/react'
import CustomApp from '../../components/CustomApp'
import { act } from 'react-dom/test-utils';

test('should render CustomForm first', () => {
  render(<CustomApp />);
  const spanElement = screen.getByText(/Add field names and values/i);
  expect(spanElement).toBeInTheDocument();
})

test('should render message when do not have itens', () => {
  render(<CustomApp />);
  const btnElementFromCustomForm = screen.getByTitle("Edit values")
  const pElementFromCustomFormEdit = screen.getByText(/Customise your form by adding/i);
  
  expect(btnElementFromCustomForm).toBeInTheDocument();
  expect(pElementFromCustomFormEdit).toBeInTheDocument();
})

test('CustomApp should render CustomFormEdit after toggle editMode', () => {
    render(<CustomApp />);
    const spanElementFromCustomForm = screen.getByText(/Add field names and values/i)
    const btnElementFromCustomApp = screen.getByTitle("Edit values")
    expect(spanElementFromCustomForm).toBeInTheDocument()
    expect(btnElementFromCustomApp).toBeInTheDocument()
    
    act(() => {
        btnElementFromCustomApp.dispatchEvent(new MouseEvent('click', {bubbles: true}))
    })
    
      const h1ElementFromCustomFormEdit = screen.getByText(/Dynamic Form Edit/i);
    const btnElementFromCustomFormEdit = screen.getByTitle("Add values");
    expect(h1ElementFromCustomFormEdit).toBeInTheDocument();
    expect(btnElementFromCustomFormEdit).toBeInTheDocument();
  })

  test('CustomApp should render CustomForm after toggle editMode twice', () => {
    render(<CustomApp />);
    const btnEditElementFromCustomApp = screen.getByTitle("Edit values")
    expect(btnEditElementFromCustomApp).toBeInTheDocument()
    
    act(() => {
        btnEditElementFromCustomApp.dispatchEvent(new MouseEvent('click', {bubbles: true}))
    })
    const btnAddElementFromCustomApp = screen.getByTitle("Add values")
    expect(btnAddElementFromCustomApp).toBeInTheDocument()
    
    act(() => {
        btnAddElementFromCustomApp.dispatchEvent(new MouseEvent('click', {bubbles: true}))
    })

    const btnAfterSecondClickEditElementFromCustomApp = screen.getByTitle("Edit values")
    expect(btnAfterSecondClickEditElementFromCustomApp).toBeInTheDocument()
  })
